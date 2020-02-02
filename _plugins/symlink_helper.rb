Jekyll::Hooks.register :site, :post_write do |site|
  if site.config['symlinks']
    site.config['symlinks'].each do |symlink|
      name = symlink.gsub(/^_/, '')
      path = File.expand_path("..", __dir__)
      system("ln -s #{path}/#{symlink} _site/#{name}")
    end
  end
end
