##
# The MIT License (MIT)
#
# Copyright (c) 2014 Ryan Morrissey
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#
#
# Font Awesome Icons Liquid Tag
# Font Awesome documentation can be found at http://fontawesome.io/
#
# Usage:
#
#   The first argument ("type") should be replaced by the font awesome type,
#     e.g. fab, far, fas, fal, or fad.
#   The second argument ("icon-name") is the full icon name, e.g. fa-shield.
#     this can be a quoted string of multiple classes to apply to the element.
#   The third argument is optional and will be used for alt text on the icon.
#     Multiple words may be used if the string is quoted.
#
#
#  {% type icon-name %}
#  {% type icon-name "Optional Alt Text" %}
#  {% type "icon-name custom-class" %}
#  {% type "icon-name custom-class" "Optional Alt Text" %}
#
# Examples:
#
#  {% fas fa-camera-retro %}
#    Result: <span class="fas fa-camera-retro"></span>
#
#  {% fad fa-shield Shield %}
#    Result: <span class="fad fa-shield" alt="Shield"></span>
#
#  {% far "fa-spinner fa-spin" "My Alt Text" %}
#    Result: <span class="far fa-spinner fa-spin" alt="My Alt Text"></span>
#

module Jekyll
  class FontAwesomeTag < Liquid::Tag

    def render(context)
      if tag_contents = determine_arguments(@markup.strip)
        icon_tag(*tag_contents)
      else
        raise ArgumentError.new <<-eos
Syntax error in tag 'icon' while parsing the following markup:

  #{@markup}

Valid syntax:
  for icons: {% far fa-camera-retro %}
  for icons with size/spin/rotate: {% far "fa-camera-retro fa-lg" %}
  for icons with alt text: {% far "fa-camera-retro fa-lg" "Camera Icon" %}
eos
      end
    end

    private

    def determine_arguments(input)
      matched = input.match(/^("?)(.+?)\1( ("?)(.*?)\4)?$/)
      [matched[2].to_s.strip, matched[5].to_s.strip]
    end

    def icon_tag(icon_class, icon_extra = nil)
      icon = @tag_name + ' ' + icon_class

      if !icon_extra.empty?
        extra = ' title="' + icon_extra + '"'
      end

      "<span class=\"#{icon}\"#{extra}></span>"
    end
  end
end

Liquid::Template.register_tag('fas', Jekyll::FontAwesomeTag)
Liquid::Template.register_tag('far', Jekyll::FontAwesomeTag)
Liquid::Template.register_tag('fal', Jekyll::FontAwesomeTag)
Liquid::Template.register_tag('fab', Jekyll::FontAwesomeTag)
Liquid::Template.register_tag('fad', Jekyll::FontAwesomeTag)