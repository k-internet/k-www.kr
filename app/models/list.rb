class List < ApplicationRecord
  def list_conv_to_json
    {
      id: self.id,
      title_ko: self.title_ko,
      title_en: self.title_en,
      permalink: self.permalink
    }
  end

  def conv_to_json
    {
      id: self.id,
      title_ko: self.title_ko,
      title_en: self.title_en,
      permalink: self.permalink,
      description_ko: self.description_ko,
      description_en: self.description_en
    }
  end
end
