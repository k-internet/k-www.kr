class Api::ApiController < ApplicationController
  def welcome
    @articles = Article.order('idx ASC')
    @lists = List.order('idx ASC')

    @random_list = List.order("RANDOM()").first
    render :json => { success: true, random_list_permalink: @random_list.permalink,
                                     articles: @articles.map { |a| a.list_conv_to_json }, 
                                     lists:    @lists.map {|l| l.list_conv_to_json } } 
  end
end
