class DailyExpense < ActiveRecord::Base
  belongs_to :account
  belongs_to :user
  belongs_to :type
  attr_accessible :ammount, :note, :spent_by, :spent_date, :type_id, :user_id, :account_id
  
end
