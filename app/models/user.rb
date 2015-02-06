class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body
  has_one :account_user_role, :class_name => "AccountUserRoleMapping", :foreign_key => "user_id"
  
  def get_account
  	Account.find_by_id(account_user_role.account_id)
  end
end
