class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  def create
    user = User.new(email: params[:email], name: params[:name], password: params[:password])
    user.save!
    render json: { message: "user created!" }
  end
end
