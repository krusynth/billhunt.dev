---
title: Fix for Adium Not Working with MSN Messenger Bug
author: Bill Hunt
type: post
date: 2009-03-24T19:32:33+00:00
permalink: /blog/2009/03/24/fix-for-adium-not-working-with-msn-messenger-bug/

---
For the last few months, I haven&#8217;t been able to use **MSN Messenger** with **Adium**. I&#8217;d log in, but it would just hang endlessly. Searching the bug reports was frustrating, and didn&#8217;t provide any insights. Today I found [this obscure post][1] which gives the solution. Apparently M$N changed the default connection settings without Adium making the change on their end to your account automatically. To resolve this, open the Preferences panel and Edit the account in question. Choose the Options tab (I didn&#8217;t even know this existed) and set **Login Server** to `messenger.live.com`, **Port** to `80` and turn on (check) the **Connect via HTTP** box. Once you turn back on your account, everything should be working fine.

 [1]: http://trac.adiumx.com/ticket/11574 "Bug report for Adium explaining MSN Messenger fix"