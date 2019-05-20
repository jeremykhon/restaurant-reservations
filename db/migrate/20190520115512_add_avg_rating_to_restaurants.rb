class AddAvgRatingToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :avg_rating, :float, default: 0
  end
end
