class Accounts::DashboardsController < ApplicationController
  before_filter :assign_header_active
  def index
    
  end
  private
  def assign_header_active
  	@dashboard_header = "active"
  	@type_header = ""
  	@dailyexpense_header = ""
  end
end
