import { useState } from "react";

import { SHOE_SIZES, STRINGS } from "../scripts/constants";

function ProductItem({ addItem, id, mapItem, name, off, price, rating, src }) {
  const [size, setSize] = useState(STRINGS.size);
  function handleSizeClick(size) {
    setSize(size);
  }
  return (
    <>
      <div className="col-lg-3 col-md-4 product__item">
        <div>
          <img className="photo" src={src} />
          <p className="names">{name}</p>
          <div className="dropdown">
            <button
              aria-expanded="false"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              id="dropdownMenuButton1"
              type="button"
            >
              {size}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {SHOE_SIZES.map((useShoeSize) => (
                <li key={useShoeSize.label}>
                  <span
                    className="dropdown-item"
                    onClick={() => handleSizeClick(useShoeSize.value)}
                  >
                    {useShoeSize.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="pri">
            ₹{price}.00 <span className="off-season">({off})</span>
          </p>
          {rating}
        </div>
        <button
          onClick={() => addItem(mapItem)}
          value={id}
          type="button"
          className="shoe"
        >
          Add to Cart
          <i className="fas fa-shopping-cart" />
        </button>
      </div>
    </>
  );
}

export default ProductItem;
