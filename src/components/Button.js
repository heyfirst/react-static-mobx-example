import React from "react";
import { observer, inject } from "mobx-react";

@inject("counter")
@observer
class Button extends React.Component {
  render() {
    const counter = this.props.counter;
    let onClick;

    if (this.props.text === "+") {
      onClick = () => counter.setCounter(1);
    } else {
      onClick = () => counter.setCounter(-1);
    }

    return <button onClick={() => onClick()}>{this.props.text}</button>;
  }
}

export default Button;
