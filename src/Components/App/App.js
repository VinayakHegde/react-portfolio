import React, { useState } from "react";

import Header from "Components/Header/Header";
import Main from "Components/Main/Main";
import Footer from "Components/Footer/Footer";

import "./App.css";
// import {MENU} from 'Helpers/Enums';

const App = () => {
  const [route, setRoute] = useState("ABOUT");
  return (
    <div className="personal-profile">
      <Header {...{ route, setRoute }} />
      <Main {...{ route }} />
      <Footer />
    </div>
  );
};

export default App;
