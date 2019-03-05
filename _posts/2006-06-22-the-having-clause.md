---
title: 'MySQL: The Having Clause'
author: Bill Hunt
type: post
date: 2006-06-22T15:27:27+00:00
permalink: /blog/2006/06/22/the-having-clause/

---
This one has been driving me crazy for years [helpful site][1].

Let’s say that you have a MySQL database with a bunch of users in it, and you want to see only those users that have duplicate email addresses. <!--more--> You’d think this would work, but it doesn’t:

<code class="codeblock">SELECT COUNT(*) AS count, * FROM users WHERE count &gt; 1 GROUP BY email;</code>

The problem is that `WHERE` is applied before the `GROUP BY`, so you can’t use aggregation functions (`COUNT`, `MAX`, etc) with a `WHERE`. The solution is to use `HAVING`, which is applied after the `GROUP BY`:

<code class="codeblock">SELECT COUNT(*) AS count, * FROM users GROUP BY email HAVING count &gt; 1;</code>

This will give the expected result.

 [1]: http://biturlz.com/ZhcYcDi