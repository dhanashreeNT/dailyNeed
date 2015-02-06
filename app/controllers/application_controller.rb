class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :set_account
  def set_account
  	if current_user
  		current_account = current_user.get_account
  	end
  end
end
