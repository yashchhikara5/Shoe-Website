import React from "react"
function Carousel() {
  return (
    <div
      className="carousel slide flex-stretch"
      data-bs-interval="3000"
      id="home__carousel"
    >
      <div className="carousel-inner">
        {/* <div className="carousel-item active">
          <img
            alt="..."
            className="img-fluid"
            src="https://mobirise.com/website-templates/free-website-design-templates/assets/images/shop5.jpg"
          />
        </div>
        <div className="carousel-item">
          <img
            alt="..."
            className="img-fluid"
            src="https://mycodelesswebsite.com/wp-content/uploads/2019/12/Shoes-Store-Website-Design-1200x720.jpg"
          />
        </div> */}
        <div className="carousel-item active">
          <img
            alt="..."
            className="img-fluid"
            src="https://img.freepik.com/premium-vector/sale-banner-sneaker-shoes_100562-29.jpg?w=2000"
          />
        </div>
        <div className="carousel-item">
          <img
            alt="..."
            className="img-fluid"
            src="https://img.freepik.com/free-psd/colorful-slip-mockup-streetwear-sneakers-fashion_53876-98735.jpg?w=2000"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        data-bs-slide="prev"
        data-bs-target="#home__carousel"
        type="button"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#home__carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Carousel
