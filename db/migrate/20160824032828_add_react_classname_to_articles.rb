class AddReactClassnameToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :react_classname, :string
    add_column :lists, :react_classname, :string 
  end
end
