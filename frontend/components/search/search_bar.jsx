import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const SearchBar = (props) => {
    const { products } = props;
    
    let productsArray = Object.keys(products).map(num => products[num]);
    
    const initialList = [];
    const [searchList, updateSearch] = useState(initialList);

    $(document).keypress(
        function (event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        }
    );

    const clearSearch = (product=null) => {
        updateSearch(initialList);
        $('input.search-bar').val('');
        if (product) {
            props.getProduct(product.id);
        }
    }

    const updateSearchList = (product) => {
        updateSearch(searchList => [...searchList, 
            <Link onClick={() => clearSearch(product)} key={product.id} className="search-link" to={`/products/${product.id}`}>{showLess(product.name)}</Link>
        ])
    }

    const searchProducts = (input) => {
        if (input === '') {
            return updateSearch(initialList);
        }
        updateSearch(initialList)
        for(let i = 0; i < productsArray.length; i += 1) {
            let product = productsArray[i];
            if (product.name.toLowerCase().includes(input.toLowerCase())) {
                updateSearchList(product);
            }
        }
    }

    const displaySearch = () => {
        if (searchList.length != 0) {
            return (
                <div className="search-background">
                    <div className="close" onClick={() => clearSearch()}>
                        X
                    </div>
                    <div className="list" >
                        {searchList}
                    </div>
                </div>
            )
        }
    }

    const showLess = content => {
        if (content.length > 16) {
            return (
                content.slice(0, 80) + "..."
            )
        } else {
            return (
                content
            )
        }
    }

    const givenInput = e => {
        searchProducts(e.currentTarget.value);
    }

    return (
        <div >
            <form className="search-form">
                <input 
                    className="search-bar" 
                    type="text" 
                    name="product"
                    placeholder="Search for products"
                    onChange={
                        (e) => givenInput(e)
                    }
                    autoComplete="off"
                />
                {displaySearch()}
            </form>
        </div>
    )
}

export default SearchBar;