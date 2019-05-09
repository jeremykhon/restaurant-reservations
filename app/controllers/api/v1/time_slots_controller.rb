class Api::V1::TimeSlotsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    restaurants = Restaurant.all
    render json: restaurants
  end

  def create
    # restaurant = Restaurant.new(name: params[:name])
    # restaurant.save
    # render json: channel
  end
end
