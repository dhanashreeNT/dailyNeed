class DashboardsController < ApplicationController
  before_filtter :assign_header_active
  def index
    
  end
  private
  def assign_header_active
  	logger.info "===============================Hello======================"
  	@dashboard_header = "active"
  	@task_header = ""
  	@dailyexpense_header = ""
  end
end
