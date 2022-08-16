import React from "react";
function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            className="responsive"
            src="https://mycodelesswebsite.com/wp-content/uploads/2019/12/Shoes-Store-Website-Design-1200x720.jpg"
          />
        </div>
        <div class="carousel-item">
          <img
            className="responsive"
            src="https://img.freepik.com/free-psd/colorful-slip-mockup-streetwear-sneakers-fashion_53876-98735.jpg?w=2000"
          />
        </div>
        <div class="carousel-item">
          <img
            className="responsive"
            src="https://www.thetrendspotter.net/wp-content/uploads/2021/05/Online-Shoe-Stores.jpg"    
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
