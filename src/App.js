import React, { useState } from "react";
// app components
import Heading from "./Heading";
import Button from "./Button";
import Paragraph from "./Paragraph";
// react-with-direction pack
import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";

const App = () => {
  // app direction state
  const [rtl, setRtl] = useState(false);

  const toggleDir = () => {
    setRtl(!rtl);
  };

  return (
    <DirectionProvider direction={rtl ? DIRECTIONS.RTL : DIRECTIONS.LTR}>
      <div>
        <Button toggleDir={toggleDir} />
        <h1>{rtl ? "أهلا و سهلا بكم" : "Welcome"}</h1>
        <Heading />
        <Paragraph />
      </div>
    </DirectionProvider>
  );
};

export default App;
