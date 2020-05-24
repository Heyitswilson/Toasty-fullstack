Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults:{format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:destroy, :create]
    resources :products, except: [:new]
    resources :cart_items, only: [:index, :show, :create, :destroy]
    resources :order_items, only: [:index, :create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
