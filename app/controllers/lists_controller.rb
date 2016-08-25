class ListsController < ApplicationController
  def show
    @list = List.where(permalink: params[:listPermalink]).first
  end
end
