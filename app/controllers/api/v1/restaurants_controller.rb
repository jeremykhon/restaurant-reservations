class Api::V1::RestaurantsController < ApplicationController
  skip_before_action :authenticate_request, only: [:index, :show]

  def index
    restaurants = Restaurant.all
    render json: restaurants
  end

  def create
    # restaurant = Restaurant.new(name: params[:name])
    # restaurant.save
    # render json: channel
  end

  def show
    restaurant = Restaurant.find_by(id: params[:id])
    if restaurant.nil?
      render json: { message: "restaurant does not exist" }
    else
      render json: restaurant
    end
  end
end
