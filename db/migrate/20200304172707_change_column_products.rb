class ChangeColumnProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :categories
    add_column :products, :category, :string, null: false, unique: true, after: :price
    add_index :products, :category
  end
end
