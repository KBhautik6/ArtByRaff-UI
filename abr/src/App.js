import React from "react";
import { Original } from "./components/Original/Original";
import { Sculptures } from "./components/Sculptures/Sculptures";
// import { ArtByRaff } from "./components/ArtByRaff/ArtByRaff";
// import { AboutMe } from './components/AboutMe/AboutMe';

const App = () => {
  return (
    <div>
      {/* <AboutMe/> */}
      {/* <ArtByRaff /> */}
      <Original />
      <Sculptures />
    </div>
  );
};

export default App;
