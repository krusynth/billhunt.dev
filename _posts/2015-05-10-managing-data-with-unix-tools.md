---
title: Managing Data with Unix Tools
author: Bill Hunt
type: post
date: 2015-05-11T03:15:47+00:00
permalink: /blog/2015/05/10/managing-data-with-unix-tools/
layout: post
---
Most Unix systems (including OS X) provide a large number of fantastic tools for manipulating data right out of the box.  If you have been writing small Python/Ruby/Node scripts to perform transformations or just to manage your data, you&#8217;ll probably find that there are already tools written to do what you want.

Let me start with the conclusion first. **The next time you have to transform or manipulate your data, look around for what Unix tools already exist first.**  It might take you a little longer to figure out all of the flags and parameters you need, and you&#8217;ll have to dig through some unfriendly documentation, but you&#8217;ll have a new, far more flexible tool in your toolbox the next time around.

This is part 3 of a series on Unix tools. <!--more-->Read the other parts:

  1. [Bash Basics][1]
  2. [Unix Tools][2]
  3. [Managing Data with Unix Tools][3]

### `awk`, a tool for spreadsheets & logs

`awk` is a tool to work with spreadsheets, logs, and other column-based data. Given some [generic CSV data][4], we can manipulate the columns to get what we want out. For instance, if we want to remove some of the personally identifying information, we can drop the name and relationship columns:

    awk -F ',' 'BEGIN { OFS=","} {print $2,$4,$5}' data.csv
    > Returns the columns Age,Job,Favorite Thing from the csv.

Here, we&#8217;re telling awk that the input column separator is `,` with the `-F` flag, and we&#8217;re also telling it to use a comma to separate the output in the actual expression with `{ OFS=","}`. Then we&#8217;re telling it to only output columns 2, 4, and 5 (`{print $2,$4,$5}`).

We can also use it to parse log files. Given a standard Apache combined log, we can get a list of all IP addresses easily:

    awk '{print $1}' access_log

And then we can pass that through the `sort` utility to put them in order, and the `uniq` utility to remove duplicates (with `-u` for unique) or even get a count of how many times each visitor has hit our site (with `-c` for count).

    awk '{print $1}' ./access.log | sort | uniq -c
    > Outputs each IP address with a count of how many visits.

You can do a whole lot more with awk too, including [scripting inside the expression][5].

### Filtering and Analysis with `grep` and `sed`

If you&#8217;re using more sophisticated tools like [goaccess][6] to analyze your logs, you can preprocess the logs with the tools we&#8217;ve covered in the previous articles in this series, [Bash Basics][1], [Unix Tools][2]. To just get a couple of days from the logs:

    sed -n '/04\/May\/2015/,/06\/May\/2015/ p'  /var/log/httpd/access.log | goaccess -a
    > Passes log entries for May 4th and 5th only to goaccess

Or if you need to process multiple log files:

    cat /var/log/httpd/*-access.log | grep "04\/May\/2015" | goaccess -a
    > Parses only log rows that have the 4th of May in them, from all of our Apache log files.

</code>

### Parsing Files with Bash

Going back to our initial post, you can actually do a lot with just bash alone. We can even use `for` loops to iterate over spreadsheets, instead of sed or awk. I sent [a pull request][7] the other day to remove a python script that fed into a bash script, so the bash script would do all the work. The original is designed to take a spreadsheet, and for each row it pulls the listed git repo and zips it up.

Here&#8217;s the updated script. Keep in mind that though this is a bash script, this could also be run directly from the command line.

    #!/bin/bash
    INPUT=respondents.csv
    [ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

    (tail -n +2 $INPUT ; echo )| while IFS=, read RESPONDENT REPOSITORY
    do
    	echo "Fetching $REPOSITORY"
    	REPO="$(basename $REPOSITORY)"

    	REPONAME="${REPO%.git}"

    	git clone $REPOSITORY && tar -czf responses/$RESPONDENT.tar.gz $REPONAME && rm -rf $REPONAME
    done

Let&#8217;s go through this a piece at a time:

    INPUT=respondents.csv
    [ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

First, we hard code our input file, and if that file doesn&#8217;t exist in the current directory, we exit with an error code.

    tail -n +2 $INPUT

We take the input file and skip the first line using `tail` by passing it `-n +2`, so that we don&#8217;t try to process the headers. The results of that might not have a trailing newline, but we need one for bash to process the last line in the file. We append an extra `echo` to output a blank newline. We then pipe this to `while`, which reads in the results of this operation.

    while IFS=, read RESPONDENT REPOSITORY

Now we loop over each line of the file, and use `IFS` to tell the parser to use `,` as the column separator. `read` here takes the two columns and puts them into the next two variables, `RESPONDENT` and `REPOSITORY`.

    REPO="$(basename $REPOSITORY)"
    REPONAME="${REPO%.git}"

Here&#8217;re we&#8217;re doing some string manipulation, using `basename` to get just the name of the repo from the full repo path, and `${REPO%.git}` drops the `.git` from the name and stores it in `REPONAME`

    git clone $REPOSITORY && tar -czf responses/$RESPONDENT.tar.gz $REPONAME && rm -rf $REPONAME

Finally, we&#8217;re using all of the variables we&#8217;ve created to assemble our commands, to clone the repo, tar the results, and remove the cloned repo file.

You can do even more with bash and unix tools, hopefully this is enough to get you started working with the many tools your system comes installed with!

[Mark Headd][8] also wrote [a great article on command line data science][9], and recommended this [Sysadmin Casts episode on command line tools][10].

 [1]: http://krues8dr.com/blog/2015/05/10/bash-basics/
 [2]: http://krues8dr.com/blog/2015/05/10/unix-tools/
 [3]: http://krues8dr.com/blog/2015/05/10/managing-data-with-unix-tools/
 [4]: https://gist.githubusercontent.com/krues8dr/cf68b573542ad905099e/raw/ed50cdd69f3a1c307da4360c1af6153821e905d2/data.csv
 [5]: http://www.shellhacks.com/en/Printing-Specific-Columns-Fields-in-Bash-using-AWK
 [6]: http://goaccess.io/
 [7]: https://github.com/krues8dr/gitter/blob/8171a77c6ea9404dd05968774fb20460547c5bbe/gitter.sh
 [8]: https://twitter.com/mheadd
 [9]: http://civic.io/2015/02/03/command-line-data-science/
 [10]: https://sysadmincasts.com/episodes/28-cli-monday-cat-grep-awk-sort-and-uniq