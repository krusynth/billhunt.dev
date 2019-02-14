---
title: Getting a handle on Pandora
author: Bill Hunt
type: post
date: 2008-05-29T19:50:49+00:00
permalink: /blog/2008/05/29/getting-a-handle-on-pandora/

---
I&#8217;m a huge fan of [Pandora][1]. &#8211; it&#8217;s great for finding new music or just chilling out listening to some of my well-crafted stations. However, the fact that I&#8217;m completely tied to my browser to enjoy it makes me crazy. In particular, the fact that I can&#8217;t control the player without the window being active, as I&#8217;m able to do with iTunes (and some clever [Quicksilver][2]/Applescript magic). Enter [PandoraBoy][3]. It&#8217;s a Mac-only application that interfaces with Pandora. The best part is that it&#8217;s scriptable.<!--more-->

With a bit of Applescript and a Quicksilver trigger, I can create conditionals to control either PandoraBoy or iTunes, depending on which is open at the current time. Below is my script for Play/Pause &#8211; a few modifications and you can make scripts for next track, volume, and rating. Woo!

`<br />
tell application "System Events" to set iTunesIsRunning to (name of processes) contains "iTunes"<br />
tell application "System Events" to set PandoraBoyIsRunning to (name of processes) contains "PandoraBoy"`

`<br />
if iTunesIsRunning then<br />
&nbsp;&nbsp;&nbsp;&nbsp;tell application "iTunes"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if player state is playing then<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pause<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;play<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end if<br />
&nbsp;&nbsp;&nbsp;&nbsp;end tell<br />
else if PandoraBoyIsRunning then<br />
&nbsp;&nbsp;&nbsp;&nbsp;tell application "PandoraBoy"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;playpause<br />
&nbsp;&nbsp;&nbsp;&nbsp;end tell<br />
end if<br />
`

 [1]: http://www.pandora.com "Pandora.com - A station that plays only songs you like."
 [2]: http://www.blacktree.com/ "Quicksilver: The most useful Mac application ever."
 [3]: http://code.google.com/p/pandoraboy/ "PandoraBoy - a Pandora music player"