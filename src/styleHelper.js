// convert css props package
import rtlConvert from "rtl-css-js";

// flip css properties based on App direction.
// example paddingRight will be flipped to paddingLeft on LTR direction
const flipCSSProp = (direction, cssProp = {}) => {
  return direction === "rtl" ? rtlConvert(cssProp) : cssProp;
};

// this function accepts multiple params
// using es6 we can rest parameters to get array of CSS rules
const mergeStyles = (...rules) => {
  let rulesInObjForm = {};
  // merging css rules in one object
  return Object.assign(rulesInObjForm, ...rules);
};

export { flipCSSProp, mergeStyles };
