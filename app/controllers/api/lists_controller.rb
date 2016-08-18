class Api::ListsController < ApplicationController
  def permalink
    @list = List.where(permalink: params[:permalink]).first

    render json: {success: true, list: @list.conv_to_json}
  end
end