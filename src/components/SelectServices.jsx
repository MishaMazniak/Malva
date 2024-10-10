import React, { useEffect, useState } from "react";

export default function NewScreen({ selectScreen }) {
  return (
    <div className="servises_box">
      <div className="item_box" onClick={() => selectScreen("Lip")}>
        <h2>Lip</h2>
        <img className="servises_img" src="Lip.jpg"></img>
      </div>
      <div className="item_box" onClick={() => selectScreen("Brows")}>
        <h2>Brows</h2>
        <img className="servises_img" src="Brows.jpg"></img>
      </div>
      <div className="item_box" onClick={() => selectScreen("Lash")}>
        <h2>Lash </h2>
        <img className="servises_img last_img" src="Lash.jpg"></img>
      </div>
    </div>
  );
}
