import React from "react";
import { formatPriceToStr } from "../scripts/constants";

function CartItem({
  id: productId,
  imgSrc,
  name,
  price,
  removeItem,
  setCart,
  size,
  discount,
  sellingPrice,
}) {
  const [count, setCount] = React.useState(1);

  function increment() {
    setCount(count + 1);
    setCart((prev) => {
      const currentProduct = prev.find((usePrev) => usePrev.id === productId);
      const currentProductIdx = prev.findIndex(
        (usePrev) => usePrev.id === currentProduct.id
      );
      if (currentProduct && currentProductIdx > -1) {
        const tempPrev = [...prev];
        tempPrev[currentProductIdx].quantity =
          (tempPrev[currentProductIdx].quantity || 0) + 1;
        return tempPrev;
      }
      return prev;
    });
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1);
      setCart((prev) => {
        const currentProduct = prev.find((usePrev) => usePrev.id === productId);
        const currentProductIdx = prev.findIndex(
          (usePrev) => usePrev.id === currentProduct.id
        );
        if (currentProduct && currentProductIdx > -1) {
          const tempPrev = [...prev];
          if (tempPrev[currentProductIdx].quantity > 1) {
            tempPrev[currentProductIdx].quantity =
              (tempPrev[currentProductIdx].quantity || 0) - 1;
            return tempPrev;
          }
        }
        return prev;
      });
    }
  }

  function remove() {
    removeItem(productId);
  }

  return (
    <div className="row shop-item__container__row">
      <div className="col-12 shop-item__container">
        <div className="shop-item__cart__container">
          <img alt="..." className="shop-item__cart__photo" src={imgSrc} />
          <p className="names_cart">
            {`${name} `} <br />
            {`Size = ${size}`}
          </p>
          <div
            className="btn-group counter-btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn button1 btn-outline-dark"
              onClick={decrement}
            >
              -
            </button>

            <button type="button" className="btn button1 btn-outline-dark">
              {count}
            </button>

            <button
              type="button"
              className="btn button1 btn-outline-dark"
              onClick={increment}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="button1 btn-dark btn remove-button"
            onClick={remove}
          >
            Remove
          </button>
        </div>

        <div className="price__container">
          <s className="me-1">{formatPriceToStr(price)}</s>
          <div>
            <span className="price__total">{`${formatPriceToStr(
              sellingPrice
            )} * ${count} = ${formatPriceToStr(count * sellingPrice)}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;


