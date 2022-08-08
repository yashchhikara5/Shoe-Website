import React from "react";
function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-interval="3000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              className="responsive"
              src="   https://mobirise.com/website-templates/free-website-design-templates/assets/images/shop5.jpg"
              alt="shoe1-image"
            />
          </div>
          <div class="carousel-item">
            <img
              className="responsive"
              src="https://mycodelesswebsite.com/wp-content/uploads/2019/12/Shoes-Store-Website-Design-1200x720.jpg"
              alt="Shoe-image"
            />
          </div>
          <div class="carousel-item">
            <img
              className="responsive"
              src="  https://img.freepik.com/premium-vector/sale-banner-sneaker-shoes_100562-29.jpg?w=2000"
              alt="shoe2-image"
            />
          </div>
          <div class="carousel-item">
            <img
              className="responsive"
              src="https://img.freepik.com/free-psd/colorful-slip-mockup-streetwear-sneakers-fashion_53876-98735.jpg?w=2000"
              alt="shoe3-image"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
