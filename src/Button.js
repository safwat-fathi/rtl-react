import React from "react";
// withDirection to provide direction prop from DirectionProvider
import withDirection from "react-with-direction";
// helpers
import { flipCSSProp, mergeStyles } from "./styleHelper";

// component styles
let style = {
  btn: {
    borderRadius: 10,
    outline: "none",
  },
  theme: {
    color: "red",
    fontSize: 40,
  },
  padding: {
    paddingInlineEnd: 30,
  },
};

const Button = ({ direction, toggleDir }) => {
  return (
    <button
      style={flipCSSProp(
        direction,
        mergeStyles(style.btn, style.theme, style.padding)
      )}
      onClick={toggleDir}
    >
      {direction === "ltr" ? `EN` : `ع`}
    </button>
  );
};

export default withDirection(Button);
