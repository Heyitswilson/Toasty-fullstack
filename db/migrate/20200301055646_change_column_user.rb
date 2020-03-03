class ChangeColumnUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name, :string
    add_column :users, :name, :string, null: false
  end
end
