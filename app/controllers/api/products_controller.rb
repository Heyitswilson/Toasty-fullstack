class Api::ProductsController < ApplicationController
    def index
        # @products = Product.all
        # render :index

        if Product.all
            @products = Product.all
            render :index
        else
           render json: @products.errors.full_messages, status: 422 
        end
    end

    def show
        @product = Product.find(params[:id])
    end

    def create
        @product = Product.new(product_params)

        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def update
        @product = Product.find(params[:id])
        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product = Product.find(params[:id])

        if @product.destroy
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def search
        respond_to do |format|
            format.html { render :search }
            format.json { render :search }
        end
    end

    private

    def product_params
        params.require(:product).permit(:name, :description, :price, :artist_id, :photo, :photoUrl)
        # params.require(:product).permit(:name, :description, :price, :artist_id)
    end

end
