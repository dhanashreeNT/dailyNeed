class CreateDailyExpenses < ActiveRecord::Migration
  def change
    create_table :daily_expenses do |t|
      t.references :account
      t.references :user
      t.references :type
      t.integer :spent_by
      t.float :ammount
      t.string :note
      t.string :spent_date

      t.timestamps
    end
    add_index :daily_expenses, :account_id
    add_index :daily_expenses, :user_id
    add_index :daily_expenses, :type_id
  end
end
