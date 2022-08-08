import { useState } from "react";
import Cart from "./Cart";
import Items from "./Items";
import MAPPING from "./Mapping";
function Pictures() {
  const [cart, setCart] = useState([]);

  function addItem(mapItem) {
    console.log("Yay product added");
    setCart((prev) => {
      const { id: productId } = mapItem;
      const currentProduct = prev.find((usePrev) => usePrev.id === productId);
      if (currentProduct) {
        return prev;
      }
      return [...prev, { ...mapItem, quantity: 1 }];
    });
  }

  function removeItem(id) {
    setCart((prev) => {
      return prev.filter((item, index) => {
        return item.id !== id;
      });
    });
  }

  console.log("__cart__", cart);

  return (
    <div>
      <section id="pricing">
        <div className="row">
          {MAPPING.map((useMapItem) => {
            return (
              <Items
                addItem={addItem}
                id={useMapItem.id}
                rating={useMapItem.rating}
                key={useMapItem.id}
                mapItem={useMapItem}
                off={useMapItem.off}
                Name={useMapItem.Name}
                price={useMapItem.price}
                src={useMapItem.src}
              />
            );
          })}
        </div>
      </section>
      <Cart cart={cart} removeItem={removeItem} setCart={setCart} />
    </div>
  );
}
export default Pictures;
