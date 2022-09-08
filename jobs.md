---
layout: default
title: Cool Goverment IT Jobs
permalink: /jobs/
---

<!-- This loops through the paginated posts -->

{%- assign date_format = "%Y.%m.%d" -%}


<section class="jobs content-container">
  <h2 class="section-title">{{ page.title }}
    <!--a href="/feed.xml" class="rss-link" title="RSS Feed"><span class="icon fa fas fa-rss"></span></a-->
  </h2>

  <div class="posts-container">
    {% for post in site.data.jobs %}
      {%- assign now = 'now' | date: '%s' -%}
      {%- assign closes = post.closes | date: '%s' -%}
      {%- if closes == nil or closes == '' or closes > now  -%}
      <article class="post-multiple">
        <header class="post-header hoverable">
          <h3 class="post-title"><a href="{{ post.url }}" up-follow>{{ post.title }}</a></h3>
        </header>
        <section class="post-content">
          <p>
            {{ post.content | markdownify | remove: '<p>' | remove: '</p>' }}
            {% if post.closes %}
               <span class="date">
                Closes {{ post.closes | date: date_format }}
              </span>
            {% endif %}
          </p>
          <a href="{{ post.url }}" class="btn">Apply</a>
        </section>
      </article>
      {% endif %}
    {% endfor %}
  </div>
</section>
