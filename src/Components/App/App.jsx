import React from "react";

import Header from "Components/Header";
import Main from "Components/Main";
import Footer from "Components/Footer";
import DiscMenu from "Components/DiscMenu";
import useLocalStorage from 'hooks/useLocalStorage';

import "./App.scss";

const App = () => {
  const [route, setRoute] = useLocalStorage({
    key: "route", 
    initialValue: "ABOUT"
  });
  return (
    <div className="app__content">
      <Header {...{route}} />
      <DiscMenu onItemClick={setRoute} />
      <Main {...{route}} />
      <Footer />
    </div>
  );
};

export default App;
