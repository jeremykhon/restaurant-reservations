class Api::V1::RestaurantsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :create]

  def index
  end

  def create
    if user_signed_in?
    # restaurant = Restaurant.new(name: params[:name])
    # restaurant.save
    # render json: channel
  end
end
