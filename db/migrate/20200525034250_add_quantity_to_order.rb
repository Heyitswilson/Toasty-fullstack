class AddQuantityToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :order_items, :quantity, :integer, null: false
  end
end
