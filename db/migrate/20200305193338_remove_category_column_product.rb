class RemoveCategoryColumnProduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :category
  end
end
