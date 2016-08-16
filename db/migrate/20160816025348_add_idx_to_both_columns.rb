class AddIdxToBothColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :idx, :integer, :default => 1
    add_column :lists, :idx, :integer, :default => 1
  end
end
