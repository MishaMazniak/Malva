import React from "react";

export default function Header({ selectScreen, changeScreen }) {
  return (
    <div className="head_box" onClick={() => selectScreen("main")}>
      {changeScreen !== "main" && (
        <img className="icon_home" src="home.png"></img>
      )}
      <img className="img_logo" src="Logo_Malva.jpg"></img>
      <p>Eyebrows | Beauty Permanent Makeup</p>
    </div>
  );
}
