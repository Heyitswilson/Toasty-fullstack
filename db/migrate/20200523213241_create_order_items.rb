class CreateOrderItems < ActiveRecord::Migration[5.2]
  def change
    create_table :order_items do |t|
      t.integer :order_item_id, null: false
      t.integer :orderer_id, null: false
      t.timestamps
    end

    add_index :order_items, :order_item_id
    add_index :order_items, :orderer_id
  end
end
