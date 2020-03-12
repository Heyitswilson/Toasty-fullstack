class RemoveQuantityCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :quantity
  end
end
