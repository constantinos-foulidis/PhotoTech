import React, { Component } from 'react';
import '../Cards/Cards.css';
import {
  BrowserRouter as Router,
  Swinpmtch,
  Route,
  Link
} from "react-router-dom";

import resourceposition from '../ProgramRecources/RecourcePlacement';
class Cards extends Component {
  constructor(props){
    super();
    let indexOf = props.name.indexOf(" ");
    console.log("Index of: ", indexOf);
    if(indexOf >= 0){
      this.first = props.name.slice(0, indexOf);
      this.rest = props.name.slice(indexOf);
    } else {
      this.first = props.name;
      this.rest = null;
    }
    this.refe  = props.refe;
    
    console.log(props.refe);
  }
  render () {
    return (
          <div className="card mb-5 cardwidth">
            <div className="card-body">
              <Link className="linkblack" to={`/${this.refe}`}  className="card-link textSize">
                <span>{this.first}</span>
                {this.rest !== null ? (<br/>): null}
                {this.rest !== null ? <span>{this.rest}</span>: null}</Link>
            </div>
          </div>

    );
  }
}

export default Cards;
