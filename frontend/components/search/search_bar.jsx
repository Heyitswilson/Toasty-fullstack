import React, { useState, useEffect } from 'react'

const SearchBar = (props) => {
    const { products } = props;
    let productsNames = Object.keys(products).map(num => products[num]);
    // let productsNames = Object.keys(products)
    // let searchList;
    const [searchList, searching] = useState([]);
    const initialList = [];

    const updateSearchList = (product) => {
        searching(searchList => [...searchList, product.name])
    }

    const searchProducts = (input) => {
        // debugger
        if (input === '') {
            return searching(initialList)
        }
        searching(initialList)
        for(let i = 0; i < productsNames.length; i += 1) {
            let product = productsNames[i]
            if (product.name.toLowerCase().includes(input.toLowerCase())) {
                // searching(product.name)
                updateSearchList(product)
                // debugger
                console.log(searchList)
            }
        }
        // debugger
    }

    const displaySearch = () => {
        if (searchList.length != 0) {
            return(
                <ul className="search-products">{searchList}</ul>
            )
        }
    }


    const [searchInput, updateInput] = useState('');
    return (
        <div >
            <form onSubmit={() => searchProducts()}>
                <input 
                    className="search-bar" 
                    type="text" 
                    name="product"
                    placeholder="Search for products"
                    onChange={
                        e => updateInput(e.currentTarget.value),
                        e => searchProducts(e.currentTarget.value)
                    }
                />
                {displaySearch()}
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
    )
}

export default SearchBar