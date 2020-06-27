import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';
import _, { debounce } from "lodash";

const SearchBar = (props) => {
    const { receiveInput, receiveSearch } = props;
    const initialList = [];
    const [searchList, updateSearchDisplay] = useState(initialList);
    let searchListArray = [];
    const [searchTerm, setSearchTerm] = useState("");
    const [searchListProducts, updateListProducts] = useState([]);

    useEffect(() => {
        if (searchTerm != "") {
            props.searchProducts(searchTerm.toLowerCase()).then(
                res => updateSearchList(res)
            )
        } else {
            updateSearchDisplay(initialList)

        }
    }, [searchTerm])
    
    const handleSubmit = (e) => {
        event.preventDefault();
        
        if (e === "") {
            receiveInput("")
            clearSearch();
            setSearchTerm("")
        }
        receiveSearch(searchListProducts);
        props.history.push('/search');
        clearSearch();
    }

    const toTop = () => {
        $('html,body').scrollTop(0);
    }

    const clearSearch = (product=null) => {
        toTop()
        updateSearchDisplay(initialList);
        setSearchTerm("")
        $('input.search-bar').val('');
        if (product) {
            props.getProduct(product.id);
        }
        
    }

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

    const updateSearchList = (obj) => {
        let arr = Object.values(obj);
        updateListProducts(arr);
        for (let i = 0; i < arr.length; i += 1) {
            let product = arr[i];
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
    
    const delayedQuery = useCallback(debounce(q => searchProducts(q), 500), []);

    const givenInput = e => {
        delayedQuery(e.currentTarget.value)
    }

    return (
        <div >
            <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
                <input 
                    className="search-bar"
                    id="search-bar" 
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