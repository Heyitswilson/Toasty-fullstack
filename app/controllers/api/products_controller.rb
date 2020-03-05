class Api::ProductsController < ApplicationController
    def index

    end

    def show

    end

    def create

    end

    def update

    end

    def destroy

    end

    def product_params
        params.require(:product).permit(:name, :description, :price, :category)
    end

end
