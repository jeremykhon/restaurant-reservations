class RestaurantPhotoController < ApplicationController
  before_action :set_restaurant, only: [:index, :create, :destroy]

  def index
    photos = @restaurant.restaurant_photos
    render json: photos
  end

  def create
    if current_user == @restaurant.user
      restaurant_photo = RestarantPhoto.new(photo_params)
      restaurant_photo.alt_name = @restaurant.name
      restaurant_photo.restaurant = @restaurant.user
      restaurant_photo.user = current_user
      if restaurant_photo.save
        render json: restaurant_photo, status: :created
      else
        render json: restaurant_photo.errors, status: :unprocessable_entity
      end
    else
      render json: { message: "unauthorized, this is not your restaurant" }, status: :unauthorized
    end
  end

  def destroy
    if current_user == @restaurant.user
      @photo.destroy
      render json: { message: "photo removed" }, status: :ok
    else
      render json: { message: "unauthorized, this is not your restaurant" }, status: :unauthorized
    end
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find_by(id: params[restaurant_id])
  end

  def photo_params
    params.permit(:photo)
  end
end
