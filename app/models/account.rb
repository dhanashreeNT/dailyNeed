class Account < ActiveRecord::Base
  attr_accessible :conatct_num, :name, :status
  has_many :types
  has_many :daily_expenses

  def get_active_types
  	self.types.where(:status => "approved")
  end
end
