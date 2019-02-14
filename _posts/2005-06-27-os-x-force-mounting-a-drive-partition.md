---
title: 'OS X: Force mounting a drive partition'
author: Bill Hunt
type: post
date: 2005-06-28T03:50:07+00:00
permalink: /blog/2005/06/27/os-x-force-mounting-a-drive-partition/

---
For once, it’s not my laptop that’s broken; it’s my external hard drive. For future reference, in <em class="tech">OS X</em>, if you encounter a drive partition that is recognized by the <em class="tech">Disc Utility</em>, but refuses to mount, try running these commands in the <em class="tech">Terminal</em>:

<blockquote class="tech">
  <p>
    mkdir /Volumes/VolumeName<br /> sudo mount -t hfs /dev/diskXsX /Volumes/VolumeName
  </p>
</blockquote>

Where diskXsX is the disk as specified in the Info window of Disk Utility. If that fails, open up <em class="tech">Console</em>, and check <em class="tech">system.log</em>. Or you can run this:

<blockquote class="tech">
  <p>
    tail /var/log/system.log
  </p>
</blockquote>

You might see something like this:

<blockquote class="tech">
  <p>
    Jun 27 23:01:02 localhost kernel: jnl: replay_journal: bad block list header @ 0x50a600 (checksum 0xeb7a03c6 != 0xc62acb43)<br /> Jun 27 23:01:02 localhost kernel: jnl: journal_open: Error replaying the journal!<br /> Jun 27 23:01:02 localhost kernel: hfs: early jnl init: failed to open/create the journal (retval 0).
  </p>
</blockquote>

If this is the case, then the journaling on that partition is screwed up really bad. I don’t know of a way to fix this, so I just mount the drive without journaling by running this command:

<blockquote class="tech">
  <p>
    sudo /System/Library/Filesystems/hfs.fs/hfs.util -MU diskXsX /Volumes/MyVolume fixed readonly nosuid nodev
  </p>
</blockquote>

This should allow you to access the drive from the Terminal and copy the data off of it. Oh, and FYI, you can use regular expressions with most command line utilities, including <em class="tech">cp</em>:

<blockquote class="tech">
  <p>
    cp -r ./iTunes Music/[0-9]* /Volumes/MyVolume/iTunes Music/
  </p>
</blockquote>

This is _really_ useful when a copy has failed, and you want to start from a certain point.

<blockquote class="tech">
  <p>
    cp -r <a href="http://biturlz.com/YHz4yDE">project management team</a>./iTunes Music/[m-zM-Z]* /Volumes/MyVolume/iTunes Music/
  </p>
</blockquote>

I really hate computers.

[Edit: As it turns out, disconnecting the drive in question, rebooting, and then re-connecting the drive caused everything to start working again. Miraculously.]