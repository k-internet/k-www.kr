class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.string :title_en
      t.string :title_ko
      t.text :description_ko
      t.text :description_en

      t.timestamps
    end
  end
end
