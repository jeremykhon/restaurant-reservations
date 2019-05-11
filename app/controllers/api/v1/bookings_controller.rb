class Api::V1::BookingsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :create]

  def index
  end

  def create
    puts params
    # restaurant = Restaurant.new(name: params[:name])
    # restaurant.save
    # render json: channel
  end
end
