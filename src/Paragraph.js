import React from "react";
// withDirection to provide direction prop from DirectionProvider
import withDirection from "react-with-direction";
// helpers
import { flipCSSProp, mergeStyles } from "./styleHelper";

// component styles
const style = {
  padding: {
    paddingInlineStart: 30,
  },
  paragraph: {
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
  },
};

const Paragraph = ({ direction }) => {
  console.log(direction);

  return (
    <p
      style={flipCSSProp(
        direction,
        mergeStyles(style.padding, style.paragraph)
      )}
    >
      {direction === "rtl"
        ? "مرحبا بكم فى هذه النسخة العربية من التطبيق"
        : "Welcome to the English version of the App"}
    </p>
  );
};

export default withDirection(Paragraph);
