---
title: Civic Tech Webring
author: Bill Hunt
type: page
date: 2021-01-09T19:18:41-0500
permalink: /civic-tech-webring/
layout: page
excerpt: The Civic Tech Webring is a collection of blogs dedicated to civic tech, public interest tech, government tech policy, and similar topics.
---

The **Civic Tech Webring** is a collection of blogs dedicated to civic tech, public interest tech, government tech policy, and similar topics.

## Joining

### Criteria

You may request your site to be added to the webring if it meets the following criteria:

* The majority of the content must be relevant to the topics listed above.

* The site must be a personal site, not for a business. If you've got your own consulting company or a book, that's ok.

* The primary content must be free and accessible. You may not require a user to login, create an account, or pay to view your posts.

* Your site must have a working RSS feed of your posts that's discoverable (`link` tag in the head or similar).

* You must display the webring banner on your blog, preferably in the header or footer of each page.

### How to Join

To join the webring, please [open a request to add a new site through GitHub issues](https://github.com/krusynth/civic-tech-webring/issues/new/choose). After you're approved, you'll need to add the webring code to your website:

### Adding the Banner

#### Self-Hosted Websites
You can show the webring on your site by pasting the following html snippet wherever you want it to appear:

```
  <script src="https://static.billhunt.dev/civictech/webring.js"></script>
  <script>showWebring(true);</script>
```

If you'd like to disable the default styles, you can use this snippet instead:

```
  <script src="https://static.billhunt.dev/civictech/webring.js"></script>
  <script>showWebring();</script>
```

(You can, of course, also [download the `webring.js` file from GitHub](https://github.com/krusynth/civic-tech-webring/blob/main/webring.js) and host it yourself, but it'll be up to you to keep this file up-to-date as changes are made!)


#### Hosted Blogs

If you're using a service to host your blog which does not allow JavaScript, you can use a static version instead, either on your bio and/or posts. Use the generator below to generate the html for your page:

<form id="webring-generator" class="webring-form">
  <fieldset class="form-group">
    <label for="website">Your Website:</label>
    <input id="website" class="webring-input form-control" name="website" placeholder="https://billhunt.dev/"/>
  </fieldset>
  <fieldset class="form-check form-group">
    <input type="radio" class="webring-input webring-type form-check-input" id="type-full" name="webring-type" value="full" checked/><label for="type-full" class="form-check-label">Full Banner</label><br>
    <input type="radio" class="webring-input webring-type form-check-input" id="type-short" name="webring-type" value="short"/><label for="type-short" class="form-check-label">Short Banner</label>
  </fieldset>
</form>

Get your code:

<pre class="webring-html" id="webring-html"></pre>

How it will appear:

<div class="webring-generated" id="webring-generated"></div>

<script>
  function updateCode(e) {
    console.log('update', e);
    if(e) e.preventDefault();

    let codeType = document.querySelector('input[name="webring-type"]:checked').value;
    let website = encodeURIComponent(document.getElementById('website').value);

    let code = `<a href="https://static.billhunt.dev/civictech/webring.html?dir=prev&from=${website}">&larr;</a> &#124; <a href="https://github.com/krusynth/civic-tech-webring/">Civic Tech Webring</a> &#124;  <a href="https://static.billhunt.dev/civictech/webring.html?from=${website}">&rarr;</a>`;

    if(codeType == 'full') {
      code = `This blog is part of the <a href="https://github.com/krusynth/civic-tech-webring/">Civic Tech Webring</a>. &#124; <a href="https://static.billhunt.dev/civictech/webring.html?dir=prev&from=${website}">Previous Site</a> &#124;
    <a href="https://static.billhunt.dev/civictech/webring.html?from=${website}">Next Site</a>`;
    }

    document.getElementById('webring-html').innerHTML = '';
    document.getElementById('webring-html').appendChild(document.createTextNode('  '+code));

    document.getElementById('webring-generated').innerHTML = code;

    return false;
  }
  updateCode();

  document.getElementById('webring-generator').addEventListener('submit', updateCode, true);

  const inputs = document.querySelectorAll('.webring-input');
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', updateCode, true);
  }
</script>

[View and contribute to the code on GitHub.](https://github.com/krusynth/civic-tech-webring)


## Member Sites
<ul id="webring-list"></ul>

<script>
(function () {
  const url = 'https://raw.githubusercontent.com/krusynth/civic-tech-webring/main/list.json';

  let req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.responseType = 'json';

  req.onload = function() {
    if(req.status != 200) {
      console.error('Webring: Unable to load', url);
      return;
    }

    if(!req.response) {
      console.error('Webring: No response returned', url);
    }

    doShow(req.response);
  }

  function doShow(response) {
    let sites = response.sites;
    let container = document.getElementById('webring-list');
    for(let i = 0; i < sites.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = `<a href="${sites[i].url}">${sites[i].name}</a>`;
      container.appendChild(li);
    }
  }

  req.send();
})();
</script>