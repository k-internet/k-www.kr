class Article < ApplicationRecord
  attr_accessor :scroll_pos_list_str

  def scroll_pos_list_str 
    self.scroll_pos_list.present? ? JSON.pretty_generate(self.scroll_pos_list) : ""
  end

  def scroll_pos_list_str=(str)
    begin
      self.scroll_pos_list = JSON.parse(str)
    rescue
      self.scroll_pos_list = []
    end
  end


  def list_conv_to_json
    {
      id: self.id,
      author_ko: self.author_ko,
      author_en: self.author_en,
      title_ko: self.title_ko,
      title_en: self.title_en,
      permalink: self.permalink
    }
  end

  def conv_to_json
    {
      id: self.id,
      author_ko: self.author_ko,
      author_en: self.author_en,
      title_ko: self.title_ko,
      title_en: self.title_en,
      permalink: self.permalink,
      background_color: self.background_color,
      color: self.color,
      description_ko: self.description_ko,
      description_en: self.description_en,
      scroll_pos_list: self.scroll_pos_list
    }
  end
end
