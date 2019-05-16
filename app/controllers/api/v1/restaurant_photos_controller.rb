class Api::V1::RestaurantPhotosController < ApplicationController
  before_action :set_restaurant

  def index
    photos = @restaurant.restaurant_photos
    render json: photos
  end

  def show
    photo = RestaurantPhoto.find_by(id: params[:id])
    render json: photo, status: :ok unless photo.nil?
    render json: { message: "photo not found" }, status: :bad_request
  end

  def create
    if current_user == @restaurant.user
      restaurant_photo = RestarantPhoto.new(photo: params[:photo], alt_name: @restaurant.name)
      restaurant_photo.restaurant = @restaurant
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
end
