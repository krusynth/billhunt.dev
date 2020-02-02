---
title: 'Apache JMeter: Part 1 – The Basics'
author: Bill Hunt
type: post
date: 2011-03-19T17:22:42+00:00
permalink: /blog/2011/03/19/apache-jmeter-part-1-the-basics/
layout: post
---
Recently, I&#8217;ve been doing a bit of **load testing** on **Amazon AWS** after reading <a style="text-decoration: none" href="http://www.cloudstoragewizard.com/"><font color="black">cloud storage reviews</font></a> to determine how much abuse our web application can take without killing the server. I&#8217;ve been attempting to use [Apache JMeter][1] to do the hard part, but came up against a slew of problems. The documentation provided seems targetted at dyed-in-the-wool Java developers (that &#8220;J&#8221; at the beginning is clearly a warning shot), and makes pretty big assumptions about the knowledge of the audience. Here are the basic concepts of how to get started using it, targeted for us LAMP developers.

<!--more-->

The first thing to understand is that there are two main to go about using Jmeter. By default, Jmeter runs as a free-standing (GUI) application on which you run Tests directly from the machine it&#8217;s running on. You do this with the `Run > Start` option.

You can also, however set it up to run on other machines, reporting the results back to the original GUI. In JMeter terms, the Master from which you send the tests is called the Client, and the Slaves that run the tests are the Hosts. You have to configure which hosts to run on &#8211; afterward you can use `Run > Remote Start > <em>slave address</em>` to run the test on a single machine, or `Run > Remote Start All` to run on all slaves.

To get started, try running JMeter on your local machine, and writing a basic test. If you&#8217;re working locally, just running the bin/jmeter (or bin/jmeter.sh on Mac, bin/jmeter.bat on Windows) script should start up a java session and run the program on your machine. If you&#8217;re working remotely, Jmeter runs in an X-Windows environment &#8211; so if you&#8217;re on a Mac you&#8217;ll need to have [X11][2] installed and running.

### Writing Tests

There&#8217;s actually very good [documentation on setting up a test by recording your actions clicking through a site][3], but here&#8217;s the short version. To create a new test, you really only need a few elements.

**Note:** adding elements (Nodes) to a test is tricky because the elements are all _context-sensitive_. If you haven&#8217;t selected the right parent in the list, you won&#8217;t be able to add certain children. I&#8217;ve listed the correct element to click on as the parent below.

  * A **Thread Group**. Used to set the number of virtual users (Threads) and number of Loops (iterations, obv) for \*each\* slave to perform (if you&#8217;re using the local machine) Click on the **Test Plan** and then chose `Add > Threads (Users) > Thread Group` from the `Edit` menu or the right-click contextual menu. For the trial run, you might just give it 1 `User`, 1 for `Ramp Up Period` and 1 `Loop`
  * A **Listener** of some type. This is the what shows you the results of the test, either by a chart, table, or other medium. The simplest one is probably the **Summary Report** &#8211; to add it, click on the **Thread Group** and choose `Add > Listener > Summary Report` from the menu. No additional configuration is necessary for this type of **Listener**.
  * A **Sampler** &#8211; an actual test element. For instance, if you want to just grab one page off of a site to see if it&#8217;s working, you&#8217;ll add an **HTTP Request** Sampler. Click on the **Thread Group** again, then choose `Add > Sampler > HTTP Request`. We&#8217;ll want to test with a site we know is working first, so enter _google.com_ for the `Server Name or IP`.

Once all that is entered, you can choose to Start your test locally through the `Run > Start` option. If you have not saved your test, JMeter will prompt you to do so. After that, if you click on the **Summary Report** you should see that there has been 1 Sample, with (hopefully) an Error % of 0. If you&#8217;re getting an Error % greater than 0, you should probably check that you&#8217;re properly connected to the internet and you&#8217;ve followed all the steps correctly.

Now that they system is working, you can try entering your own domain in, and maybe enter a **Path** of a particular page that you want to test. **Note:** be **very careful** when testing against your live site. Increasing your thread or loops too high can cause the server to stop responding. (Which is what we want to test in the first place!) It&#8217;s best to perform your load testing against a non-production machine. Like, say, one set up on Amazon AWS.

From here, this would be a good time to read that above [article on setting up a test by recording your actions with a proxy server][3], to create more complicated an thorough tests.

 [1]: http://jakarta.apache.org/jmeter/ "Apache JMeter"
 [2]: http://www.simplehelp.net/2006/10/22/how-to-install-x11-in-os-x/
 [3]: http://jakarta.apache.org/jmeter/usermanual/jmeter_proxy_step_by_step.pdf