source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

gem "jekyll", "~> 4.1.1"
gem "webrick"

group :jekyll_plugins do
  # gem "jekyll-feed",  "~> 0.13.0"
  gem "jekyll-sitemap"
  gem "jekyll-paginate-v2"
  gem "jekyll-seo-tag"
  gem "jekyll-webmention_io", git: "https://github.com/aarongustafson/jekyll-webmention_io"
end

group :development do
  gem "capistrano", "~> 3.11", require: false
  gem "capistrano-scm-static", "~> 0.0.3", require: false
  gem "dotenv"
  gem "nokogiri"
end