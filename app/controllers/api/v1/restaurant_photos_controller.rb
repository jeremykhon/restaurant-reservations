class RestaurantPhotoController < ApplicationController
  before_action :set_restaurant, only: [:show, :index, :create, :destroy]

  def index
    photos = @restaurant.restaurant_photos
    render json: photos
  end

  def create
    if current_user.admin?
      @book = Book.new(book_params)
           
      if @book.save
        render json: @book, status: :created, location: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end
  end

  def destroy
    @photo.destroy if current_user == @restaurant.user
    render json: { message: "photo removed" }, status: :ok
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find_by(id: params[restaurant_id])
  end

  def photo_params
    params.permit(:photo)
  end
end
