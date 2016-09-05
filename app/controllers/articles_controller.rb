class ArticlesController < ApplicationController
  def show
    @article = Article.where(permalink: params[:articlePermalink]).first
    @list = List.where(permalink: params[:listPermalink]).first

    if @list.present?
      render layout: 'articles_lists'
    else
      render layout: 'articles'
    end
  end
end
