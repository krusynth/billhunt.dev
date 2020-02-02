---
title: Unix Tools
author: Bill Hunt
type: post
date: 2015-05-11T02:19:21+00:00
permalink: /blog/2015/05/10/unix-tools/
layout: post
---
Most Unix systems (including OS X) provide a large number of fantastic tools for manipulating data right out of the box.  If you have been writing small Python/Ruby/Node scripts to perform transformations or just to manage your data, you&#8217;ll probably find that there are already tools written to do what you want.

Let me start with the conclusion first. **The next time you have to transform or manipulate your data, look around for what Unix tools already exist first.**  It might take you a little longer to figure out all of the flags and parameters you need, and you&#8217;ll have to dig through some unfriendly documentation, but you&#8217;ll have a new, far more flexible tool in your toolbox the next time around.

This is part 2 of a series on Unix tools. <!--more--> Read the other parts:

  1. [Bash Basics][1]
  2. [Unix Tools][2]
  3. [Managing Data with Unix Tools][3]

### `find`, a better `ls`

Now, savvy readers will get their hackles up over that last example, because we&#8217;re using `ls` to list our files before processing. ls is a great utility for listing files, but the results it outputs are potentially dangerous, as it doesn&#8217;t do any escaping. It&#8217;s also a rather single-purpose tool.

Instead, we can use the `find` utility in our advanced commands, which is safer. By default, \`find .\` will give you a **recursive** directory listing. Adding the \`-type\` flag will allow you to filter to directories or files only. (Note that this has to come after the directory path!)

    find ./test -type f
    > Lists all files in the ./test directory, all the way down.
    find . -type d
    > Lists all directories in the current directory and below.

That last example is a bit problematic, because find will include the current directory (`.`) in the list, which is usually undesirable. Smartly, find can also do both regular expression and simple pattern matching. To just match the name of something, using standard wildcards, use the `-name` flag; to use a regular expression, use the `-regex` flag. You can even tell it what flavor of regular expression you want to use with `-regextype` &#8211; I usually prefer `posix-extended`, myself.

    find ./temp -name "App*"
    > Returns all files & directories from the ./temp directory down that start with "App"
    find ./temp -type f -regextype posix-extended -regex '.*-[0-9]{1,6}.xml'
    > Find all files that end in 1 to 6 digits and have a .xml extension

Now, once you have your files, you&#8217;ll probably want to manipulate them. find provides you a few different ways of manipulating the results it finds. The `-exec` flag allows you to run commands on the output:

    find  ./* -type d -name "Temp*" -exec rm -R {} \;
    > Removes all folders that start with Temp.

Note that you need that trailing `\;` to tell exec that you&#8217;re done writing your command. Although if you just want to remove some files, you can just use `-delete`:

    find  ./* -type d -name "Temp*" -delete
    > Removes all folders that start with Temp.

### `grep`, the most important command

This is just a brief break to make sure you know about `grep`. Grep searches for matching text _within the contents_ of files. It&#8217;s a fantastic first-pass tool to narrow down your results. For instance, if I wanted to find all of the config files in my current directory that had port 8080 set:

    grep 8080 *
    > Apple.cfg:8080

To make this more useful, there are a handful of flags you want to use. Most of the time, you probably want this search to be recursive, so you&#8217;ll add `-R`. You&#8217;ll also probably want to pass the output of this command to some other command to process the list, in which case the matched text that is returned after the `:` is actually a problem &#8211; so use `-l` (that&#8217;s lowercase-L) to only show the files matched, not the match text. `-i` will give you case-insensitive matches. And most importantly, `-e <em>pattern</em>` allows you to supply a regular expression pattern to match, or `-E` uses &#8220;extended&#8221; regular expressions.

    grep -RilE "Ap{2}.*" .
    > Returns all files that contain the "App" either upper or lowercase.

grep can also be used as a simple filter, to return only entries that match a given pattern:

    cat /var/log/httpd/*-access.log | grep "04\/May\/2015"
    > Returns only log rows that have the 4th of May in them, from all of our Apache log files.

You can also tell grep to negative-match with `-v`, to _remove_ matching entries from the results.

_Will points out that there&#8217;s also `fgrep`, which is faster for fixed patterns, but cannot handle regular expressions._

### `xargs`, the list handler

Now, once you&#8217;ve got your files from find or grep, you&#8217;ll want to manipulate them. `xargs` has a single purpose &#8211; it takes a list of files and performs a command (or several commands) on them. Whatever command you give it, xargs will pass each file in turn to, with the filename as the input. For instance, you can output the contents of all the files in a directory:

    find ./* -type f | xargs cat

You can also construct more complicated commands by using the filename as a variable, which we assign with `-I <em>variable</em>`. It&#8217;s usually best to use something uncommon so it doesn&#8217;t cause other problems &#8211; the value of `{}` is what is usually used in examples:

    find ./* -type f | xargs -I {} mv {} {}.bak
    > Renames all files to add .bak to the end of the name

xargs can also fire off these commands in parallel, so if you have multiple processors (or multicore processors), you can fork separate threads and use them. We use the `-P` flag to tell it to run processes in parallel and give it a number for how many processes to run. [Here&#8217;s an article on using xargs as a hadoop replacement.][4]

xargs is one of my most used tools, as you can construct very long and complicated commands using the output of other commands.

### `sed`, the search-and-replace powertool

`sed` is an amazingly powerful utility &#8211; . It&#8217;s main use is to find and replace text across files. For instance, if I want to change the port of a service in a config file, I can do so easily:

    sed -i '' 's/8080/8983/g' ./config.yml

No need to open the file and edit it, just edit in place. You can also combine this with find to edit multiple files:

    sed -i '' 's/8080/8983/g' $(find ./config/ -type f -name '*yml' )

Here, we&#8217;re capturing the results of find and passing it to sed with `$( )`. You could also use `xargs` or find&#8217;s `-exec` flag as discussed above.

It can also find values in a given file. One thing I often use it for is filtering down to a particular date range in a large log file. For instance, if I just care about a few days in an Apache log file, I can tell sed to get just the rows from the start date to the end date:

    sed -n '/04\/May\/2015/,/06\/May\/2015/ p'  /var/log/httpd/access.log
    > Returns lines from the file that start on 04/May/2015, and stops at the first instance of 06/May/2015

You&#8217;d need about [20 lines of Python][5] to do the same thing. This is just a taste of what sed can do, it&#8217;s very useful.

_[Ozzy][6] also points out that there&#8217;s [jq][7] which is like sed for JSON._

That&#8217;s it for now, continue on to the next part, [Manipulating Data with Unix Tools][3].

 [1]: http://krues8dr.com/blog/2015/05/10/bash-basics/
 [2]: http://krues8dr.com/blog/2015/05/10/unix-tools/
 [3]: http://krues8dr.com/blog/2015/05/10/managing-data-with-unix-tools/
 [4]: http://aadrake.com/command-line-tools-can-be-235x-faster-than-your-hadoop-cluster.html
 [5]: http://ychaouche.informatick.net/logsearch
 [6]: https://twitter.com/ozzydidact
 [7]: http://stedolan.github.io/jq/