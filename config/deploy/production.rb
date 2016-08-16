set :branch, ENV["REVISION"] || ENV["BRANCH_NAME"] || "stable"
set :stage, :production

set :application, 'k-www.kr'
set :domain, 'k-www.kr'
server "k-www.kr", user: "deployer", roles: %w{web app db}


set :deploy_to, "/home/#{fetch(:user)}/#{fetch(:application)}" 


# set :ssh_options, {
#     user: 'deployer',
#     keys: %w(/home/WonyoungSo/.ssh/id_rsa),
#     forward_agent: false
# }
