class Api::V1::ReviewsController < ApplicationController
  skip_before_action :authenticate_request, only: :index

  def index
    reviews = Review.where(restaurant_id: params[:restaurant_id].order(time: :created_at))
    render json: reviews, include: [user: { only: :name }]
  end

  def create
    review = Review.new(
      restaurant_id: params[:restaurant_id],
      rating: params[:rating],
      content: params[:content],
      user: current_user
    )
    render json: review, include: :user if review.save!
  end
end
