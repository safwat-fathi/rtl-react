const flipCSSProp = (rtlConvert, rtl, cssProp = {}) => {
  return rtl ? rtlConvert(cssProp) : cssProp;
};

export default flipCSSProp;
