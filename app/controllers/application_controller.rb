class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_filter :set_locale

  def set_locale
 #  I18n.locale = params[:locale] || I18n.default_locale
    logger.debug "* Accept-Language: #{request.env['HTTP_ACCEPT_LANGUAGE']}"
    begin
      I18n.locale = params[:locale] || extract_locale_from_accept_language_header
    rescue
      I18n.locale = :en
    end

    logger.debug "* Locale set to '#{I18n.locale}'"
  end


  private
  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first rescue :ko
  end

end
