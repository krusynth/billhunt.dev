---
layout: page
title: Search
permalink: /search/
noindex: true
---

<form id="search-form">
	<label for="search">Search</label>
	<input type="text" id="search" name="search">
</form>
<div id="results" class="search-results"></div>

<template id="result-template">
	<article class="search-article">
		<header><h2 id="title" class="search-article-title"></h2></header>
		<section id="content" class="search-article-excerpt"></section>
		<footer><a id="link" class="btn btn-primary btn-small">Read More</a></footer>
	</article>
</template>