---
title: Upgrading Solr from 4.2 to 4.3+ on CentOS 6.4
author: Bill Hunt
type: post
date: 2013-11-01T13:50:49+00:00
permalink: /blog/2013/11/01/upgrading-solr-from-4-2-to-4-3-on-centos-6-4/

---
I ran into an issue with a Solr configuration that was working for me locally, but not on our CentOS 6.4 server. I&#8217;ve documented below all of the issues I encountered along the way, as the upgrade from Solr 4.2 to 4.3+ is a pretty nasty one, due to major changes in the logging system (**LOG4J / SLF4J**)

<!--more-->

<div style="border: 3px solid #ee0000; border-radius: 5px; padding: 5px 10px; background-color: #fff9f9; margin-bottom: 1em;">
  <strong>Update: as of January 2015,</strong> I have been unable to get Solr 4.10 to run on Tomcat 6, so I&#8217;ve defaulted to just using the example Jetty server that&#8217;s bundled with it.  It&#8217;s less than ideal, but it works.  <a href="http://blogs.pigrider.com/blogs/62">Here&#8217;s good documentation on that process</a>.
</div>

### Lucene/Solr 4.3+ : The Beginning

The awesome guys at [Open Source Connections][1] had created a custom tokenizer for Solr for [The State Decoded][2], which was suddenly throwing this new error:

    java.lang.IllegalArgumentException: No enum const class org.apache.lucene.util.Version.LUCENE_43

Which I guessed to mean that they&#8217;d specified to use Lucene 4.3 (or in my case, Solr 4.3) in the `solr_home/conf/solrconfig.xml file`

    <luceneMatchVersion>LUCENE_43</luceneMatchVersion>

Since CentOS 6.4 only comes with Solr 4.2 out of the box, I tried changing that to `LUCENE_42` but received even more intimidating errors:

    org.apache.solr.common.SolrException:org.apache.solr.common.SolrException: Plugin init failure for [schema.xml] fieldType "descendent_facet_hierarchical": Plugin init failure for [schema.xml] analyzer/tokenizer: Error instantiating class: 'com.o19s.RegexPathHierarchyTokenizerFactory'


[The full stack dump is here][3]

We guessed that the package needed to be rebuilt from source.

### Maven

To do that, first I had to install Maven, which was missing from CentOS. [Following the instructions here][4], I went to the [Maven site][5] and found the download link for the latest version (in my case, that was 3.1.1). I grabbed that file and stored it in my /usr/local directory (for ease of use), unzipping as usual:

    cd;
    wget http://apache.tradebit.com/pub/maven/maven-3/3.1.1/binaries/apache-maven-3.1.1-bin.tar.gz
    tar -xzf ./apache-maven-3.1.1-bin.tar.gz -C /usr/local


Then I created a link to it:

    sudo ln -s apache-maven-3.1.1 maven

And added a native profile loader:

    sudo vi /etc/profile.d/maven.sh

To add it to the path:

    export M2_HOME=/usr/local/maven
    export PATH=${M2_HOME}/bin:${PATH}


### JDK

Now, after all of that, apparently I still did not have the Java Development Kit (aka JDK) installed. You&#8217;d think that the package OpenJDK would provide this, by the name, but it turns out that that only contains the Java Virual Machine (JVM). I discovered this as maven complained about **a missing file `tools.jar`**

So, I checked `yum` for the latest version and installed it:

    sudo yum list jdk
    sudo yum install java-1.6.0-openjdk-devel


And added another profile loader:

    sudo vi /etc/profile.d/java.sh

for that path:

    export JAVA_HOME=/usr/lib/jvm/java-1.6.0-openjdk-1.6.0.0.x86_64


A quick log out and log in fixed up my paths to use those. All that being done, I tried rebuilding the solr tokenizer, but it still didn&#8217;t work. I needed to upgrade Solr first.

### Upgrading to Solr4.3+

Now, between Solr 4.2 and Solr 4.3, they removed the native **LOG4J** support that is by default needed to run Solr. So there are a lot of extra steps here.

_<rant>Seriously, why they would do this, I have no idea. You install the Solr package, and it just won&#8217;t run. And there&#8217;s absolutely no documentation on exactly how to fix it. The developers just broke it and left everyone to figure it out on their own. I cannot begin to express my frustration or count the number of hours I lost on this step. </rant>_

#### A note on Tomcat logging

As you&#8217;re going through and starting and restarting tomcat (`sudo service tomcat6 restart`),

you&#8217;ll probably want to keep an eye on the log file here:

    less /var/log/tomcat6/localhost.[DATE].log

Most frustratingly, I found that any errors encountered during the _startup of Tomcat_ **were not actually logged until you shut it down**. This is generally _not_ how most Apache projects handle logging. (Again, WTF.) So the only way to know if you still had an issue was to restart \*twice\*.

Unfortunately, every time that Tomcat encountered a configuration error, it would **delete my web app configuration file entirely**. (Aside: **Seriously why would anyone think this is a good idea?**) So I had to create it multiple times. That file lives under the Catalina configuration directory here:

    /etc/tomcat6/Catalina/localhost/solr.xml

And looks like this:

    <Context docBase="/opt/solr/solr.war" debug="0" crossContext="false" >
       <Environment name="solr/home" type="java.lang.String" value="/opt/solr" override="true"/>
    </Context>


#### Now back to the good part

Now, I was finally ready to install the latest version of Solr. I headed over to the [Solr downloads page][6] and found that 4.5.1 was the latest. I grabbed the download from that page (after several redirects in between), and extracted it to my home directory:

    wget http://mirrors.gigenet.com/apache/lucene/solr/4.5.1/solr-4.5.1.tgz
    tar -xzf ./solr-4.5.1.tgz

Now, solr does not actually need to be built, just copied over. The previous installation of solr on the system was under `/opt/solr`, and just in case I broke everything, I wanted to keep a copy of that. If you&#8217;re not upgrading from a previous version, you don&#8217;t need to do this to move that out of the way:

    sudo mv /opt/solr /opt/solr-4.2.1

Then I copied the new version of solr&#8217;s example to the opt directory, and symlinked it into place.

    sudo cp -R ~/solr-4.5.1/example/solr /opt/solr-4.5.1
    cd /opt
    sudo ln -s solr-4.5.1 solr


I needed the solr.war file as well, and also symlinked that.

    cd /opt/solr
    sudo cp ~/solr-4.5.1/dist/solr-4.5.1.war ./
    sudo ln -s solr-4.5.1.war solr.war


Next, I received nasty errors in the localhost.log about missing SLF4J:

    SEVERE: Exception starting filter SolrRequestFilter
    org.apache.solr.common.SolrException: <strong>Could not find necessary SLF4j logging jars.</strong> If using Jetty, the SLF4j logging jars need to go in the jetty lib/ext directory. For other containers, the corresponding directory should be used. For more information, see: http://wiki.apache.org/solr/SolrLogging


I assumed you needed to provide the extra libraries to tomcat in the obvious way:

    sudo cp ~/solr-4.5.1/example/lib/ext/* /var/lib/tomcat6/lib/
    sudo cp ~/solr-4.5.1/dist/solrj-lib/* /var/lib/tomcat6/lib/


And others to solr:

    sudo cp -R ~/solr-4.5.1/dist/* /opt/solr/lib/


But apparently the libraries needed to be somewhere else also, which I found absolutely no documentation on anywhere. [This post finally got me to the right answer][7].

    sudo cp ~/solr-4.5.1/dist/solrj-lib/* /var/lib/tomcat6/webapps/solr/WEB-INF/lib/


Last, I needed to tweak the default solr file for the **multicore support** that we needed, allowing us to run multiple Solr indexes on one box.

    sudo vi /opt/solr/solr.xml


and a added new line for the second core:

    <cores adminPath="/admin/cores" defaultCoreName="collection1" host="${host:}" hostPort="${jetty.port:}" hostConte    xt="${hostContext:}" zkClientTimeout="${zkClientTimeout:15000}">
        <core name="collection1" instanceDir="collection1" />
        <core name="baltimorecode_dev_www" instanceDir="baltimorecode/www/staging/statedecoded" />
    </cores>


### Finally Rebuilding the custom Solr tokenizer

From there, I just needed to rebuild the custom tokenizer that we had.

    cd /opt/solr/baltimorecode/www/staging/statedecoded/src/

    sudo mvn package

    cp target/regex-path-tokenizer-0.0.1-SNAPSHOT.jar ../lib/regex-path-tokenizer-0.0.1-SNAPSHOT.jar


A final restart of tomcat:

    sudo service tomcat6 restart

And I could hit the localhost version of solr for that core!

    lynx http://localhost:8080/solr/baltimorecode_dev_www/admin/ping

I created an SSH Tunnel to verify that this was indeed working as expected:

    ssh -L 8009:localhost:8080 user@removtehost.org -N

And then fired up a browser to point at `http://localhost:8009/solr/` and solr was running perfectly.

### Finishing Up

The last little thing that caught me up in my sleep-deprived state was that the **PHP Solarium** package requires `allow_url_fopen` to be set to `On`. This seems rather obvious, but is not the default value on CentOS.

That was a long day.

Here are a few of the articles that I used to get this far:

  1. [Patrick Reilly: How to install maven on CentOS][4]
  2. [Solr: MultiCore][8]
  3. [Apache Tomcat configuration: HTTP Connectors][9]
  4. [Andrew Jaimes: Installing Lucene/Solr on CentOS with Tomcat][10]
  5. [Hipsnip Cookbooks issues: Solr Fails to start missing SLF4j][11]
  6. [StackOverflow: Solr 4.3 Tomcat6 Ubuntu installation exception][12] (More confusing than helpful.)
<li id="install-lucene-solar-with-tomcat-on-windows">
  <a href="http://liuweipingblog.cn/java/install-lucene-solar-with-tomcat-on-windows/">Xrigher: Install Lucene Solar with Tomcat on Windows</a> (This was the one that got me to the right answer!)
</li>

 [1]: http://www.opensourceconnections.com/
 [2]: http://www.statedecoded.com/
 [3]: https://github.com/statedecoded/statedecoded/issues/491#issuecomment-27504360
 [4]: http://preilly.me/2013/05/10/how-to-install-maven-on-centos/
 [5]: http://maven.apache.org/download.cgi
 [6]: http://lucene.apache.org/solr/mirrors-solr-latest-redir.html
 [7]: #install-lucene-solar-with-tomcat-on-windows/
 [8]: http://wiki.apache.org/solr/CoreAdmin
 [9]: http://tomcat.apache.org/tomcat-5.5-doc/config/http.html
 [10]: http://andres.jaimes.net/878/setup-lucene-solr-centos-tomcat/
 [11]: https://github.com/hipsnip-cookbooks/solr/issues/1
 [12]: http://stackoverflow.com/questions/16415948/solr-4-3-tomcat6-ubuntu-installation-exception