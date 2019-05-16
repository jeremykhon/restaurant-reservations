class Api::V1::RestaurantPhotosController < ApplicationController
  skip_before_action :authenticate_request, only: [:index, :show]
  before_action :set_restaurant, only: [:index, :create]

  def index
    if params[:first]
      photos = @restaurant.restaurant_photos.first(params[:first].to_i)
    else
      photos = @restaurant.restaurant_photos
    end
    render json: photos
  end

  # def show
  #   photo = RestaurantPhoto.find_by(id: params[:id])
  #   if photo.nil?
  #     render json: { message: "photo not found" }, status: :bad_request
  #   else
  #     render json: photo
  #   end
  # end

  def create
    if current_user.admin?
      restaurant_photo = RestaurantPhoto.new(photo: params[:photo], alt_name: @restaurant.name)
      restaurant_photo.restaurant = @restaurant
      restaurant_photo.user = current_user
      if restaurant_photo.save
        render json: restaurant_photo, status: :created
      else
        render json: restaurant_photo.errors, status: :unprocessable_entity
      end
    else
      render json: { message: "unauthorized, only admin can add new photos" }, status: :unauthorized
    end
  end

  def destroy
    if current_user.admin?
      @photo.destroy
      render json: { message: "photo removed" }
    else
      render json: { message: "unauthorized, only admin can remove photos" }, status: :unauthorized
    end
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find_by(id: params[:restaurant_id])
    puts "$$$$$$$$$$$$$$$$$$$$$$$$$$"
    puts request.body
    puts params[:photo]
    puts params
    puts "$$$$$$$$$$$$$$$$$$$$$$$$$$"
  end
end
