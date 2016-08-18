# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160817021044) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title_ko"
    t.string   "title_en"
    t.text     "description_ko"
    t.text     "description_en"
    t.string   "author_ko"
    t.string   "author_en"
    t.string   "background_color"
    t.string   "color"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "idx",              default: 1
    t.string   "permalink"
  end

  create_table "lists", force: :cascade do |t|
    t.string   "title_en"
    t.string   "title_ko"
    t.text     "description_ko"
    t.text     "description_en"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "idx",            default: 1
    t.string   "permalink"
  end

  create_table "pictures", force: :cascade do |t|
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.string   "resource_type"
    t.integer  "resource_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
