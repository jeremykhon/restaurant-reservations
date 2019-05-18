class Api::V1::RestaurantsController < ApplicationController
  skip_before_action :authenticate_request, only: %i[index show]

  def index
    restaurants = Restaurant.all
    render json: restaurants, include: %i[restaurant_photos cuisine]
  end

  def create
    # TODO
  end

  def show
    restaurant = Restaurant.find_by(id: params[:id])
    if restaurant.nil?
      render json: { message: "restaurant does not exist" }, status: :bad_request
    else
      render json: restaurant, include: %i[restaurant_photos cuisine]
    end
  end
end
