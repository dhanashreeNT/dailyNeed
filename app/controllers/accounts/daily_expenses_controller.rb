class Accounts::DailyExpensesController < ApplicationController
	def index
		@daily_expenses = @current_account.daily_expenses
		@daily_expense = DailyExpense.new
	end
	private
	def set_current_account
		@current_account = current_user.get_account
	end
end