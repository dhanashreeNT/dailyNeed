class CreateAccountUserRoleMappings < ActiveRecord::Migration
  def change
    create_table :account_user_role_mappings do |t|
      t.integer :account_id
      t.integer :user_id
      t.integer :role_id

      t.timestamps
    end
  end
end
