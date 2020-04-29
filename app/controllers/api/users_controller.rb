class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    def show
        @user = User.find(params[:id])
        if @user = current_user
            return "api/users/show"
        else
            render json: ["No access"], status: 422
        end
    end

    def index 
        if User.all 
            @users = User.all
            render :index
        else 
            render json: @users.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :name, :password)
    end
end
