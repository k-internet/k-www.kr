class ArticlesController < ApplicationController
  def show
    @article = Article.where(permalink: params[:articlePermalink]).first
  end
end
