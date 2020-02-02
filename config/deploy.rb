# invoke :production #unless Rake.application.options.show_tasks

# config valid for current version and patch releases of Capistrano
lock "~> 3.11.2"

set :application, "billhunt.dev"
set :repo_url, "git@github.com:krusynth/billhunt.dev.git"

set :user, "deploy"
set :group, "staff"
set :ssh_options, {:forward_agent => true}
set :use_sudo, false

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp
set :branch, "www"

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/var/www/releases/#{fetch(:application)}/#{fetch(:stage)}"

set :dist, "_site"


# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
append :linked_dirs, "uploads"

# set :shared_directory, ""

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
