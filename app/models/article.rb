class Article < ApplicationRecord

  def list_conv_to_json
    {
      id: self.id,
      author_ko: self.author_ko,
      author_en: self.author_en,
      title_ko: self.title_ko,
      title_en: self.title_en
    }
  end
end
