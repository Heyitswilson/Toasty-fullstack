# Toasty
[Live Site](https://toasty-sf.herokuapp.com/#/)

Toasty is an e-commerce application for arts and crafts and prioritizes a minimalist design to provide a clean, aesthetic user interface.

![Toasty Homepage](https://toasty-dev.s3-us-west-1.amazonaws.com/toasty.png)

## Built With 
* Javascript
* React
* Redux
* Ruby on Rails

## Features 
* User accounts
* Product listings
* Shopping carts
* Search function
* AWS image hosting
* Mediaqueries

## Code

#### Search Function
The Toasty search function utilizes ActiveRecord queries and the Rails MVC framework to perform server-side product searches and preserve client-side efficiency. It involves defining a search route in the Rails Router so that the search request can be directed to the correct controller. The results of the API call are immediately displayed in a dropdown. Toasty's search function is debounced and will not run on every user input in order to preserve server-side efficiency. 

![search](https://toasty-dev.s3-us-west-1.amazonaws.com/icons/search4.gif)

```javascript
    const givenInput = e => {
        delayedQuery(e.currentTarget.value)
    }

    const delayedQuery = useCallback(debounce(q => searchProducts(q), 500), []);
    
    const searchProducts = (input) => {
    if (input === '') {
        updateSearchDisplay(initialList);
        setSearchTerm(input)
        receiveInput(input);
        return updateSearchDisplay(initialList)
    }
        receiveInput(input)
        setSearchTerm(input)
        updateSearchDisplay(initialList)
    }
```

#### Modal Interface
The modal renders different components based on the string it receives.

![modal](https://toasty-dev.s3-us-west-1.amazonaws.com/icons/modal.gif)

```javascript
    switch(modal){
        case "Sign Up":
            component = <SignupFormContainer />;
            break;
        case "Sign In":
            component = <LoginFormContainer />;
            break;
        default: 
            return null
    }
```

#### Shopping Cart
When a user adds a product to the shopping cart, that product is compared to the cart items currently in the cart. If the product matches a cart item, the item's quantity is increased by one and the state is updated to reflect the change. Otherwise, a new cart item is created with a quantity value of one and the state is updated.

![cart](https://toasty-dev.s3-us-west-1.amazonaws.com/icons/cart.gif)

```javascript
uniqueCartItems(){
        let { userCartItems } = this.props
        let newCartItems = {}
        userCartItems.forEach(userCartItem => {
            if (newCartItems[userCartItem.product.id]) {
                newCartItems[userCartItem.product.id].quantity += userCartItem.quantity
            } else {
                newCartItems[userCartItem.product.id] = { product: userCartItem.product, quantity: userCartItem.quantity, deleteableId: userCartItem.id}
            }
        })
        
        return newCartItems
    }
```

## To-do
* Add Stripe and Paypal checkout
* Add order history
