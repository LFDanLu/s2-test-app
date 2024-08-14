import "@react-spectrum/s2/page.css";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { Button } from "@react-spectrum/s2";
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <Button
        styles={style({
          marginStart: 16,
        })}
      >
        Hello Spectrum 2!
      </Button>
    );
  }
}

export default hot(App);
