# Toasty
[Live Site](http://toasty-fullstack.herokuapp.com/#/)

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
This is a simple search function that compares a user's text input to a list of products and updates the state to include only products where their names includes the user's search string.

![search]

```javascript
    const updateSearchList = (product) => {
        searching(searchList => [...searchList, 
            <div className="link-div">
                <Link onClick={() => clearSearch()} className="search-link" to={`/products/${product.id}`}>{showLess(product.name)}</Link>
            </div>
        ])
    }

    const searchProducts = (input) => {
        if (input === '') {
            return searching(initialList)
        }
        searching(initialList)
        for(let i = 0; i < products.length; i += 1) {
            if (products.name.toLowerCase().includes(input.toLowerCase())) {
                updateSearchList(product)
            }
        }
    }
```

#### Modal Interface
The modal renders different components based on the string it receives.

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
* Additional search bar functionality
* Additional categories functionality
* Comments and reviews
* Database efficiency
