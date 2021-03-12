import React from "react";
// withDirection to provide direction prop from DirectionProvider
import withDirection from "react-with-direction";
// helpers
import { flipCSSProp } from "./styleHelper";

// component styles
let style = {
  heading: {
    color: "yellowgreen",
    textAlign: "left",
  },
};

const Heading = ({ direction }) => {
  return (
    <h1 style={{ ...flipCSSProp(direction, style.heading) }}>
      {direction === "rtl"
        ? `هذا العنوان محتفظ بتنسيقه (English with Arabic)`
        : `this heading have the same style (عربى مع انجليزى)`}
    </h1>
  );
};

export default withDirection(Heading);
