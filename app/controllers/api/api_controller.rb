class Api::ApiController < ApplicationController
  def welcome
    @articles = Article.order('idx ASC')
    @lists = List.order('idx ASC')

    render :json => { success: true, articles: @articles.map { |a| a.list_conv_to_json }, 
                                     lists:    @lists.map {|l| l.list_conv_to_json } } 
  end
end
