import React, { Component } from "react";

/* react-with-direction pack */
import DirectionProvider, {
  DIRECTIONS
} from "react-with-direction/dist/DirectionProvider";
/* classnames pack */
// import classNames from "classnames/bind";
/* rtl-css-js pack */
import rtlConvert from "rtl-css-js";
import { flipCSSProp, mergeStyles } from "./styleHelper";

function Heading({ ...props }) {
  let style = {
    heading: {
      color: "yellowgreen",
      textAlign: "left"
    }
  };
  console.log(props.rtl, props.rtl);

  return (
    <>
      <h1 style={{ ...flipCSSProp(rtlConvert, props.rtl, style.heading) }}>
        {props.rtl
          ? `هذا العنوان منسق من خلال (asd)`
          : `this heading have the same style (asd)`}
      </h1>
    </>
  );
}

export default class App extends Component {
  state = {
    rtl: false
  };

  toggleDir = () => {
    this.setState({ rtl: !this.state.rtl });
  };

  style = {
    btn: {
      borderRadius: 10,
      outline: "none"
    },
    theme: {
      color: "red",
      fontSize: 40
    },
    padding: {
      paddingLeft: 30
    }
  };

  render() {
    return (
      <DirectionProvider
        direction={this.state.rtl ? DIRECTIONS.RTL : DIRECTIONS.LTR}
      >
        <div>
          <button
            style={flipCSSProp(
              rtlConvert,
              this.state.rtl,
              mergeStyles(this.style.btn, this.style.theme, this.style.padding)
            )}
            onClick={this.toggleDir}
          >
            {this.state.rtl ? `EN` : `ع`}
          </button>

          <h1>Welcome!</h1>
          <Heading rtl={this.state.rtl} />
          <h1>أهلا و سهلا بكم</h1>
          <p
            style={flipCSSProp(rtlConvert, this.state.rtl, this.style.padding)}
          >
            مرحبا بكم فى هذه النسخة العربية من التطبيق
          </p>
        </div>
      </DirectionProvider>
    );
  }
}
