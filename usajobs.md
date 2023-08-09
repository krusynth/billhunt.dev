---
title: All Job Listings
permalink: /jobs/usajobs/
datum: usajobs
layout: jobs
action: 'Apply'
feed:
  title: RSS feed of the full jobs list
  link: /usajobs.xml
---

This is a list of all USAJobs postings that match all of the following criteria:

* Job Code is 2210 (Information Technology Management), 1550 (Computer Science), or 1560 (Data Science)
* Grade is at least GS 12 or equivalent
* Is from a non-defense, non-law-enforcement civilian agency: No DOD, Justice Dept., or DHS (except for CISA & FEMA)
* Was posted in the last two weeks (leaves out most "bulk hiring" actions that are open for many months)

[The script I use to fetch these positions from the USAJobs API is available on GitHub.](https://github.com/krusynth/usajobs-feed)

Note: this list also includes non-federal civic tech and public interest jobs that caught my eye.

For my curated list, check out the **[main jobs page](/jobs/)**.

For an explanation of pay grades, term positions, the senior executive service, and other government-specific information, check out the [Digital Policy Guide page on hiring](https://digitalpolicy.us/policies/hiring/).

**All descriptions below are added by me, based on my knowledge of the agency and role as posted; this content is not from the original posts and as such there may be inaccuracies.**

{%- assign items = "" | split:"/" -%}
{% assign now = 'now' | date: '%s' %}

{% assign specialpay = 'Securities and Exchange Commission,Federal Deposit Insurance Corporation,Consumer Financial Protection Bureau,Commodity Futures Trading Commission' | split:',' %}

{% assign posts = site.data.usajobs %}
{%- for post in posts  %}
  {% assign title = post.agency %}
  {% assign title = title | append: ' - ' | append: post.title %}

  {% if post.grade %}
    {% assign title = title | append: ' (' | append: post.grade | append: ')' %}
  {% endif %}


  {% assign classes = 'job-post' %}
  {% if specialpay contains post.agency %}
    {% assign classes = classes | append: ' special-pay' %}
  {% endif %}
  {% if post.title contains 'INFOSEC' or post.title contains 'Security' %}
    {% assign classes = classes | append: ' security' %}
  {% endif %}
  {% if post.remote %}
    {% assign classes = classes | append: ' remote' %}
    {% assign title = title | append: ' (Remote)' %}
  {% endif %}

  {% assign post = post | setval: 'classes', classes %}
  {% assign post = post | setval: 'title', title %}

  {% if post.closes %}
    {% capture afterwards %} **Closes {{ post.closes | date: site.date_format }}**{% endcapture %}
    {% assign post = post | setval: 'afterwards', afterwards %}
  {% endif %}

  {% assign items = items | push: post %}
{% endfor -%}

{% assign page = page | setval: 'items', items %}

