import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';

const SearchBar = (props) => {
    const { products, receiveSearch, receiveInput } = props;
    
    let productsArray = quickSort(Object.keys(products).map(num => products[num]));
    
    const initialList = [];
    const [searchListProducts, updateListProducts] = useState([])
    const [searchList, updateSearch] = useState(initialList);

    const toTop = () => {
        $('html,body').scrollTop(0);
    }

    const handleSubmit = (e) => {
        event.preventDefault();
        receiveSearch(searchListProducts);
        clearSearch();
        props.history.push('/search');
    }

    const clearSearch = (product=null) => {
        toTop()
        updateSearch(initialList);
        $('input.search-bar').val('');
        if (product) {
            props.getProduct(product.id);
        }
        
    }

    function quickSort(array) {
        if (array.length <= 1) return array;

        let pivot = array.shift();
        let left = array.filter(el => el.name < pivot.name);
        let right = array.filter(el => el.name >= pivot.name);

        let leftSorted = quickSort(left);
        let rightSorted = quickSort(right);

        return [...leftSorted, pivot, ...rightSorted];
    }
    
    const updateSearchProducts = (product) => {
        updateListProducts(searchListProducts => [...searchListProducts,
            product
        ])
    }
    
    const updateSearchList = (product) => {
        updateSearch(searchList => [...searchList, 
            <Link onClick={() => clearSearch(product)} key={product.id} className="search-link" to={`/products/${product.id}`}>{showLess(product.name)}</Link>
        ])
    }

    function binarySearch(array, target) {
        if (array.length === 0) {
            return false;
        }

        let midIdx = Math.floor(array.length / 2);
        let leftHalf = array.slice(0, midIdx);
        let rightHalf = array.slice(midIdx + 1);

        if (target < array[midIdx]) {
            return binarySearch(leftHalf, target);
        } else if (target > array[midIdx]) {
            return binarySearch(rightHalf, target);
        } else {
            return true;
        }
    }

    const searchProducts = (input) => {
        if (input === '') {
            updateListProducts(initialList);
            receiveInput(input);
            return updateSearch(initialList);
        }
        updateListProducts(initialList);
        updateSearch(initialList);
        receiveInput(input);
        for(let i = 0; i < productsArray.length; i += 1) {
            let product = productsArray[i];
            if (product.name.toLowerCase().includes(input.toLowerCase())) {
                updateSearchList(product);
                updateSearchProducts(product);
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
            <form className="search-form" onSubmit={handleSubmit}>
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

export default withRouter(SearchBar);