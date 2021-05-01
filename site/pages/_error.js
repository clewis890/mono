import React, { Component } from "react";
import Router from "next/router";

export default class _error extends Component {
  // componentDidMount = () => {
  //   Router.push("/");
  // };

  // render() {
  //   return <div />;
  // }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '40px auto',}}>
      <h4>
        Sorry! There was an Error!
      </h4>
      </div>
    )
  }
}
