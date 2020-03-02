import React from "react";

import Header from "Components/Header";
import Main from "Components/Main";
import Footer from "Components/Footer";
import DiscMenu from "Components/DiscMenu";
import useLocalStorage from 'hooks/useLocalStorage';
import "./App.scss";

const App: React.FC<{}> = () => {
  const [route, setRoute] = useLocalStorage({
    key: "route", 
    initialValue: "ABOUT"
  });
  const props = {route: route as string};
  const onItemClick = (menu: string) => (setRoute as Function)(menu);
  return (
    <div className="app__content">
      <Header {...props} />
      <DiscMenu {...{onItemClick}} />
      <Main {...props} />
      <Footer />
    </div>
  );
};

export default App;
