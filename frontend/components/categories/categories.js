import React from 'react'

const Categories = () => {
    return (
    <div >
        
      <ul className="categories-bar">
        <li className="category-jewelry">Jewelry &amp; Accessories</li>
        <li className="category-clothing">Clothing &amp; Shoes</li>
        <li className="category-home">Home &amp; Living</li>
        <li className="category-wedding">Wedding &amp; Party</li>
        <li className="category-toys">Toys &amp; Entertainment</li>
        <li className="category-art">Art &amp; Collectibles</li>
        <li className="category-crafting">Craft Supplies</li>
        <li className="category-vintage">Vintage</li>
        <li className="gifts-div">
          <img
            className="gift"
            src="https://toasty-dev.s3-us-west-1.amazonaws.com/gift.png"
          />
          <div className="category-gifts">Gifts</div>
        </li>
        <hr className="category-animation"/>
      </ul>
      <div className="categories-horizontal"></div>
    </div>
    );
}

export default Categories