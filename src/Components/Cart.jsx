import ShopItem from "./ShopItem";

function Cart({ cart: cartItems, removeItem, setCart }) {
  function getTotalPrice() {
    const INITIAL_VALUE = { quantity: 0, price: 0 };
    const totalPrice = cartItems.reduce((prev, curr) => {
      return {
        price: prev.quantity * prev.price + curr.quantity * curr.price,
        quantity: 1,
      };
    }, INITIAL_VALUE);
    return totalPrice;
  }

  return (
    <div>
      {cartItems && Array.isArray(cartItems) && cartItems.length > 0 && (
        <>
          <div className="your-cart__container">
            <span className="your-cart">Your Cart</span>
          </div>
          {cartItems.map((useCartItem) => (
            <ShopItem
              id={useCartItem.id}
              imgSrc={useCartItem.src}
              key={useCartItem.id}
              removeItem={removeItem}
              prices={useCartItem.price}
              Name={useCartItem.Name}
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
  );
}
export default Cart;
