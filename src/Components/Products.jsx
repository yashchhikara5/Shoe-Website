import ProductItem from "./ProductItem"

import { MAPPING } from "../scripts/constants"

function Products({ cart, setCart }) {
  return (
    <section id="products">
      <div className="row">
        {MAPPING.map((useMapItem) => {
          return (
            <ProductItem
              cart={cart}
              id={useMapItem.id}
              key={useMapItem.id}
              mapItem={useMapItem}
              name={useMapItem.name}
              off={useMapItem.off}
              price={useMapItem.price}
              rating={useMapItem.rating}
              setCart={setCart}
              src={useMapItem.src}
            />
          )
        })}
      </div>
    </section>
  )
}
export default Products
