import ProductItem from "./ProductItem"

import { MAPPING } from "../scripts/constants"

function Products() {
  return (
    <section id="products">
      <div className="row">
        {MAPPING.map((useMapItem) => {
          return (
            <ProductItem
              name={useMapItem.name}
              id={useMapItem.id}
              key={useMapItem.id}
              mapItem={useMapItem}
              off={useMapItem.off}
              price={useMapItem.price}
              rating={useMapItem.rating}
              src={useMapItem.src}
            />
          )
        })}
      </div>
    </section>
  )
}
export default Products;
