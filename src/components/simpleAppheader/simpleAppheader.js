import React, { Component } from "react";

class SimpleAppHeader extends Component {
  render() {
    return (
      <header className="App-header shadow p-3 mb-2 ">
        <div className="Container">
          <div className="row align-middle">
            <div className="col">
              <img alt="logo" className="headerpic" src="/PhotoSc.png" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default SimpleAppHeader;
