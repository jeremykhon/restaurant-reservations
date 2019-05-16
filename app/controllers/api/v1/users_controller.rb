class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  def create
    user = User.new(email: params[:email], name: params[:name], password: params[:password])
    if user.save!
      render json: { message: "user created!" }
    else
      render json: { message: "something went wrong" }, status: :internal_server_error
    end
  end
end