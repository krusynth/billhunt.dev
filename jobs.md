---
title: Cool Govtech Jobs
permalink: /jobs/
datum: jobs
layout: jobs
action: 'Apply'
feed:
  title: Follow jobs list only, with RSS
  link: /jobs.xml
---
You can follow this list with the RSS link above, and I also repost them to <a href="https://mastodon.publicinterest.town/@jobs">Public Interest Jobs on Mastodon</a>!

This is a **curated** list of mostly senior positions. It includes a few non-federal jobs. For a more comprehensive list of federal jobs, check out my **[All Job Listings page](/jobs/usajobs/)**.

For an explanation of pay grades, term positions, the senior executive service, and other government-specific information, check out the [Digital Policy Guide page on hiring](https://digitalpolicy.us/policies/hiring/).

**All descriptions below are added by me, based on my knowledge of the agency and role as posted; this content is not from the original posts and as such there may be inaccuracies.**

Not finding what you're looking for? Here are some other great jobs boards:

* {:.heading} **Public Interest Tech**
* [USAJobs](https://www.usajobs.gov/)
* [Blacks in Civic Tech](https://jobs.blacksincivictech.org/)
* [Demand Progress - Open Gov Jobs](https://twitter.com/opengovjobs)
* [Code for America](https://civictechjobs.codeforamerica.org/)
* [Beeck Center Digital Service Network](https://airtable.com/shr94eNIRwETYYH4V/tbllb0ep4vRowx2Uj/viwJGUwYMfzsf5qGr)
* [Impact Opportunity](https://impactopportunity.org/jobs/)
* [The Bridge](https://jobs.thebridgework.com/)
* [Internet Law and Policy Foundry](https://www.ilpfoundry.us/jobs/)
* [Progressive Data Jobs](https://www.progressivedatajobs.org/job-postings/)
* [Engaging Local Government Leaders](https://elgljobs.com/)
* [Partnership for Public Service](https://gogovernment.org/fellowship/ipa-talent-exchange-program/#candidate)
* [Justice Tech Download](https://www.justicetech.download/)
{:.column}


* {:.heading} **General Technology & Adjacent**
* [Responsible Tech Job Board](https://alltechishuman.org/responsible-tech-job-board)
* [Tech Ladies Job Board](https://members.hiretechladies.com/jobs)
* [Tech Jobs for Good](https://techjobsforgood.com/)
* [Technical.ly](https://technical.ly/jobs/)
* [All Hands](https://jobs.all-hands.us/jobs)
* [Pallet Important Jobs](https://important-jobs.pallet.com/jobs)
* [Ed's Clean Energy Jobs List](https://edsjobslist.com/)
* [B Work](https://www.bwork.com/candidate/job_search/quick/results?sort_field=post_date&sort_dir=desc)
* [Digital Rights](https://www.digitalrights.community/job-board)
* [Ethical Tech Jobs Boards Megalist](https://docs.google.com/spreadsheets/d/1dFVoF6f9VU5pjaGhyyvQaBN0n6ae-iLCtlvsO1N2jhA/edit#gid=0)
* [Fellowships Megalist](https://docs.google.com/spreadsheets/d/1VpYIEC7MhA_6VVORk5S9CDuccx_tEvFVefeDTilenXQ/edit#gid=0)
{:.column}

{%- assign items = "" | split:"/" -%}
{% assign now = 'now' | date: '%s' %}

{% assign specialpay = 'Securities and Exchange Commission,Federal Deposit Insurance Corporation,Consumer Financial Protection Bureau,Commodity Futures Trading Commission' | split:',' %}

{% assign posts = site.data.usajobs | where_exp:"job", "job.content" %}
{%- for post in posts %}
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
