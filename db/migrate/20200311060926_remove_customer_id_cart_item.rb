class RemoveCustomerIdCartItem < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :customer_id
    add_column :cart_items, :customer_id, :integer
  end
end
