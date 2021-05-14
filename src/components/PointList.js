import React from "react";
import "../styles/styles.css";


function PointList({points}) {
  let cnt = 0;
  const listItems = points.map((elem) => {
    if (elem.type === "text") {
      cnt += 1;
      return (
        <li className="list-group-item bg-dark text-white ps-0 body-text">
          <span className="me-4">{cnt} </span>
          {elem.content}
        </li>
      );
    } else if (elem.type === "buttons") {
      const btns = elem.content.map((btn) => (
        <button className="btn btn-light me-4" type="button">
          {btn}
        </button>
      ));
      return <li className="list-group-item bg-dark ps-0 ms-5">{btns}</li>;
    }
  });
  return <ul className="list-group-flush ps-0">{listItems}</ul>;
}

export default PointList;
