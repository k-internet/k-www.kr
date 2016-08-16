class List < ApplicationRecord
  def list_conv_to_json
    {
      id: self.id,
      title_ko: self.title_ko,
      title_en: self.title_en
    }
  end
end
