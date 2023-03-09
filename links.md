---
title: Links
permalink: /links/
layout: list
action: 'Surf Their Web'
datum: links
feed:
  title: Download My FOAF RDF data
  link: /foaf.rdf
---
The following links are people and websites I follow on the internet because they are interesting. I've included a couple of oversimplified categories of things they may talk about... or not.

{%- assign items = "" | split:"/" -%}
{% assign now = 'now' | date: '%s' %}

{%- for post in site.data.links  %}
  {% assign post = post | setval: 'title', post.name %}
  {% assign tags = post.tags | join: ', ' %}
  {% assign post = post | setval: 'content', tags %}

  {% assign items = items | push: post %}
{% endfor -%}

{% assign page = page | setval: 'items', items %}