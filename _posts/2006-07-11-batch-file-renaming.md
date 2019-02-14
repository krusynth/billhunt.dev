---
title: Batch File Renaming
author: Bill Hunt
type: post
date: 2006-07-11T15:27:28+00:00
permalink: /blog/2006/07/11/batch-file-renaming/

---
How many times have you had a bunch of files that you wanted to change the extension on? <!--more-->And all you really want to do is make

`mv` work _differently_:

<code class="codeblock">mv *.jpeg *.jpg</code>

Well, if you’re on a Linux, Unix, or Mac box, you’re in luck &#8211; this is easy to achieve. All you need to do is list all of the files you’re looking for:

<code class="codeblock">ls ./*.jpeg</code>

…pipe that through sed, and apply a regular expression replacement (remove the `jpeg`):

<code class="codeblock">ls ./*.jpeg | sed -e 's/\.jpeg//'</code>

…and then use `xargs` to get the output of `sed`, store it in an expression, `{}`, and pass it to `mv`:

<code class="codeblock">ls ./*.jpeg | sed -e 's/\.jpeg//' | xargs -t -i {} mv {}.jpeg {}.jpg</code>

That should work on most boxes. Macs might freak and think that `xargs -t <strong>-i</strong> {}` should be `xargs -t <strong>-I</strong> {}`.