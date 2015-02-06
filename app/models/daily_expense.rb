class DailyExpense < ActiveRecord::Base
  
  belongs_to :account
  belongs_to :user
  belongs_to :type
  attr_accessible :ammount, :note, :spent_by, :spent_date

  # To specify the columns to use call it like this:
  # 
  has_event_calendar :start_at_field  => 'spent_date', :end_at_field => 'spent_date'
  # 
end
