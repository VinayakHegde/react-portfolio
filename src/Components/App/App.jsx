import React, { useState } from "react";

import Header from "Components/Header";
import Main from "Components/Main";
import Footer from "Components/Footer";

import "./App.scss";

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
