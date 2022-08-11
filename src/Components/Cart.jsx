import CartItem from "./CartItem"

function Cart({ cart: cartItems, removeItem, setCart }) {
  function getTotalPrice() {
    const INITIAL_VALUE = { quantity: 0, price: 0 }
    const totalPrice = cartItems.reduce((prev, curr) => {
      return {
        price: prev.quantity * prev.price + curr.quantity * curr.price,
        quantity: 1,
      }
    }, INITIAL_VALUE)
    return totalPrice
  }

  return (
    <div className="flex-stretch">
      <div className="your-cart__container">
        <span className="your-cart">Your Cart</span>
      </div>

      {cartItems && Array.isArray(cartItems) && cartItems.length > 0 && (
        <>
          {cartItems.map((useCartItem) => (
            <CartItem
              id={useCartItem.id}
              imgSrc={useCartItem.src}
              key={useCartItem.id}
              name={useCartItem.name}
              prices={useCartItem.price}
              removeItem={removeItem}
              setCart={setCart}
              text={useCartItem}
            />
          ))}

          <div className="total-price__container">
            <span className="total-price__cta">Total Price</span>
            <span className="total-price">₹{getTotalPrice().price}</span>
          </div>
        </>
      )}
    </div>
  )
}
export default Cart
