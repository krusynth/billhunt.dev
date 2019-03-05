---
title: 'Apache JMeter: Part 2 – Remote Testing Configuration'
author: Bill Hunt
type: post
date: 2011-03-20T18:39:49+00:00
permalink: /blog/2011/03/20/apache-jmeter-part-2-remote-testing-configuration/

---
Let&#8217;s say you&#8217;ve [already gotten through the basics of JMeter][1] and you&#8217;re ready to start setting up your testing. If you&#8217;re doing any sort of remote testing, you&#8217;ll inevitably need to know how to setup your client/server relationships. <!--more-->

The vast majority of JMeter&#8217;s configuration is done through a single file, the `jmeter.properties` file (which lives inside of the JMeter `bin/` directory). Any of the properties in this file can be overridden by options on the command line &#8211; but since this is Java we&#8217;re talking about, the method is ridiculous (code for Linux/Mac):

`<br />
jmeter -J<em>propertyname1=value1</em> -J<em>propertyname1=value1</em><br />
`

Of course, that doesn&#8217;t work for every option. For instance, to tell the server that you want it to **listen for the initial request on a port that&#8217;s not random**, you have to do so as an environment variable set on the same line before you make the call to the server. Truly and utterly bizarre:

`<br />
SERVER_PORT=1660 jmeter-server<br />
`

**As noted below, the server_port only sets the port used for the initial request from the client to the server to begin testing, the response from the server to the client will be sent on a totally random port. I also found that the setting above did not work for setting the listening port at all!**

### Server (Slave) Configuration

The server configuration is ridiculously easy. The server just does what it&#8217;s told, so you only have to tell it what port to listen on. In the `jmeter.properties` file, you only need to set the `server.rmi.localport` value to whatever port you want. (You can also set this from the command line using `-J`, see the example above.) **Note that you MUST set this option to keep the server from listening on a random port!** The jquery &#8220;default&#8221; is 1099.

**Also note that if you&#8217;re having trouble with the Client not being able to talk to the Server, you need to restart the Client after you&#8217;ve made any changes to the Server. This is very counter-intuitive!**

Now, you may encounter a case where the server is trying to respond to the client (master) but looking up the **wrong IP address** for the hostname. The fix is easy, simply add a record in your [hosts file][2] (often /etc/hosts) for the correct address.

Last, you should be aware that the server responds to the client&#8217;s request on a different port than the server_port specified &#8211; it will return test results on a **random high-numbered port** (45000-70000?). If you haven&#8217;t opened up your firewall to account for this, it may cause the server to throw a nasty connection error. **Note that there is no way to set the response port by default in JMeter.** However, if you feel like getting your hands dirty, you can **[hack the source to add this option][3]**

### Client (Master) Configuration

The client configuration is only a little more difficult. You&#8217;ll need to set the `server_port` to the same value you used for the server, again in the `jmeter.properties` file. You&#8217;ll also need to set the `remote_hosts` &#8211; this should be a comma-separated list of all of the servers&#8217; hostnames or IP addresses. For example:

`<br />
remote_hosts=ec2-50-17-92-85.compute-1.amazonaws.com,ec2-50-17-94-90.compute-1.amazonaws <a href="http://biturlz.com/otO2oiE">team task management</a>.com<br />
`

That&#8217;s it! Once you&#8217;ve got that all setup, you should be able to start jmeter and have the list of servers appear under the `Run > Remote Start` menu. Note that this does not start up the servers &#8211; you&#8217;ll still need to start them manually on each machine &#8211; it merely runs the current test on the already-running servers. You can also use `Run > Remote Start All` to run the current test on all servers at once.

As a final note, you might need to take a look at `jmeter.log`, also under the `JMeter bin/ directory` to debug anything that&#8217;s not working correctly. There are often a few useful messages in there to help you along the way.

 [1]: /2011/03/19/apache-jmeter-part-1-the-basics/
 [2]: http://en.wikipedia.org/wiki/Hosts_(file)
 [3]: /2011/03/22/apache-jmeter-part-3-hacking-jmeter-to-customize-the-listening-port-on-the-client/