class Api::ArticlesController < ApplicationController
  def permalink
    @article = Article.where(permalink: params[:permalink]).first

    render json: {success: true, article: @article.conv_to_json, locale: I18n.locale }
  end
end