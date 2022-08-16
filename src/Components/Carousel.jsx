import React from "react";
function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="false"
      data-bs-interval="3000"
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
            src="https://img.freepik.com/free-vector/pair-leather-sports-shoes-wood-background_1284-17526.jpg?w=826&t=st=1660671725~exp=1660672325~hmac=1d783e20c6e70e367de8f37c29daa641fda6e5481f65bc873ab6646cac1f3b2f"
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
            src="https://mycodelesswebsite.com/wp-content/uploads/2019/12/Shoes-Store-Website-Design-1200x720.jpg"
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
