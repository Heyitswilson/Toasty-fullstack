import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';

const SearchBar = (props) => {
    const { products } = props;
    let productsNames = Object.keys(products).map(num => products[num]);
    // let productsNames = Object.keys(products)
    // let searchList;
    const [inProp, setInProp] = useState(false);
    const [searchList, searching] = useState([]);
    const [display, setDisplay] = useState(false);
    // const [redirectList, setRedirectList] = useState([])
    const initialList = [];

    $(document).keypress(
        function (event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });

    const clearSearch = () => {
        searching([])
        $('input.search-bar').val('')
        setDisplay(false)
    }

    const updateSearchList = (product) => {
        // setRedirectList(redirectList => [...redirectList], product)
        searching(searchList => [...searchList, 
            <div className="link-div">
                {/* <img className="link-img" src={product.photoUrl}/> */}
                <Link onClick={() => clearSearch()} className="search-link" to={`/products/${product.id}`}>{showLess(product.name)}</Link>
            </div>
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
                    <ul className="list" onClick={(e) => e.stopPropagation()}>
                        {searchList}
                    </ul>
                </div>
            )
        }
    }

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

    const givenInput = e => {
        updateInput(e.currentTarget.value),
        searchProducts(e.currentTarget.value)
        setDisplay(true)
    }
    
    // const redirectTo = () => {
    //     props.history.push('/search')
    // }

    const [searchInput, updateInput] = useState('');
    return (
        <div >
            <form className="search-form">
                <input 
                    // onClick={() => setInProp(true)}
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
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
    )
}

export default withRouter(SearchBar)