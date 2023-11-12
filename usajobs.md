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
For my curated list, check out the **[main jobs page](/jobs/)**.

This is a list of all USAJobs postings that match all of the following criteria:

* Job Code is 2210 (Information Technology Management), 1550 (Computer Science), or 1560 (Data Science)
* Grade is at least GS 12 or equivalent
* Is from a non-defense, non-law-enforcement civilian agency: No DOD, Justice Dept., or DHS (except for CISA & FEMA)
* Was posted in the last two weeks (leaves out most "bulk hiring" actions that are open for many months)

[The script I use to fetch these positions from the USAJobs API is available on GitHub.](https://github.com/krusynth/usajobs-feed)

This list also includes non-federal civic tech and public interest jobs that caught my eye.

Salary numbers below are the base rate, locality pay will increase these numbers (when eligible). For example, the Washington DC area has a +32.49% adjustment for 2023. For an explanation of pay grades, term positions, the senior executive service, and other government-specific information, check out the [Digital Policy Guide page on hiring](https://digitalpolicy.us/policies/hiring/).

All descriptions below are added by me, based on my knowledge of the agency and role as posted; this content is not from the original posts and as such there may be inaccuracies. The filters provided may miss posts with unusual naming or grade scales.

{% assign now = 'now' | date: '%s' %}

{% assign specialpay = 'Securities and Exchange Commission,Federal Deposit Insurance Corporation,Consumer Financial Protection Bureau,Commodity Futures Trading Commission,National Credit Union Administration,Department of the Treasury - Office of Financial Research' | split:',' %}

{% capture jobs -%}

{% assign posts = site.data.usajobs %}

{% include jobs-list.html posts=posts %}

{%- endcapture -%}
{%- assign page = page | setval: 'jobs', jobs -%}