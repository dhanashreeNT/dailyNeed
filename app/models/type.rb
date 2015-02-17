class Type < ActiveRecord::Base
  belongs_to :account
  belongs_to :user
  attr_accessible :name, :status, :account_id, :user_id
  validates :name, :presence => true
  def is_approve?
  	status == "approved"
  end
  def is_unapprove?
  	status == "unapproved"
  end
end
