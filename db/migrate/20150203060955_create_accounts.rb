class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :conatct_num
      t.string :status, :deafult => "approved"

      t.timestamps
    end
  end
end
