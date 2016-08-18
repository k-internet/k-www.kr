class AddPermalinkToArticlesLists < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :permalink, :string
    add_column :lists, :permalink, :string
  end
end
