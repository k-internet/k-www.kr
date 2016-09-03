class ArticlesController < ApplicationController
  def show
    @article = Article.where(permalink: params[:articlePermalink]).first
    @list = List.where(permalink: params[:listPermalink]).first
  end
end
