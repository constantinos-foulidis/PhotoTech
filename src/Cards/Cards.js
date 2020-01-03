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
    this.name = props.name;
    this.refe  = props.refe;
    console.log(props.refe);
  }
  render () {
    return (
          <div className="card mb-5 cardwidth">
            <div className="card-body">
             <Link className="linkblack" to={`/${this.refe}`}  className="card-link textSize">{this.name}</Link>
            </div>
          </div>

    );
  }
}

export default Cards;
