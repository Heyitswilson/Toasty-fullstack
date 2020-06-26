class AddSearchToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :search, :string
  end
end
