class AddCategoriesToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :category, :string
    add_index :products, :category
  end
end
