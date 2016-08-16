class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title_ko
      t.string :title_en
      t.text :description_ko
      t.text :description_en
      t.string :author_ko
      t.string :author_en
      t.string :background_color
      t.string :color

      t.timestamps
    end
  end
end
