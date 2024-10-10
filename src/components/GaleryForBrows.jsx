import React from "react";

export default function GaleryForBrows() {
  return (
    <div className="galery_box">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="BrowAndLash.jpg"
              className="d-block w-100"
              alt="img_Brows"
            />
          </div>
          <div className="carousel-item">
            <img
              src="Brows_befor-after.jpg"
              className="d-block w-100"
              alt="img_Brows"
            />
          </div>
          <div className="carousel-item">
            <img src="Brow.jpg" className="d-block w-100" alt="img_Brows" />
          </div>
          <div className="carousel-item">
            <img
              src="Brow_Example.jpg"
              className="d-block w-100"
              alt="img_Brows"
            />
          </div>
          <div className="carousel-item">
            <img
              src="Brow Tint.jpg"
              className="d-block w-100"
              alt="img_Brows"
            />
          </div>
          <div className="carousel-item">
            <img
              src="Brow Lamination.jpg"
              className="d-block w-100"
              alt="img_Brows"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
