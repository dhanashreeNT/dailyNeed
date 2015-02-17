#controller tasks
class Accounts::TypesController < ApplicationController
	before_filter :assign_header_active
	def index
		set_current_account
		@types = @current_account.types
		@type = Type.new
	end

	def create
		set_current_account
		@type = Type.new(params[:type])
		@type.account = @current_account
		@type.user = current_user
    	@type.valid?
    	if @type.errors.blank?
    		@type.save
    		gflash :success => "Type added successfully"
    	else
    		@type.errors.full_messages.each do |msg|
    			gflash :error => msg
    		end
    	end
    	redirect_to account_types_path
	end

	def change_status
		@status = params[:status] || 'approved'
	    @type = Type.find_by_id(params[:id])
	    @type.status = @status
	    if @type.save
	    	gflash :success => "#{@type.name} has been #{@status.capitalize}."
	    else
	    	gflash :error => "Error while changing status."
	    end
	    redirect_to account_types_path
	end

	private
	def set_current_account
		@current_account = current_user.get_account
	end
	def assign_header_active
  		@dashboard_header = ""
  		@type_header = "active"
  		@dailyexpense_header = ""
  	end
end