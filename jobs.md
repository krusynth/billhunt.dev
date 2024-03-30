---
title: Cool Govtech Jobs
permalink: /jobs/
datum: jobs
layout: jobs
action: 'Apply'
metalinks:
  - title: Follow jobs list only, with RSS
    link: /jobs.xml
---
This is a **curated** list of mostly senior positions. It includes a few non-federal jobs. For a more comprehensive list of federal jobs, check out my **[All Job Listings page](/jobs/usajobs/)**.

You can follow this list with the RSS link above, and I also repost them to <a href="https://mastodon.publicinterest.town/@jobs">Public Interest Jobs on Mastodon</a>!

Salary numbers below are the base rate, locality pay will increase these numbers (when eligible). For example, the Washington DC area has a +32.49% adjustment for 2023. For an explanation of pay grades, term positions, the senior executive service, and other government-specific information, check out the [Digital Policy Guide page on hiring](https://digitalpolicy.us/policies/hiring/).

All descriptions below are added by me, based on my knowledge of the agency and role as posted; this content is not from the original posts and as such there may be inaccuracies. The filters provided may miss posts with unusual naming or grade scales.

Is this your first time applying for a federal government job? Check out the [18F guide to federal hiring](https://join.tts.gsa.gov/hiring-process/), which includes details on how to write your first federal resume!

<details>

<summary>Not finding what you're looking for? Here are some other great jobs boards</summary>
<div>

<ul class="column">
  <li class="heading"><strong>Public Interest Tech</strong></li>
  <li><a href="https://www.usajobs.gov/">USAJobs</a></li>
  <li><a href="https://jobs.blacksincivictech.org/">Blacks in Civic Tech</a></li>
  <li><a href="https://twitter.com/opengovjobs">Demand Progress - Open Gov Jobs</a></li>
  <li><a href="https://civictechjobs.codeforamerica.org/">Code for America</a></li>
  <li><a href="https://airtable.com/shr94eNIRwETYYH4V/tbllb0ep4vRowx2Uj/viwJGUwYMfzsf5qGr">Beeck Center Digital Service Network</a></li>
  <li><a href="https://impactopportunity.org/jobs/">Impact Opportunity</a></li>
  <li><a href="https://jobs.thebridgework.com/">The Bridge</a></li>
  <li><a href="https://www.ilpfoundry.us/jobs/">Internet Law and Policy Foundry</a></li>
  <li><a href="https://www.progressivedatajobs.org/job-postings/">Progressive Data Jobs</a></li>
  <li><a href="https://elgljobs.com/">Engaging Local Government Leaders</a></li>
  <li><a href="https://gogovernment.org/fellowship/ipa-talent-exchange-program/#candidate">Partnership for Public Service</a></li>
  <li><a href="https://www.justicetech.download/">Justice Tech Download</a></li>
</ul>

<ul class="column">
  <li class="heading"><strong>General Technology &amp; Adjacent</strong></li>
  <li><a href="https://alltechishuman.org/responsible-tech-job-board">Responsible Tech Job Board</a></li>
  <li><a href="https://members.hiretechladies.com/jobs">Tech Ladies Job Board</a></li>
  <li><a href="https://techjobsforgood.com/">Tech Jobs for Good</a></li>
  <li><a href="https://technical.ly/jobs/">Technical.ly</a></li>
  <li><a href="https://jobs.all-hands.us/jobs">All Hands</a></li>
  <li><a href="https://important-jobs.pallet.com/jobs">Pallet Important Jobs</a></li>
  <li><a href="https://edsjobslist.com/">Ed’s Clean Energy Jobs List</a></li>
  <li><a href="https://www.bwork.com/candidate/job_search/quick/results?sort_field=post_date&amp;sort_dir=desc">B Work</a></li>
  <li><a href="https://www.digitalrights.community/job-board">Digital Rights</a></li>
  <li><a href="https://docs.google.com/spreadsheets/d/1dFVoF6f9VU5pjaGhyyvQaBN0n6ae-iLCtlvsO1N2jhA/edit#gid=0">Ethical Tech Jobs Boards Megalist</a></li>
  <li><a href="https://docs.google.com/spreadsheets/d/1VpYIEC7MhA_6VVORk5S9CDuccx_tEvFVefeDTilenXQ/edit#gid=0">Fellowships Megalist</a></li>
</ul>


</div>
</details>

{% assign now = 'now' | date: '%s' %}

{% capture jobs -%}

{% assign posts = site.data.usajobs | where_exp:"job", "job.content" %}

{% include jobs-list.html posts=posts %}

{%- endcapture -%}
{%- assign page = page | setval: 'jobs', jobs -%}