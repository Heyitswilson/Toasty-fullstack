class AddSaveToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :save, :boolean
  end
end
