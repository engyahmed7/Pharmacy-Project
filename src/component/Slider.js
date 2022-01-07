import React from "react";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade slider"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/012.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <h1>CARE PHARMACY</h1>
              <p class="lead">
                Your pharmacy at home From cold and flu and pain relief
                medicine, to body and facial care products
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/0111.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <h1>Support that’s more than medicine.</h1>
              <p class="lead">
                CARE is the country’s largest pharmacy benefit manager and one
                of the largest pharmacies. Now, as always, we’re here to help.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleFade"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleFade"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
