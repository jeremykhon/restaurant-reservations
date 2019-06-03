require 'rails_helper'

RSpec.describe Api::V1::RestaurantsController, type: :controller do
  describe 'GET index' do
    before(:each) do
      user = User.create!(name: 'hello', password: '123456', email: 'hello@eatigo.com')
      cuisine = Cuisine.create!(name: 'chinese')
      Restaurant.create!(user: user, cuisine: cuisine, name: 'mcdonalds', location: 'tokyo', description: 'very good', capacity: 100)
    end

    it 'has a 200 status code' do
      get :index
      expect(response.status).to eq(200)
    end

    it 'returns json' do
      get :index
      expect(response.content_type).to eq "application/json"
    end

    it 'returns a list of objects' do
      get :index
      expect(assigns(:restaurants).length).to eq(1)
    end

    it 'returns a list of objects of which the first is a restaurant' do
      get :index
      expect(assigns(:restaurants)[0]).to be_a(Restaurant)
    end
  end
end
