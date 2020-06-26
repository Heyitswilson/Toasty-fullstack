import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';

const SearchBar = (props) => {
    const { receiveInput } = props;
    const initialList = [];
    const [searchList, updateSearchDisplay] = useState(initialList);
    let searchListArray = [];
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        props.searchProducts(searchTerm.toLowerCase())
        console.log(searchTerm)
        // debugger
        updateSearchList();
        // clearTimeout(timer);
    }, [searchTerm]);
    
    const handleSubmit = (e) => {
        event.preventDefault();
        clearSearch();
        setSearchTerm("")

        if (e === "") {
            receiveInput("")
        }

        props.searchProducts(searchTerm.toLowerCase())
        props.history.push('/search');
    }

    const toTop = () => {
        $('html,body').scrollTop(0);
    }

    const clearSearch = (product=null) => {
        toTop()
        updateSearchDisplay(initialList);
        $('input.search-bar').val('');
        if (product) {
            props.getProduct(product.id);
        }
        
    }
    
    const _updateSearchDisplay = (product) => {
        updateSearchDisplay(searchList => [...searchList, 
            <Link onClick={() => clearSearch(product)} key={product.id} className="search-link" to={`/products/${product.id}`}>{showLess(product.name)}</Link>
        ])
    }


    let timer;
    const searchProducts = (input) => {
        // timer = setTimeout(function() {
        // }, 1000)
        if (input === '') {
            setSearchTerm(input)
            receiveInput(input);
            updateSearchDisplay(initialList);
        } else {
            receiveInput(input)
            setSearchTerm(input)
            updateSearchDisplay(initialList)
                // props.searchProducts(input.toLowerCase())
        }
    }

    const updateSearchList = () => {
        let productsArray = Object.keys(props.search).map(num => props.search[num]);
        for (let i = 0; i < productsArray.length; i += 1) {
            let product = productsArray[i];
            console.log(product)
            searchListArray.push(
                <Link onClick={() => clearSearch(product)} key={product.id} className="search-link" to={`/products/${product.id}`}>{showLess(product.name)}</Link>
            )
        }

        updateSearchDisplay(searchListArray)
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
            <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
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