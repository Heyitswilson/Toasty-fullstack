import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = (props) => {
    const { products } = props;
    let productsNames = Object.keys(products).map(num => products[num]);
    // let productsNames = Object.keys(products)
    // let searchList;
    const [searchList, searching] = useState([]);
    const initialList = [];

    const updateSearchList = (product) => {
        searching(searchList => [...searchList, <Link className="search-link" to={`/products/${product.id}`}>{showLess(product.name)}</Link>])
    }

    const searchProducts = (input) => {
        if (input === '') {
            return searching(initialList)
        }
        searching(initialList)
        for(let i = 0; i < productsNames.length; i += 1) {
            let product = productsNames[i]
            if (product.name.toLowerCase().includes(input.toLowerCase())) {
                updateSearchList(product)
                console.log(searchList)
            }
        }
    }

    const displaySearch = () => {
        if (searchList.length != 0) {
            return(
                <ul className="list">{searchList}</ul>   
            )
        }
    }

    // const checkKey = e => {
    //     if (e.keyCode === '40') {
            
    //     }
    // }

    const showLess = content => {
        if (content.length > 16) {
            return (
                <h1 className="search-link">{content.slice(0, 80) + "..."}</h1>
            )
        } else {
            return (
                <h1 className="search-link">{content}</h1>
            )
        }
    }

    const [searchInput, updateInput] = useState('');
    return (
        <div >
            <form className="search-form" onSubmit={() => searchProducts()}>
                <input 
                    className="search-bar" 
                    type="text" 
                    name="product"
                    placeholder="Search for products"
                    onChange={
                        e => updateInput(e.currentTarget.value),
                        e => searchProducts(e.currentTarget.value)
                    }
                    autoComplete="off"
                />
                {displaySearch()}
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
    )
}

export default SearchBar