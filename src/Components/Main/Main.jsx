import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { MENU } from 'Models/Enums';
import { About, Experience, Projects, Skills } from 'Components/Lazy';
import Spinner from 'Components/Spinner';
import './Main.scss';

const Main = ({ route }) => (
  <main className={`main__content main__content--${route.toLowerCase()}`}>
    <Suspense fallback={<Spinner />}>
      {route === MENU.EXPERIENCE ? <Experience /> : route === MENU.PROJECTS ? <Projects /> : route === MENU.SKILLS ? <Skills /> : <About />}
    </Suspense>
  </main>
);

Main.propTypes = {
  route: PropTypes.string,
};

export default Main;
