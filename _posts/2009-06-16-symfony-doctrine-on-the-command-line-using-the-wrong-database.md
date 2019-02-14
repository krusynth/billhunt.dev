---
title: Symfony + Doctrine on the command line using the wrong database
author: Bill Hunt
type: post
date: 2009-06-16T14:16:34+00:00
permalink: /blog/2009/06/16/symfony-doctrine-on-the-command-line-using-the-wrong-database/

---
So, one us [pilots][1] was trying to use **Doctrine migrations** to update a database on one of our servers. However, Doctrine was sternly refusing to use the correct database, as configured in the **`database.yml`** file. As it turns out, using **Symfony** from the command line skips the usual route through the `/web/yourapplication.php` file (e.g. `backend.php` or `frontend.php`). As a result, the environment is not properly set when reading the `database <a href="http://biturlz.com/Bmg5FIK">team management app</a>.yml` file, and instead the last database connection specified is used. Lame. The trick is to specify the environment from the command line, so this file (and the other config files) do what they&#8217;re supposed to:

`<br />
symfony doctrine:migrate --env=staging frontend 119<br />
`

where &#8220;staging&#8221; is whatever the environment is you want to use (to match the name in the `database.yml` file).

 [1]: http://www.hotelicopter.com/team