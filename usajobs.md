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

**All descriptions below are added by me, based on my knowledge of the agency and role as posted; this content is not from the original posts and as such there may be inaccuracies. The filters provided may miss posts with unusual naming or grade scales.**

{% assign now = 'now' | date: '%s' %}

{% assign specialpay = 'Securities and Exchange Commission,Federal Deposit Insurance Corporation,Consumer Financial Protection Bureau,Commodity Futures Trading Commission,National Credit Union Administration' | split:',' %}

{% capture jobs -%}

{% assign posts = site.data.usajobs %}
{%- for post in posts %}
  {% assign title = post.agency | append: ' - ' | append: post.title %}

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
  {% if post.grade contains 'ES' %}
    {% assign classes = classes | append: ' grade-ses grade-15 grade-14' %}
  {% elsif post.grade contains '15' or post.grade contains '16' or post.grade contains '17' %}
    {% assign classes = classes | append: ' grade-15 grade-14' %}
  {% elsif post.grade contains '14' %}
    {% assign classes = classes | append: ' grade-14' %}
  {% endif %}

  {% assign description = post.content %}
  {% if post.closes %}
    {% capture afterwards %} **Closes {{ post.closes | date: site.date_format }}**{% endcapture %}
    {% assign description = description | append: afterwards %}
  {% endif %}
  {% assign url = post.url %}
  {% assign image = post.image %}

  {% include card-template.html
     title=title
     image=post.image
     description=description
     url=post.url
     classes=classes
%}
{% endfor -%}

{%- endcapture -%}
{%- assign page = page | setval: 'jobs', jobs -%}