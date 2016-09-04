class Api::ArticlesController < ApplicationController
  def permalink
    @article = Article.where(permalink: params[:permalink]).first
    
    result = {success: true, article: @article.conv_to_json, locale: I18n.locale }
    

    if params[:listPermalink].present?
      @list = List.where(permalink: params[:listPermalink]).first
      result[:list] = @list.conv_to_json
    end


    render json: result
  end
end