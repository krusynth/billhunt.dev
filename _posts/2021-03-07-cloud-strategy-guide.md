---
title: "Cloud Strategy Guide"
author: Bill Hunt
type: post
date: 2021-03-07-T17:54:47-0500
permalink: /blog/2021/03/07/cloud-strategy-guide/
layout: post
excerpt: Strategies for successful cloud management and implementation.
image: /uploads/2021/02/cloud-strategy-guide.png
---

<div class="wrapper-outer">
<div class="wrapper-inner">
   <div class="wrapper-subtitle">
    <span class="fas fa-bars outlined"></span>
    <span class="subtitle-first outlined">Cloud</span>
    <span class="fas fa-bars outlined"></span>
  </div>
  <span class="subtitle-wrapper-text top-text">Strategy</span>
  <span class="subtitle-wrapper-text bottom-text">Guide</span>
</div>
</div>

In **[part one](/blog/2021/02/28/cloudbusting/)**, I discussed many of the myths around cloud use in government. In this article, I will describe critical strategies to address these myths that every organization should embrace before, during, and after moving to the cloud. These strategies are generally intended for civilian Federal agencies of the United States, but the recommendations below apply to any public sector organization - and even some private organizations as well.

*Both guides are available to download as [a single PDF {% fas "fa-cloud-download-alt fa-lg" %} ](/uploads/2021/03/CloudGuide.pdf)*

1. [Chapter 1 - Migrate Pragmatically](#chapter-1---migrate-pragmatically)
2. [Chapter 2 - Plan to Your Budget & Staff](#chapter-2---plan-to-your-budget--staff)
3. [Chapter 3 - Embrace New Security Models](#chapter-3---embrace-new-security-models)
4. [Chapter 4 - Understand What You’re Buying](#chapter-4---understand-what-youre-buying)
5. [Chapter 5 - Build a Family Farm](#chapter-5---build-a-family-farm)
6. [Epilogue - Getting More Help](#epilogue---getting-more-help)
{:.table-of-contents}

## Chapter 1 - Migrate Pragmatically

The first thing to accept is that not all projects are appropriate for the cloud, and not all organizations have the skills necessary to fully take advantage of the cloud. With that as a starting point, an organization needs to come up with a way to rationalize its application portfolio, to determine what should stay on-premises and what should be modernized.  As a general rule, "lift-and-shift" - moving an application without rewriting it for the cloud environment - is _almost never cost-effective_ for Infrastructure as a Service (IaaS) offerings unless it’s already a _very_ modern system in the first place. On the other hand, basic websites with mostly static content are ideal for moving into Software as a Service (SaaS) or Platform as a Service (PaaS) offerings.

The CIO Council’s [Application Rationalization Playbook](https://www.cio.gov/assets/files/Application-Rationalization-Playbook.pdf) (disclaimer: another document I worked on) is a useful starting point for this evaluation. Specifically, an agency should work up a thorough analysis of alternatives between various SaaS, PaaS, and IaaS offerings against the existing on-prem setup, or a hybrid environment. A major consideration here will be the Total Cost of Ownership (TCO), which should take into account not just service costs, but also staffing, support, and training costs. However, the lowest priced option may not always be the best choice (as I’ll be covering below).

[Cloud.gov](https://cloud.gov/), is an offering from the General Services Administration (GSA) that bundles several Amazon Web Services (AWS) offerings in a government-friendly "procurement wrapper" can make migration even easier for agencies. It’s an excellent platform for small agencies, or for large agencies that just want to prototype a new concept quickly.

When you do start moving applications, it's important to start tagging your assets - accounts, virtual machines, workflows, etc. - as early as possible to make accounting easier. Always include the project name and the customer organization at a minimum. Some providers also allow you to easily isolate a project or office's services into a resource group, and this can also simplify this process. This is very important to allow easy payback or showback of funds, but for these models remember to include in these costs the TCO aspects not captured - e.g. staff time and contractor resources.

I strongly recommend agencies take a very _cynical_ stance on so-called low-code/no-code platforms, customer-relationship management tools (CRMs), and workflow management solutions. Many of you may remember the promises of "Business Intelligence" solutions in decades past, where agencies were fleeced for billions of dollars in configuration costs - these solutions are simply using a new buzzword for the same idea. These all promise to reduce costs but are often vastly more expensive than just building a tool from scratch - and the agency becomes _completely_ locked-in to a single vendor until they replace the application entirely. The brilliant [Sean Boots](https://twitter.com/sboots) of the Canadian Digital Service has presented a ["1-day rule" to help identify these boondoggles](https://sboots.ca/2020/09/16/fake-cots-and-the-one-day-rule/).

&nbsp; | Checklist
--- | ---
{% far fa-balance-scale-right %} | Rationalize the application portfolio
<span class="fa-stack">{% far "fa-truck fa-stack-1x" %}{% far "fa-ban fa-stack-2x" %}</span> | Don't lift-and-shift
<span class="fa-stack">{% fas "fa-university fa-stack-1x" %}{% fal "fa-cloud fa-stack-2x" %}</span> | Use cloud.gov
{% far fa-tag %} | Properly tag cloud assets
<span class="fa-stack">{% fas "fa-snake fa-stack-1x" %}{% far "fa-ban fa-stack-2x" %}</span> | Avoid low-code/no-code/crm snake oil
{:.checklist}

## Chapter 2 - Plan to Your Budget & Staff

The easiest way to avoid risks and unexpected costs is to simplify as much as possible. Civilian agencies should not be investing in bleeding-edge technology solutions - they’re too risky and expensive to maintain. Instead, pick the simplest possible solution that can be supported by your staff. The average agency should be aiming to stay well behind the ["hype curve" into the "plateau of productivity."](https://en.wikipedia.org/wiki/Hype_cycle) 
Since most of the complexity is hidden from the customer, SaaS and commercial-off-the-shelf (COTS) tools are less risky than PaaS and IaaS options overall (provided you follow the 1-day rule above). This goes beyond just cloud, and applies to most anything you’re _building_. Most agencies, for instance, also should absolutely not be attempting to build a fancy React/Redux/GraphQL single-page application when a plain Wordpress or Drupal website with a few plugins will fulfill the customer’s needs. Building native mobile applications should be _completely avoided_ by most organizations as these can cost millions of dollars a year just for upkeep - instead they should build mobile-friendly, responsive websites. Any custom application or tool may not be a sustainable solution given the high complexity and cost of engineers. This also means that agencies should be simplifying their _requirements_ to the minimum necessary when comparing alternatives, not just the software itself. Avoiding "one-off" projects and special requests will save massive amounts of time and money.

Instead, agencies must be actively investing in _their staff_. Agencies should allocate two to three times the standard training budget for IT and technology-adjacent staff, including project managers, program managers, and acquisition professionals. Some vendors provide a limited amount complementary training, but inevitably agencies need more than these free offerings. This training should include non-IT topics as well, including diversity awareness training, accessibility, plain language writing, project management, agile development techniques, and budgeting and procurement. [GSA offers a variety of programs](https://www.gsa.gov/about-us/events-and-training/gsa-training-programs/training-opportunities-for-federal-employees) covering many of these areas.

This must also include hands-on training - sitting through a webinar is no replacement for actual practical engineering experience. These staff need to be given the time and flexibility to practice these skills to develop them - building small test projects and trying out tools. The best teams are constantly changing and learning, so setting aside up to 10% or more of the staff’s time just for practice is not unreasonable - some [private sector companies set aside 20%](https://en.wikipedia.org/wiki/20%25_Project). All of these investments will pay off richly for agencies. Also, make sure your staff is cross-trained and able to fill gaps as they occur.

As your staff begins to understand the new cloud paradigms, it will be important to modify your existing processes to handle the agility the cloud brings. Instead of slow, end-to-end, waterfall process "monorails", set operational parameters as "guiderails." Your acquisition process should be modified so that cloud can be purchased like a utility. You should not need to have a Change Control Board meeting anytime someone wants to create, resize, or destroy a virtual server. Plan a cost range that the entire project will fit within and review as needs change, along with monthly or quarterly portfolio reviews to stay on top of the budget. Instead of codified "gold disk" server images maintained by your team, consider template security rules.

&nbsp; | Checklist
--- | ---
{% far fa-bicycle %} | Simplify the requirements and architecture
<span class="fa-stack">{% far "fa-mobile-alt fa-stack-1x" %}{% far "fa-ban fa-stack-2x" %}</span> | No mobile apps, avoid single-page webapps
{% far fa-user-graduate %} | Train and cross-train your staff
{% far fa-chess-clock %} | Allocate time for personal development
{% fas fa-subway %} | Update processes to set guardrails instead of monorails
{:.checklist}

## Chapter 3 - Embrace New Security Models

Agencies must be able to manage the security of everything they run. Going back to the previous strategy, an agency should not deploy anything it cannot manage, and that goes for security as well. This is equally true in on-premises environments, but new operating models require new security models. Both your operations and security teams will need to be familiar with just about every setting that can be changed in your cloud environment - and how to lock them down to prevent exploitation.

Organizations should no longer assume that a solution is secure just because they did an up-front initial review. The Federal government uses a security review process for services and applications known as the Authorization (or Authority) To Operate (ATO), but the implementation varies from agency to agency. Traditionally this is a series of [standard security controls](https://nvd.nist.gov/800-53) that are reviewed, checklist-style, by an agency once every three years. However, agencies that have excelled at cloud security have moved to Continuous Authorization, using monitoring tools to actively verify that the security controls are being met and maintained, twenty-four hours a day and seven days a week.

However, these monitoring checks still must evolve with the products being monitored to make sure new vulnerabilities have not appeared outside the scope of existing checks. As per usual with cybersecurity, vigilance is key. Since attackers are constantly evolving their methods, tools that _automate security responses_ as well should be used whenever practical - especially built-in, native from the large vendors that are constantly evolving to meet these threats.

To help combat this second issue, the Federal government has been moving away from so-called "castle-and-moat" perimeter-based security methods which only monitor network traffic. Instead, an approach known as Zero Trust has appeared, taking a data-first methodology of protecting systems instead of _just_ the perimeter, verifying user identities in real-time, and allowing staff to only have access to the minimum amount of information necessary to fulfill the task at hand. In this way, when the perimeter is _inevitably_ breached, the data assets contained within are still secure.

It also should go without saying that teams should be using multi-factor authentication on all privileged accounts. Whether developers or administrators, using more than just a username and password will dramatically reduce the risk of exploitation. The Federal government has "[PIV cards](https://www.fedidcard.gov/)" that are generally used on most devices, but if the vendor does not support them, implementing a token system via any of the commercially-available platforms is fine: Google Authenticator, 1Password, Microsoft Authenticator, and YubiKey are all worth looking at. However, organizations should completely avoid text-message codes sent to phones, as these are easily intercepted.

For public customers that will need to login or prove their identies, [all U.S. government agencies should be using Login.gov](/blog/2021/02/18/login-gov-for-everyone/).

&nbsp; | Checklist
--- | ---
{% far fa-toggle-on %} | Research all product configuration settings
{% far fa-binoculars %} | Implement continuous monitoring, not just compliance
{% fas fa-cogs %} | Use security automation tools
{% far fa-fingerprint %} | Leverage zero-trust practices to protect your data
{% far fa-id-badge %} | Use MFA & Login.gov
{:.checklist}

## Chapter 4 - Understand What You’re Buying

Cloud isn’t going to make your teeth whiter or your breath fresher or fix all of your problems, regardless of what the salespeople tell you. You need to know _exactly_ what you’re buying. Before making an investment, make sure you fully understand what capabilities you’re purchasing and what parts you - and the vendor - will be responsible for.

If your evaluation team does not have technical expertise, bring engineers into the conversation early, to sort the truth from the sales pitch. As discussed in the previous article, you may not be getting autoscaling or load balancing or other features you’ve assumed just happen "automatically" - and if available these features definitely will not be free. You may have to build more "glue" between services than you assume, and someone will have to maintain this connective tissue.

Also keep in mind that the government cloud regions (or "govcloud" by some vendors’ naming) provide different versions of these tools than the commercial ones. As a result, not all features or solutions will be available - so again, plan ahead. Though, in most cases, civilian agencies not dealing with highly-sensitive data should consider using the commercial versions whenever possible - the security differences are not so great as to be insurmountable, but the functionality limitations are huge.

Before implementing a service, do careful research on the service limits - maximum traffic or number of virtual machines or emails that can be sent, etc.. Do _not_ just trust what you are told by a vendor’s engineers or customer representatives - most of the time, they also do not know about these limits until you run aground on them. You should estimate your expected usage - number of site visits and/or users and/or emails, etc., and actually spend the time to search through user forums to make sure no one has hit a limit related to what you’re doing.

Customer Experience (CX) is another area where the private sector has been building people-friendly interfaces into their SaaS solutions, and agencies can skip a lot of the hard work and directly benefit from the results. Metrics and feedback-loops are often built-in as well. Maximizing these built-in elements can radically improve an agency’s public satisfaction scores at little or no additional cost.

&nbsp; | Checklist
--- | ---
<span class="nowrap far">{% fas fa-chess-queen-alt %}{% far fa-chess-pawn-alt %}</span> | Validate assumptions; know your responsibilities
{% far fa-door-open %} | Consider commercial cloud instead of govcloud
{% far fa-unicorn %} | Research service limits in advance
{% far fa-comment-alt-smile %} | Leverage built-in CX tools
{:.checklist}

## Chapter 5 - Build a Family Farm

Given that agency IT budgets continue to be cut, and [staffing has not increased in 40 years](https://www.whitehouse.gov/wp-content/uploads/2020/02/hist16z1_fy21.xlsx), agencies are largely unprepared to completely rewrite and replace all of their legacy systems.  Moreover, "IT Modernization" as a concept is an unending pursuit, as in [Zeno’s paradox of Achilles chasing the Tortoise,](https://en.wikipedia.org/wiki/Zeno%2527s_paradoxes%23Achilles_and_the_tortoise) software written today is legacy tomorrow. Agencies will need to use [all available funding sources](https://www.congress.gov/bill/115th-congress/house-bill/2227/text) to overcome their deep technical debt, prioritizing those that present the _greatest risk_: those that are unmaintained, frequently used by customers, and lacking in resilience and redundancy. Under this scrutiny, agencies may find that their public websites are a bigger risk than older backend systems.

Also, rather than replacing entire large monolithic systems, they should [pull off pieces and replace them independently](https://www.appdynamics.com/blog/product/strangler-pattern-migrate-to-microservices-from-a-monolithic-app/) as resources are available.  This can be done by isolating functions and building [microservices](https://en.wikipedia.org/wiki/Microservices), but that approach can often lead to expensive, unnecessary complexity. Agencies should not be afraid to build a newer parallel monolith adjacent to the existing one - again, keep in mind that it’s not the size that’s the concern, but the complexity and sustainability.

That all being said, the government does have major shortcomings in redundancy today, and too many systems have a single point of failure. At a minimum, agencies should be using cloud for data backup of critical systems whenever possible. I also strongly recommend agencies consider creating load balancing and caching layers in the cloud in front of on-premise public-facing systems to deal with unexpected loads.

One final concern is automation. Many organizations begin their cloud journey with unrealistic goals for maturity. The practice of Infrastructure as Code is incredibly popular at the moment, where we talk about treating virtual servers as "cattle, not pets." An unprepared agency may immediately think that they need to be using all of the most cutting edge [tools](https://www.docker.com/) and [technologies](https://kubernetes.io/) at first, but this would be a critical mistake. Instead, following the principles relating to complexity in the sections above, agencies should aim to create a "family farm" - [only automating that which they can realistically manage](https://www.youtube.com/watch?v=_ICzo5r-7vY). For instance, there is absolutely nothing wrong with only using a few virtual machines and load balancers instead of a fully configuration-only architecture. The great thing about cloud is you can evolve as your team grows, but it’s incredibly difficult to reduce complexity you’ve invested in if your team shrinks.

&nbsp; | Checklist
--- | ---
{% far fa-exclamation-triangle %} | Assess technical debt by risk
{% far fa-crop-alt %} | Replace monoliths a piece at a time
<span class="fa-stack">{% fas "fa-robot fa-stack-1x" %}{% far "fa-ban fa-stack-2x" %}</span> | Don't over-automate
{% far fa-copy %} | Use cloud backups and load balancing as soon as possible
{% fas fa-tractor %} | Build a small "family farm" to start
{:.checklist}

## Epilogue - Getting More Help

These strategies are a starting point towards a successful cloud rollout. If you run into trouble, want to talk shop with your peers, or would like to share your own strategies and experiences, there are several communities to engage with:

* The Federal CIO Council [Cloud and Infrastructure Community of Practice](https://digital.gov/communities/cloud-infrastructure/) is the main Federal group for discussing these topics. However, they are currently in the process of changing their charter to allow any U.S. government staff to participate: Federal, state, and local. Membership is free.

* The ATARC [Cloud and Infrastructure Working Group](https://atarc.org/working-groups/cloud-working-group/) is free and open to any government staff, though private sector companies must pay to be members.

* [Cloud & Coffee](https://atarc.org/event/cloud-coffee/) (presented by ATARC & MorphWorks) is a biweekly podcast hosted by myself and [Chris Oglesby](https://www.linkedin.com/in/chris-oglesby-94234112/). Each episode, we chat with a guest about their personal experience with technology modernization, and there's a live Q&A open during the chat. Any ATARC member can participate; old episodes are [publicly available on Spotify](https://open.spotify.com/show/6AU2VxO4j7dtDls4ouxdIq?si=YwhQcD7XRGWvxSQJKRmmbw).




{% fad "fa-broom secret-button" "ITS A SECRET TO EVERYBODY" %}

<div class="secret-wrapper" style="display:none"></div>

<script>
$(document).ready(function() {

/* Strategy Guide secret */
$('.fa-broom.secret-button').click(function() {
  $('.secret-wrapper').show();
});

$('.secret-wrapper').click(function() {
  $('.secret-wrapper').hide();
});

});
</script>