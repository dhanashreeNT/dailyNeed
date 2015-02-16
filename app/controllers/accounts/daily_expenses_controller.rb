class Accounts::DailyExpensesController < ApplicationController
	before_filter :assign_header_active
	def index
		set_current_account
		@daily_expenses = @current_account.daily_expenses
		@daily_expense = DailyExpense.new
		@types = @current_account.types
		@users = User.all
	end
	def create
		set_current_account
		@daily_expense = DailyExpense.new(params[:daily_expense])
		@daily_expense.valid?
		if @daily_expense.errors.blank?
			@daily_expense.account = @current_account
			@daily_expense.save
			gflash :success => "Daily Expense added successfully"
		else
			@daily_expense.errors.full_messages.each do |msg|
    			gflash :error => msg
    		end
		end
		redirect_to account_daily_expenses_path
	end
	private
	def set_current_account
		@current_account = current_user.get_account
	end
	def assign_header_active
  		@dashboard_header = ""
  		@type_header = ""
  		@dailyexpense_header = "active"
  	end
end