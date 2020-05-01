import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';

const SearchBar = (props) => {
    const { products } = props;
    let productsNames = Object.keys(products).map(num => products[num]);
    const [inProp, setInProp] = useState(false);
    const [searchList, searching] = useState([]);
    const [display, setDisplay] = useState(false);
    const initialList = [];

    $(document).keypress(
        function (event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });

    const clearSearch = (product) => {
        searching([])
        $('input.search-bar').val('')
        setDisplay(false)
        props.getProduct(product.id)
    }

    const updateSearchList = (product) => {
        searching(searchList => [...searchList, 
            <Link onClick={() => clearSearch(product)} className="search-link" to={`/products/${product.id}`}>{showLess(product.name)}</Link>
        ])
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
                    <div className="list" onClick={(e) => e.stopPropagation()}>
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
        updateInput(e.currentTarget.value),
        searchProducts(e.currentTarget.value)
        setDisplay(true)
    }

    const [searchInput, updateInput] = useState('');
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

export default withRouter(SearchBar)