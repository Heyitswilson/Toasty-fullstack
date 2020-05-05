import React from 'react';
import { Link } from 'react-router-dom';
// import { receiveCategory } from '../../actions/category_actions';

const Categories = (props) => {
    const { receiveCategory, unmountCategory } = props

    function setCategory(category){
      receiveCategory(category)
    }

    return (
    <div >
        
      <ul className="categories-bar">
          <Link onClick={() => setCategory("Jewelry & Accessories")} to="/jewelry-accessories" className="category-jewelry">Jewelry &amp; Accessories</Link>
          <Link onClick={() => setCategory("Clothing & Shoes")} to="/clothing-shoes" className="category-clothing">Clothing &amp; Shoes</Link>
          <Link onClick={() => setCategory("Home & Living")} to="/home-living" className="category-home">Home &amp; Living</Link>
          <Link onClick={() => setCategory("Wedding & Party")} to="/wedding-party" className="category-wedding">Wedding &amp; Party</Link>
          <Link onClick={() => setCategory("Toys & Entertainment")} to="/toys-entertainment" className="category-toys">Toys &amp; Entertainment</Link>
          <Link onClick={() => setCategory("Art & Collectibles")} to="/art-collectibles" className="category-art">Art &amp; Collectibles</Link>
          <Link onClick={() => setCategory("Craft Supplies")} to="/craft-supplies" className="category-crafting">Craft Supplies</Link>
          <Link onClick={() => setCategory("Vintage")} to="/vintage" className="category-vintage">Vintage</Link>
          <Link onClick={() => setCategory("Gifts")} to="/gifts" className="gifts-div">
          <img
            className="gift"
            src="https://toasty-dev.s3-us-west-1.amazonaws.com/gift.png"
          />
          <div className="category-gifts">Gifts</div>
        </Link>
        <hr className="category-animation"/>
      </ul>
      <div className="categories-horizontal"></div>
    </div>
    );
}

export default Categories