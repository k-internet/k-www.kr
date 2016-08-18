Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :admin do
    resources :users
    resources :articles
    resources :lists


    match 'login' => 'sessions#new', :via => :get
    match 'login' => 'sessions#create', :via => :post
    match 'logout' => 'sessions#destroy', :via => :delete
    
    root :to => 'articles#index'
  end

  namespace :api do 
    get 'articles/:permalink' => 'articles#permalink'
    get 'lists/:permalink' => 'lists#permalink'
    get 'welcome' => 'api#welcome'
  end

  get '/articles/:articlePermalink' => 'welcome#index'
  get '/lists/:listPermalink' => 'welcome#index'
  root :to => 'welcome#index'
end
