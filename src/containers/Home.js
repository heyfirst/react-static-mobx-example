import React from "react";
import { observer, inject } from "mobx-react";
import Button from "../components/Button";

@inject("counter")
@observer
class Home extends React.Component {
  render() {
    const counter = this.props.counter;
    return (
      <div style={{ padding: "1rem" }}>
        <Button text={`+`} />
        <p>{counter.counter}</p>
        <Button text={`-`} />
        <hr />
        <div>{counter.getTickets}</div>
      </div>
    );
  }
}

export default Home;
