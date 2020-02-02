---
title: PHP SimpleTest Unit Testing – Expecting Exceptions and Errors
author: Bill Hunt
type: post
date: 2009-06-01T21:12:03+00:00
permalink: /blog/2009/06/01/php-simpletest-unit-testing-expecting-exceptions-and-errors/
layout: post
---
Like a good programmer, I try to be good about unit testing [More Info][1]. And also as a good programmer, I throw errors in my PHP where appropriate. I just learned today after a bit of digging through the codebase, that [SimpleTest][2] can be told to expect an Exception (or error) to be thrown in the test. <!--more-->

When using `trigger_error()`, you can use the `expectError()` as follows:

`<br />
	$this->expectError( $errorMessageToExpect, 'My message about this test case' );<br />
	my_code_that_causes_an_error();<br />
`

Note that there is an internal **queue of errors** in SimpleTest, so it will expect precisely one error for each call to `expectError()`.

If, however, you&#8217;re using `throw` you use `expectException` instead:

`<br />
	$this->expectException( $exceptionclass, 'My message about this test case' );<br />
	my_code_that_throws_an_exception_of_type_exceptionclass();<br />
`

You can specify the class of exception to expect in the first parameter &#8211; the usual type would be `Exception`, of course. If you set the first parameter to `false`, it defaults to this type.

 [1]: http://biturlz.com/895fqf8
 [2]: http://www.lastcraft.com/simple_test.php "SimpleTest from lastcraft"