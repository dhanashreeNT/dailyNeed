class CreateTypes < ActiveRecord::Migration
  def change
    create_table :types do |t|
      t.references :account
      t.references :user
      t.string :name
      t.string :status, :default => "approved"

      t.timestamps
    end
    add_index :types, :account_id
    add_index :types, :user_id
  end
end
