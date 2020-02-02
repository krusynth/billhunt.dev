---
title: Symfony / Doctrine – update a record using models
author: Bill Hunt
type: post
date: 2009-06-09T18:20:16+00:00
permalink: /blog/2009/06/09/symfony-doctrine-update-a-record-using-models/
layout: post
---
The [Doctrine manual][1] is really, really confusing in places. If you want to do something as simple as updating a record, the examples suggest that you use `Doctrine_Query::create()`. This doesn&#8217;t make a lot of sense, because we only want to manipulate the model, we shouldn&#8217;t have to even look at a query.<!--more--> Assuming you have the primary id of the record in question, you can do the following to easily modify a record:

`<br />
$myobj = new Doctrine::getTable('MyObj')->find($request->getParameter('my_id'));<br />
$myobj->property = 'New Value';<br />
$myobj->save();<br />
`

This is really straightforward, but if you don&#8217;t include the `find()` inline with the `getTable()` call, you&#8217;ll get an obscure **&#8220;Unknown method saveTableProxy&#8221;** error, which there seems to be no documentation for anywhere on the internet. It only took a couple of hours of trial and error to get this figured out.

In general, I&#8217;d still recommend Doctrine as an ORM, but the lack of consistent and clear documentation, with dreadfully obscure object methods, make for a very steep learning curve.

 [1]: http://www.doctrine-project.org/documentation/manual/1_1/en "Doctrine ORM"