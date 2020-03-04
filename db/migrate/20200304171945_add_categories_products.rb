class AddCategoriesProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :categories, :string, null: false, unique: true
    add_index :products, :categories
  end

  def up 
    change_column :products, :categories, :string, after: :price
  end
end
