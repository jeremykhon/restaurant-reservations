class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :location
      t.text :description
      t.integer :capacity
      t.text :allowed_table_sizes, array: true, default: []
      t.references :user, foreign_key: true
      t.references :cuisine, foreign_key: true
      t.integer :booking_window

      t.timestamps
    end
  end
end
