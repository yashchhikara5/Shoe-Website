function Items({ addItem, id, mapItem, price, src, rating, off, Name }) {
  return (
    <>
      <div className="col-lg-3 col-md-4 main_class ">
        <div>
          <img alt="..." className="photo" src={src} />
          <p className="names">{Name}</p>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Size
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  7
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  8
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  9
                </a>
              </li>
            </ul>
          </div>
          <p className="pri">
            ₹{price}.00
            <p className="off-season">({off})</p>
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
export default Items;
