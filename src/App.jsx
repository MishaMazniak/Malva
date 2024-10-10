import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SelectServices from "./components/SelectServices";
import LipScreen from "./components/LipScreen";
import BrowsScreen from "./components/BrowsScreen";
import LashScreen from "./components/LashScreen";

function App() {
  const [changeScreen, setChangeScreen] = useState("main");

  const selectScreen = (nameScrin) => {
    setChangeScreen(nameScrin);
  };

  useEffect(() => {
    console.log(changeScreen);
  }, [changeScreen]);
  return (
    <div className="wraper">
      <Header selectScreen={selectScreen} changeScreen={changeScreen} />
      {changeScreen === "main" && (
        <SelectServices selectScreen={selectScreen} />
      )}
      {changeScreen === "Lip" && <LipScreen selectScreen={selectScreen} />}
      {changeScreen === "Brows" && <BrowsScreen selectScreen={selectScreen} />}
      {changeScreen === "Lash" && <LashScreen selectScreen={selectScreen} />}
      <Footer />
    </div>
  );
}

export default App;
