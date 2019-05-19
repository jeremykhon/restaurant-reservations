class Api::V1::ReviewsController < ApplicationController
  skip_before_action :authenticate_request, only: :index
  before_action :set_restaurant, only: %i[index create]

  def index
    reviews = Review.where(restaurant_id: params[:restaurant_id].order(time: :created_at))
    render json: reviews, include: [user: { only: :name }]
  end

  def create
  end
end
