---
title: Javascript Event Handling With prototype’s bind()
author: Bill Hunt
type: post
date: 2008-02-07T17:10:02+00:00
permalink: /blog/2008/02/07/javascript-event-handling-with-prototypes-bind/
layout: post
---
In Javascript, the native event handlers have the infuriating problem of not allowing the user to pass in additional parameters. Normally, when you want to handle an onclick or the like, you can only reference _this_ (meaning the event itself). So everything you want to handle, you have to create a completely isolated custom function for. Not at all efficient. The [Prototype][1] library provides a solution.<!--more-->

I recently discovered that Prototype (and by extension, [Scriptaculous][2]) has a useful workaround for this problem using it&#8217;s [bind()][3] function. This function allows you to bind to a function an object to use as the scope of operation. Meaning, if you call it within an object and add `bind(this)` to your function call, everything within the function is treated as part of the calling object, not the function.

`<br />
item.addEventListener('mousedown',<br />
	function(event) {<br />
		this.obj.addClassName('suggest_found');<br />
		this.hide();<br />
	}.bind(this)<br />
);<br />
`

And thus, your event handlers are actually made relevant to what you&#8217;re calling, instead of being arbitrary and orphaned chunks of code.

 [1]: http://www.prototypejs.org
 [2]: http://script.aculo.us/
 [3]: http://alternateidea.com/blog/articles/2007/7/18/javascript-scope-and-binding "prototype's bind() function explanation"