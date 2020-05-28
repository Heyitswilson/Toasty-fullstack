class Api::OrderItemsController < ApplicationController
    def index
        @order_items = current_user.order_items

        render :index
    end

    def create
        @order_item = OrderItem.new(order_items_params)
        if @order_item.save
            render :show
        else
            render json: @order_item.errors.full_messages, status: 422
        end
    end

    private
    def order_items_params 
        params.require(:orderItem).permit(:orderer_id, :order_item_id, :quantity)
    end

end
