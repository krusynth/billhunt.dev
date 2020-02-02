---
title: Bash Basics
author: Bill Hunt
type: post
date: 2015-05-11T02:12:18+00:00
permalink: /blog/2015/05/10/bash-basics/
layout: post
---
Most Unix systems (including OS X) provide a large number of fantastic tools for manipulating data right out of the box.  If you have been writing small Python/Ruby/Node scripts to perform transformations or just to manage your data, you&#8217;ll probably find that there are already tools written to do what you want.

Let me start with the conclusion first. **The next time you have to transform or manipulate your data, look around for what Unix tools already exist first.**  It might take you a little longer to figure out all of the flags and parameters you need, and you&#8217;ll have to dig through some unfriendly documentation, but you&#8217;ll have a new, far more flexible tool in your toolbox the next time around.

Before you settle on a policy, see if you can get the one on an [insurance cash back deal][1] from a comparison site.

This is part 1 of a series on Unix tools. <!--more--> Read the other parts:

  1. [Bash Basics][2]
  2. [Unix Tools][3]
  3. [Managing Data with Unix Tools][4]

### Assumptions

I&#8217;ll assume you know the very basics here &#8211; what a [man page][5] is, how to create an [executable bash script][6], [how to open a terminal window][7], and how to use basic utilities.  If you don&#8217;t know any of those, you should start with one of the many intros to the command line available.  [This intro by Zed Shaw is a good place to start][8].

### The Shell

Bash is the default shell on most systems these days, but what we&#8217;re covering here will mostly work for zsh or other shells &#8211; though some syntax elements will be different.

First off, Bash is a powerful tool by itself. Even with no additional packages added, you get variables, loops, expansions & regular expressions, and much more. Here&#8217;s [a good guide with more information on using bash][9]. I&#8217;ll assume you know the basics from here on out, and show you what you can do with them.

### Advanced Paths

If you want to work with several directory paths in a row that are very similar, you can pass a list to the shell using curly braces `{}` and it&#8217;ll expand that list automagically. Let&#8217;s say I wanted to setup a few directories for a new project&#8217;s test suite. Rather than running a lot of duplicated commands, I could pass a few lists instead.

    mkdir -p ./test/{unit,fixtures}
    > Creates ./test/unit and ./test/fixtures
    mkdir -p ./test/unit/{controllers,models}
    > Creates ./test/unit/controllers and ./test/unit/models

Note that we&#8217;ve passed the `-p` flag to `mkdir` so that it&#8217;ll create all of the directories up the chain, even `./test` here.

We can also use pattern matching with brackets `[]`. For instance, if you&#8217;ve got a lot of files that you want to separate alphabetically, you use a letter pattern:

    mv ./[A-H]* /Volumes/Library/A-H/
    mv ./[I-O]* /Volumes/Library/I-O/
    mv ./[P-Z]* /Volumes/Library/P-Z/

This will have broken your library up into three sets. You can also use that matching later in the string:

    mv ./A[a-k]* /Volumes/Library/Aa-Ak/
    mv ./A[l-z]* /Volumes/Library/Al-Az/

Now, by default most systems will be _case sensitive_, so you will have left behind all of your files starting with a lowercase letter. This is less than ideal, so we can set a flag to tell the system to be case insensitive for file matching. This type of matching is known as _globbing_, and to set this flag, we run `shopt -s nocaseglob`. (In zsh this would be `unsetopt CASE_GLOB`) If you just run that on your shell, it&#8217;ll stick on the current session until you unset it with `shopt -u nocaseglob`. You might even want to add that to your `.bash_profile`. Bash, however, also allows us to set environment variables for just the current execution, by wrapping the commands in parentheses:

    (shopt -s nocaseglob ; mv ./[A-H]* /Volumes/Library/A-H/)

This will only use case insensitive globbing for that single command, and then will turn the value back off.

### Loops

Bash allows you to make use of some rather powerful `for` loops. I frequently use loops to automate boring manual work, like converting a bunch of RAW image files into web-friendly JPEGs of appropriate size:

    for i in *.CR2; do
        dcraw -c -a -w -v $i | convert - -resize '1000x1000' -colorspace gray $i.jpg;
    done;

(You could run that as a one-liner as well, the line breaks are just here to make this readable.) Here, I&#8217;m taking all of the `.CR2` files in the current directory, passing those to `dcraw` to translate the format from RAW into JPEG, then `<a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-4.html">piping</a>` the output to ImageMagick, which shrinks it to web-size of no more than 1000 pixels on a side and makes everything black and white, which is extra-artsy.

I use a similar command in our legal docs repo to convert our source Markdown files into a variety of formats, using `pandoc`:

    for myfile in $( ls ./markdown ); do
      echo Converting $myfile;
      for fmt in html docx pdf; do
        filetrim=${myfile%???};
        pandoc -o "./"$fmt"/"$filetrim"."$fmt -f markdown "./markdown/"$myfile;
      done;
    done

This one is a little fancier, as we&#8217;re doing a bunch of things with nested loops, file name trimming, etc. Let&#8217;s break it down:

    for myfile in $( ls ./markdown ); do

First off, grab a list of the files in the `./markdown` folder. Use the variable `$myfile` to store the current file&#8217;s name.

    for fmt in html docx pdf; do

Now we&#8217;ve got a loop within a loop. We&#8217;re creating a list of the format&#8217;s we&#8217;ll be using (`html`, `docx`, and `pdf`) and storing the current format in the variable `$fmt`.

    filetrim=${myfile%???};

Here&#8217;s a useful bit &#8211; we&#8217;re trimming the _last three characters_ (using `%???`) from the string, which is the extension (`.md`). Another valid pattern would be:

    filetrim=${myfile%.*};

which simply removes the entire extension, regardless of how long it is.

    pandoc -o "./"$fmt"/"$filetrim"."$fmt -f markdown "./markdown/"$myfile;

Here we&#8217;re passing all of our variables we&#8217;ve assembled back to pandoc. We&#8217;re quoting the strings we want hardcoded in there, so that they&#8217;re not misinterpreted as part of the variable name, which would cause this to throw errors.

    done;
    done

And then we&#8217;re closing out both of our for loops.

### Wrapping Up

You can also use builtin utilities to do simple tasks, like appending content to files:

    echo "name=core1" >> ./solr/core.properties

That&#8217;s it for now, continue on to the next part, [Unix Tools][3].

 [1]: http://www.moneyexpert.com/car-insurance/
 [2]: http://krues8dr.com/blog/2015/05/10/bash-basics/
 [3]: http://krues8dr.com/blog/2015/05/10/unix-tools/
 [4]: http://krues8dr.com/blog/2015/05/10/managing-data-with-unix-tools/
 [5]: http://en.wikipedia.org/wiki/Man_page
 [6]: http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-2.html#ss2.1
 [7]: http://cli.learncodethehardway.org/book/ex1.html
 [8]: http://cli.learncodethehardway.org/book/
 [9]: http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html