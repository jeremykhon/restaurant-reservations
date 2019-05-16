class AddPhotoToRestaurantPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurant_photos, :photo, :string
  end
end
