class AccountUserRoleMapping < ActiveRecord::Base
  attr_accessible :account_id, :role_id, :user_id
end
