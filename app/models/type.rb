class Type < ActiveRecord::Base
  belongs_to :account
  belongs_to :user
  attr_accessible :name, :status, :account_id, :user_id
  validates :name, :presence => true
  def is_approve?
  	status == "approve"
  end
  def is_unapprove?
  	status == "unapprove"
  end
end
