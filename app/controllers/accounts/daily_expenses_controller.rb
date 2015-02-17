class Accounts::DailyExpensesController < ApplicationController
	before_filter :assign_header_active, :assign_values
	def index
		
	end
	def create
		flash = false
		@daily_expense = DailyExpense.new(params[:daily_expense])
		@daily_expense.valid?
		if @daily_expense.errors.blank?
			@daily_expense.account = @current_account
			@daily_expense.save
			gflash :success => "Daily Expense added successfully"
			flash = true
		else
			@daily_expense.errors.full_messages.each do |msg|
    			gflash :error => msg
    		end
		end
		respond_to do |format|
		   if flash
		   	  format.html {redirect_to account_daily_expenses_path}
		   else
	      	  format.html {render :index}
	       end
	    end
	end
	private
	def assign_values
		set_current_account
		@daily_expenses = @current_account.daily_expenses
		@daily_expense = DailyExpense.new
		@types = @current_account.get_active_types
		@users = User.all
	end
	def set_current_account
		@current_account = current_user.get_account
	end
	def assign_header_active
  		@dashboard_header = ""
  		@type_header = ""
  		@dailyexpense_header = "active"
  	end
end