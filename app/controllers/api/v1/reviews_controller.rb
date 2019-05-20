class Api::V1::ReviewsController < ApplicationController
  skip_before_action :authenticate_request, only: :index

  def index
    # reviews = Review.where(restaurant_id: params[:restaurant_id]).order(created_at: :desc)
    # render json: reviews, include: [user: { only: :name }]
  end

  def create
    review = Review.new(
      restaurant_id: params[:restaurant_id],
      rating: params[:rating],
      content: params[:content],
      user: current_user
    )
    if review.save!
      
      render json: review, include: :user
    end
  end

  private

  def recalc_average_rating
    restaurant = Restaurant.find(params[:restaurant_id])
    sum = 0
    reviews = restaurant.reviews
    reviews.each { |review| sum += review.rating }
    restaurant.avg_rating = sum.fdiv(reviews)
  end
end
