---
layout: default
title: USAJobs Listings
permalink: /jobs/usajobs/
datum: usajobs
layout: list
action: 'Apply'
feed:
  title: RSS feed of these USAJobs listings
  link: /usajobs.xml
---

This is a list of all USAJobs postings that match all of the following criteria:

* Job Code is 2210 (Information Technology Management), 1550 (Computer Science), or 1560 (Data Science)
* Grade is at least GS 12 or equivalent
* Is from a non-defense, non-law-enforcement civilian agency: No DOD, Justice Dept., or DHS (except for CISA & FEMA)
* Was posted in the last two weeks (leaves out most "bulk hiring" actions that are open for many months)

[The script I use to fetch these positions from the USAJobs API is available on GitHub.](https://github.com/krusynth/usajobs-feed)

For my curated list that also includes non-federal jobs, check out the **[main jobs page](/jobs/)**.


{%- assign items = "" | split:"/" -%}
{% assign now = 'now' | date: '%s' %}

{%- for post in site.data.usajobs  %}
  {% for job in site.data.jobs %}
    {% if job.url contains post.id %}
      {% assign post = post | setval: 'content', job.content %}
    {% endif %}
  {% endfor %}

  {% if post.closes %}
    {% capture afterwards %} **Closes {{ post.closes | date: site.date_format }}**{% endcapture %}
    {% assign post = post | setval: 'afterwards', afterwards %}
  {% endif %}

  {% assign items = items | push: post %}
{% endfor -%}

{% assign items = items | sort: 'date' | reverse %}
{% assign page = page | setval: 'items', items %}

