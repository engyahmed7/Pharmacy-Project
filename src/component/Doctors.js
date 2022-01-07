import React from "react";

function Doctors(props) {
  return (
    <>
      <section class="doctors">
        <div class="col">
          <h3 class="lead">{props.name}</h3>
          <img src={props.img} class="doc" alt="doctor" />
          <div class="stars">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <p>{props.info}</p>
        </div>
      </section>
    </>
  );
}
export default Doctors;
