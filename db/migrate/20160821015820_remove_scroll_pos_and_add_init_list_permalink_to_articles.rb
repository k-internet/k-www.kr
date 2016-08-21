class RemoveScrollPosAndAddInitListPermalinkToArticles < ActiveRecord::Migration[5.0]
  def change
    remove_column :articles, :scroll_pos_list
    add_column :articles, :init_list_permalink, :string
  end
end
