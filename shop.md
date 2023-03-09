---
layout: default
title: Shop
permalink: /shop/
datum: shop
layout: list
action: 'Get This'
image: https://billhunt.dev/uploads/2022/09/tshirts.jpg
---

Update 2022.11.28: **FOUR NEW DESIGNS** have been added to the shop for CyberMonday!!! ALSO all of my designs **now come in long-sleeve and hoodie versions** as well!!!

Please note: I do not make any profit off of these items. All CafePress items such as shirts are sold at cost. I accept donations for the stickers I mail out personally, and anything beyond my costs is donated to charity. The best way to support my work is to tell people about it!

Cafepress manages all shop orders for shirts. They do all the work here, please contact them about any problems!

{%- assign items = "" | split:"/" -%}
{% assign now = 'now' | date: '%s' %}

{%- for post in site.data.shop  %}
  {% assign items = items | push: post %}
{% endfor -%}

{% assign page = page | setval: 'items', items %}
