---
title: 'BBEdit: Regular Expression Case Change Options'
author: Bill Hunt
type: post
date: 2008-02-08T18:36:37+00:00
permalink: /blog/2008/02/08/bbedit-regular-expression-case-change-options/

---
I&#8217;m a huge fan of [Regular Expressions][1]. They are, without a doubt, the single most powerful tool in the programmer&#8217;s toolbox. [BBEdit][2], my favorite text editor, happens to have really excellent regular expression support. Among its features is the ability to change the case of matched text &#8211; which is really great if you&#8217;re having to reformat lists or, say, rename every function in your code.<!--more-->

Here&#8217;s how it works. You write your usual regular expression in the Find window. In the Replace box, you prepend the normal replacement tag (`\1, \2`, etc) with a key character which transforms the following match. Here&#8217;s a list of available transformations:

\u
:   Make the next character uppercase

\U
:   Make all following characters uppercase until reaching another case specifier (\u, \L, \l ) or \E

\l (lowercase L)
:   Make the next character lowercase

\L
:   Make all following characters lowercase until reaching another case specifier (\u, \U, \l ) or \E

\E
:   End case transformation opened by \U or \L

So, a match would look like:

`<br />
This is UPPERCASE: \U\1\E, this is camelCase: \L\1\E\u\2<br />
`

 [1]: http://en.wikipedia.org/wiki/Regular_expressions
 [2]: http://www.barebones.com/