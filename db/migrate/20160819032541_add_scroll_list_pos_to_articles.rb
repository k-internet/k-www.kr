class AddScrollListPosToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :scroll_pos_list, :json
  end
end
