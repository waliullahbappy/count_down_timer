import React, { Component } from "react";
import Title from "./components/TitleComponet/Title";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-2">
              <Title />
            </div>
          </div>
        </div>
      </>
    );
  }
}
