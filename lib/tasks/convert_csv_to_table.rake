require 'open-uri'
require 'csv'

namespace :csv_to_table do
  desc 'update news articles'
  task :update, [:url] => :environment do |t, args|

    csv_rows = CSV.read(args[:url])
    table_str = "<table>\n"

    csv_rows.each_with_index do |row, i|

      if i > 0
        table_str = table_str += "<tr>\n"
        table_str = table_str += "  <td>#{row[0]}</td>\n"
        table_str = table_str += "  <td>#{row[1]}</td>\n"
        table_str = table_str += "  <td>#{row[2]}</td>\n"
        table_str = table_str += "</tr>\n"
      else
        table_str = table_str += "<thead><tr>\n"
        table_str = table_str += "  <td>#{row[0]}</td>\n"
        table_str = table_str += "  <td>#{row[1]}</td>\n"
        table_str = table_str += "  <td>#{row[2]}</td>\n"
        table_str = table_str += "</tr></thead><tbody>\n"
      end
    end
    
    table_str = table_str += "</tbody></table>\n"
    puts table_str
  end
end
