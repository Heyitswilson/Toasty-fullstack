class RemoveSaveProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :save
    add_column :products, :keep, :boolean, default: false
  end
end
