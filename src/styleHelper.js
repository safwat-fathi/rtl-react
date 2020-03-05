const flipCSSProp = (rtlConvert, rtl, cssProp = {}) => {
  return rtl ? rtlConvert(cssProp) : cssProp;
};

const mergeStyles = (...style) => {
  return Object.assign({}, ...style);
};

export { flipCSSProp, mergeStyles };
// export mergeStyles;
