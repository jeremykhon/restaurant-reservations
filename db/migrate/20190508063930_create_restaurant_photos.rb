class CreateRestaurantPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_photos do |t|
      t.string :alt_name
      t.references :restaurant, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
