---
layout: default
title: Recommended
permalink: /recommended/
---

<!-- This loops through the paginated posts -->

{%- assign date_format = "%Y.%m.%d" -%}


<section class="recommended content-container">
  <h2 class="section-title">{{ page.title }}
    <!--a href="/feed.xml" class="rss-link" title="RSS Feed"><span class="icon fa fas fa-rss"></span></a-->
  </h2>

  <div class="posts-container">
    {% for post in site.data.reposts %}
      <article class="post-multiple">
        <header class="post-header hoverable">
          <h3 class="post-title"><a href="{{ post.url }}" up-follow>{{ post.title }}</a></h3>
        </header>
        <section class="post-content">
          {% if post.image %}
            <p>
              <img src="https://billhunt.dev{{ post.image }}" class="featured-image">
            </p>
          {% endif %}
          <p>
            <span class="date">
              {{ post.date | date: date_format }}
            </span> –
            {{ post.content | markdownify }}
          </p>
          <p>
            <a href="{{ post.url }}" class="btn">Check It Out</a>
          </p>
        </section>
      </article>
    {% endfor %}
  </div>
</section>
