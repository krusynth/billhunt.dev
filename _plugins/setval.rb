module Jekyll
  module SetVal
    def setval(input, key, value)
      input[key] = value
    end
  end
end

Liquid::Template.register_filter(Jekyll::SetVal)
