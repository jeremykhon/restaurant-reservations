Rails.application.routes.draw do
  devise_for :users

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :restaurants, only: [ :index, :show, :create ] do
        resources :default_time_slots, only: [ :index, :create ]
        resources :reviews, only: [ :index, :create ]
        resources :time_slots, only: [ :index ]
      end
    end
  end

  get '/restaurants/:id', to: 'restaurants#index'

  root to: 'restaurants#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
