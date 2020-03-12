class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :product_id, null: false
      t.integer :customer_id, null: false
      t.integer :quantity, null: false
      t.timestamps
    end

    add_index :cart_items, :product_id
    add_index :cart_items, :customer_id
  end
end
