---
title: Cool Govtech Jobs
permalink: /jobs/
datum: jobs
layout: jobs
action: 'Apply'
metalinks:
  - title: Featured-only Cool Gov Tech Jobs RSS feed
    link: /jobs.xml
    icon: far fa-fire
  - title: ALL Cool Gov Tech Jobs RSS Feed
    link: /usajobs.xml
---
You can follow this list with the RSS links above. I also repost featured jobs  to <a href="https://mastodon.publicinterest.town/@jobs">Public Interest Jobs on Mastodon</a>!

<span class="icon far fa-fire"></span> **Featured** jobs are ones that caught my eye as particularly interesting! This is the default filter, you can **unselect** the filter with the button below to see all jobs.

<details>
<summary><strong>First time here? Haven't been here in a while? Here's how this works!</strong></summary>
<p>
  Any descriptions below are added by me, based on my knowledge of the agency and role as posted; this content is not from the original posts and as such there may be inaccuracies. The filters provided may miss posts with unusual naming or grade scales. Not all positions listed as cybersecurity or infosec are actually cybersecurity posts, instead these are using the <a href="https://digitalpolicy.us/policies/hiring/#job-series">2210 loophole</a> and may just be general IT roles. Read the descriptions on the USAJobs posting carefully.
</p>
<p>
  Salary numbers below are <em>usually</em> the base rate, locality pay will increase these numbers (when eligible). For example, the Washington DC area has a +32.49% adjustment for 2023. For an explanation of pay grades, term positions, the senior executive service, and other government-specific information, check out the <a href="https://digitalpolicy.us/policies/hiring/">Digital Policy Guide page on hiring</a>.
</p>
<p>
  Is this your first time applying for a federal government job? Check out the <a href="https://join.tts.gsa.gov/hiring-process/">18F guide to federal hiring</a>, which includes details on how to write your first federal resume! If you're applying. However, for a <a href="https://digitalpolicy.us/policies/hiring/#ses">Senior Executive Service</a> role, you'll need an <a href="https://www.opm.gov/policy-data-oversight/senior-executive-service/reference-materials/guidetosesquals_2010.pdf">entirely different, highly-specialized resume format</a>.
</p>
<p>
  Some agencies will have a colored circle with a number in it, which is that agency's score out of 100 from its employees' ratings in the <a href="https://www.opm.gov/fevs/">Federal Employee Viewpoint Survey</a> (FEVS). Not all agencies participate in the FEVS, but use a similar survey system and those are shown here; many do not have a survey and those do not have a rank. This data is pulled from the <a href="https://bestplacestowork.org/">Best Places to Work</a> data. Also, note that some agencies are huge and each sub-component may be different - the FEVS data has more granular breakdowns that I don't have access to here, so do your own research as well.
</p>
</details>

<details>

<summary>Not finding what you're looking for? Here are some other great jobs boards</summary>
<div>

<ul class="column">
  <li class="heading"><strong>Public Interest Tech</strong></li>
  <li><a href="https://www.usajobs.gov/">USAJobs</a></li>
  <li><a href="https://dscovery.fly.dev/">Digital Services Coalition Jobs</a></li>
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
  <li><a href="https://jobs.all-hands.us/jobs">All Hands</a></li>
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

{% assign posts = site.data.usajobs %}

{% include jobs-list.html posts=posts %}

{%- endcapture -%}
{%- assign page = page | setval: 'jobs', jobs -%}