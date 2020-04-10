import React, { useState, useEffect } from 'react'
import { searchProducts } from '../../util/product_api_util'

const SearchBar = () => {
    // $input = $el.find('input[name=product]')
    // $ul = $el.find('.search-products')
    let $input = $("input.search-bar")
    let $ul = $('ul.search-products')

    const handleInput = e => {
        if ($input.val() === '') {
            renderResults([]);
            return;
        }
        // debugger
        searchProducts($input.val())
            .then(products => console.log(products))
        // debugger
            // .then(products => renderResults(products))
            // .then(console.log($input.val()))
    }

    const renderResults = (products) => {
        $ul.empty();

        products.forEach(product => {
            let $a = $('<a> </a>');
            $a.text(`@${product.name}`);
            $a.attr('href', `/products/${product.id}`);

            let $li = $('<li></li>');
            $li.append($a);
            $ul.append($li)
        })
    }

    const [searchInput, updateInput] = useState('')
    return (
        <div >
            <form onSubmit={handleInput()}>
                <input 
                    className="search-bar" 
                    type="text" 
                    name="product"
                    placeholder="Search for products"
                    onChange={e => updateInput(e.currentTarget.value)}
                />
                <ul className="search-products"></ul>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar