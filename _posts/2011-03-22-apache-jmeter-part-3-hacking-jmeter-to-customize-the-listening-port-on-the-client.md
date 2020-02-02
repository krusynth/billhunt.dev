---
title: 'Apache JMeter: Part 3 – Hacking JMeter to Customize the Listening Port on the Client'
author: Bill Hunt
type: post
date: 2011-03-22T17:45:11+00:00
permalink: /blog/2011/03/22/apache-jmeter-part-3-hacking-jmeter-to-customize-the-listening-port-on-the-client/
layout: post
---
By default, there&#8217;s no way to set which port that the **Apache JMeter client (master) listens on for the response of a test** &#8211; and it **always uses a random port** instead! That means you have to open up your firewall on ports **45000-70000** to run it, which sucks. It&#8217;s easy enough to patch, though! Below, you can download my patched source to build your own copy:

[JMeter 2.4 Patched Source][1]

If you are using a newer version of JMeter than 2.4 (the latest, as of the time of writing this), directions follow for which files probably need to be updated. If you&#8217;ve never built JMeter or a Java application from source, you are also in luck, as all the gory details are here, too! <!--more-->

### Updating the necessary files

In the code above, I&#8217;ve only changed a couple of small things, [based on this useful post][2].

  1. #### Tell the listeners about the new port

    In `src/core/org/apache/jmeter/engine/ConvertListeners.java`, we need to let the listener know to respond on a given port. We use the `JMeterUtils.getPropDefault` method to get the port from the configuration, so we need to tell the code to use the JMeterUtils library. Go to the list of `import` statements at the top, and add this one to the list:

    `<br />
import org.apache.jmeter.util.JMeterUtils<br />
`

    Then we just need to add the port as an argument to the Listener that&#8217;s created. Replace this:

    `<br />
RemoteSampleListener rtl = new RemoteSampleListenerImpl(item);<br />
`

    with this:

    `<br />
int callbackPort = JMeterUtils.getPropDefault("client.rmi.callbackport", 0);<br />
RemoteSampleListener rtl = new RemoteSampleListenerImpl(callbackPort, item);<br />
`

      * #### Change the Listener implementation to take the new port

        Now, all we have to do is update `RemoteSampleListenerImpl` to accept the new port. In `src/core/org/apache/jmeter/samplers/RemoteSampleListenerImpl.java`, find the `RemoteSampleListenerImpl` definition and replace:

        `<br />
public RemoteSampleListenerImpl(Object listener) throws RemoteException {<br />
        super();<br />
`

        with:

        `<br />
public RemoteSampleListenerImpl(int port, Object listener) throws RemoteException {<br />
         super(port);<br />
` </li> </ol>

        Once both of those are complete, you&#8217;re ready to compile! Once you have the finished product, you can specify the custom listening port with the brand new, super shiny `client.rmi.callbackport` option in `jmeter.properties` file (it&#8217;s not in there by default, so you&#8217;ll have to add it by hand) or from the command line:

        `<br />
jmeter -Jclient.rmi.callbackport=12345<br />
`

        ### Building JMeter from source

        If you&#8217;re from the non-Java world, building JMeter may seem a bit weird. It&#8217;s not just as simple as the traditional `apt-get` or `configure/make/make install`. You&#8217;ll be doing all of the building with `ant`, with a heavy dose of manual labor along the way.

        First thing first &#8211; you&#8217;re gonna need to install ant if it&#8217;s missing. If you&#8217;re using a Fedora/Red Hat/CentOS box (including Amazon Linux!) you can do:

        `<br />
yum install ant<br />
`

        You&#8217;ll also need some additional libraries for that, to add support for ReplaceRegExp:

        `<br />
yum install ant-apache-oro.noarch<br />
`

        We&#8217;re going to assume you have java jvm and hopefully the java development kit installed, otherwise go hunt down the latest version from the internet &#8211; use yum or go digging [here][3].

        Now, by default, you should just be able to go into the base directory for the package and run `ant install`, but for me, a bunch of things failed immediately. Here&#8217;s what I had to fix:

        #### xstream 1.3.1 has wrong source location

        I don&#8217;t know why it was released with a broken dependency location (and no forwarding), but I finally found xstream at `nexus.codehaus.org`

        in `build.properties` replace

        `<br />
xstream.loc = http://repository.codehaus.org/com/thoughtworks/xstream/xstream/1.3.1<br />
`

        with

        `<br />
<nobr>xstream.loc = https://nexus.codehaus.org/content/repositories/releases/com/thoughtworks/xstream/xstream/1.3.1</nobr><br />
`

        #### Missing dependencies

        I also found that you have to manually tell `ant` to go get any missing packages, which you do with this command:

        `<br />
ant download_jars<br />
`

        #### Can&#8217;t find javac

        While building, `ant` died because it couldn&#8217;t find a suitable compiler. &#8220;But `javac` is installed!&#8221;, I said. I had to check where java thought it&#8217;s home was:

        `<br />
echo $JAVA_HOME<br />
> /usr/lib/jvm/jre<br />
`

        Well, that&#8217;s not right!

        `<br />
locate javac<br />
> /usr/lib/jvm/java-1.6.0-openjdk.x86_64/bin/<br />
`

        Ah ha! We&#8217;ll just re-set the environment variable! We use the **directory above the `bin/`.**

        `<br />
export JAVA_HOME=/usr/lib/jvm/java-1.6.0-openjdk.x86_64/<br />
`

        #### Can&#8217;t find junit

        Next, ant determined that it needed `junit` for unit testing and it wasn&#8217;t installed. This wasn&#8217;t handled by the previous download_jars installation, for reasons I don&#8217;t completely understand.

        `<br />
BUILD FAILED<br />
/home/ec2-user/jakarta-jmeter-2.4/build.xml:911: Problem creating jar: /home/ec2-user/jakarta-jmeter-2.4/lib/junit/test.jar (No such file or directory) (and the archive is probably corrupt but I could not delete it)<br />
`

        So we go looking for where to get junit:

        `<br />
yum provides junit<br />
> junit-3.8.2-6.5.3.amzn1.noarch : Java regression test package<br />
`

        It looks like amazon has built their own, but your system may tell you something different. We can still do:

        `<br />
yum install junit<br />
`

        #### Still can&#8217;t build (can&#8217;t create junit dir?)

        Oh for eff&#8217;s sake. `ant` can&#8217;t even create the necessary directory for the `junit` tests.

        `<br />
mkdir ./lib/junit<br />
`

        Once all of that was done, I could finally run the command:

        `<br />
ant install<br />
`

        And all was well. Once you&#8217;ve had a successful build, you&#8217;ll need to `chmod` your newly-created binaries so that they can actually be run:

        `<br />
chmod a+x ./bin/jmeter<br />
chmod a+x ./bin/jmeter-server<br />
`

        And then you should be ready to go! run `./bin/jmeter` and the GUI should popup, letting you know that all is well!

 [1]: /files/jakarta-jmeter-2.4.patched.zip
 [2]: http://developersblog.espris.sk/2009/10/how-to-jmeter-ssh-tunnel.html
 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html