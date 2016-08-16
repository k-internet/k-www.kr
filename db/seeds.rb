# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if Rails.env.development? || Rails.env.integration?
  users = [
    { email: 'admin@k-www.kr', password: 'gksrnrdlsxjspt2016!' }
  ]
  users.each do |user|
    User.create(user) unless User.exists?(email: user[:email])
  end
end