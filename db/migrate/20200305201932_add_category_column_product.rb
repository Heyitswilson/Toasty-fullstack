class AddCategoryColumnProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :category, :string, null: false
    add_index :products, :category
  end
end
