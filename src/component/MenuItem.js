import React from "react";
import "../styles/Menu.css";

function MenuItem(props) {
  return (
    <div class="container shop">
      <h3>{props.section}</h3>
      <div class="row">
        <div class="col-sm">
          <img src={props.img1} />
          <p>{props.name1}</p>
        </div>
        <div class="col-sm">
          <img src={props.img2} />
          <p>{props.name2}</p>
        </div>
        <div class="col-sm">
          <img src={props.img3} />
          <p>{props.name3}</p>
        </div>
      </div>
    </div>
  );
}
export default MenuItem;
