import { useState } from "react"

import { formatPriceToStr, SHOE_SIZES, STRINGS } from "../scripts/constants"
import { calculateSellingPrice } from "../scripts/helpers"

const SIZE_ERROR = "Please select size"

function ProductItem({ cart, id, name, off, price, rating, setCart, src }) {
  const [size, setSize] = useState(STRINGS.size)
  const [sizeError, setSizeError] = useState("")

  const offPercentage = parseFloat(off)
  const sellingPrice = calculateSellingPrice(price, offPercentage)

  const getDoesProductAlreadyExistInCart = (product) => {
    return !!cart?.find((useCart) => useCart.id === product.id)
  }

  const handleAddToCart = () => {
    if (!size || typeof size !== "number") {
      setSizeError(SIZE_ERROR)
      return
    }

    const product = {
      discount: price - sellingPrice,
      id,
      name,
      price,
      sellingPrice,
      size,
      src,
    }

    setCart((prev) => {
      const doesProductAlreadyExistInCart = getDoesProductAlreadyExistInCart(
        prev,
        product
      )

      if (!doesProductAlreadyExistInCart) {
        return [...prev, product]
      }

      return prev
    })
  }

  const handleSizeClick = (size) => {
    if (sizeError) {
      setSizeError("")
    }

    setSize(size)
  }

  const doesProductAlreadyExistInCart = getDoesProductAlreadyExistInCart({ id })

  return (
    <>
      <div className="col-lg-3 col-md-4 product__item">
        <div>
          <img alt="..." className="photo" src={src} />
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
          <div className="pri">
            <s>{formatPriceToStr(price)}</s>{" "}
            <span>{formatPriceToStr(sellingPrice)}</span>{" "}
            <div>
              <span className="off-season">({off})</span>
            </div>
          </div>
          {rating}
        </div>

        {doesProductAlreadyExistInCart ? (
          <>
            <p className="text-success mt-3">Product already exists in cart</p>
          </>
        ) : (
          <button
            onClick={() => handleAddToCart()}
            value={id}
            type="button"
            className="shoe"
          >
            Add to Cart
            <i className="fas fa-shopping-cart" />
          </button>
        )}

        {sizeError && (
          <div className="mb-3 text-danger">
            <small>{sizeError}</small>
          </div>
        )}
      </div>
    </>
  )
}

export default ProductItem
