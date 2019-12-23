import React from "react";

import Header from "Components/Header";
import Main from "Components/Main";
import Footer from "Components/Footer";
import useLocalStorage from 'hooks/useLocalStorage';

import "./App.scss";

const App = () => {
  const [route, setRoute] = useLocalStorage({
    key: "route", 
    initialValue: "ABOUT"
  });
  return (
    <div className="personal-profile">
      <Header {...{ route, setRoute }} />
      <Main {...{ route }} />
      <Footer />
    </div>
  );
};

export default App;
