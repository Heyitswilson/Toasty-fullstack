import PublicProductIdxContainer from '../product_index/public_product_idx_container'
import React from 'react'

const SearchPage = (props) => {
    const { search, input } = props;
    
    return (
        <div>
            <h1 className="header">Searched for "{input}"</h1>
            <ul className="grid-container">
                {search.map((product) => {
                    return (
                        <div key={product.id} className="grid-item">
                            <PublicProductIdxContainer
                                product={product}
                            />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchPage