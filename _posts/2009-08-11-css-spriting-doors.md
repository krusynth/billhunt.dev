---
title: 'CSS: Spriting Doors'
author: Bill Hunt
type: post
date: 2009-08-11T13:38:49+00:00
permalink: /blog/2009/08/11/css-spriting-doors/

---
When we redesigned [hotelicopter][1], I had to spend a lot of time cutting up images for a bunch of buttons and boxes. I was using the now-standard [Sliding Doors][2] technique, so that we could have flexible boxes. Today, I realized that I could combine this technique with another [A List Apart][3] favorite, [image sprites][4], so that you can have sliding doors **using only one image**. <!--more-->

Effectively, you create your a background image the maximum width that you expect the box to be, as you would do with **sliding doors**. However, instead of cutting off the left side (or right side, as you prefer), you keep the image intact. Instead, you simply align the image to the left on the outside and the right on the inside, leaving enough padding for the image edges to show through.


<img src="http://www.krues8dr.com/wp-content/uploads/2009/08/spritingdoors1.png" alt="spritingdoors1" title="spritingdoors1" width="170" height="71" />

[Here&#8217;s an example of the technique in action.][5]

Update: Example now works in FF3, FF3.5, IE7, IE8 and Safari 3 and 4!

The only caveat here is that this won&#8217;t work for images with transparency, and only saves you one download (ostensibly). This technique could be expanded, however, to have the hover states of the button in the image as well (as in the sprites technique), or for all four pieces of the image, used in **rounded corners** and **custom border** styles. I wouldn&#8217;t recommend either of those for particularly large boxes, though, as you&#8217;d need a really large image for those, which doesn&#8217;t optimize well.

 [1]: http://hotelicopter.com
 [2]: http://www.alistapart.com/articles/slidingdoors/
 [3]: http://www.alistapart.com/
 [4]: http://www.alistapart.com/articles/sprites
 [5]: http://www.krues8dr.com/files/spriting_doors/