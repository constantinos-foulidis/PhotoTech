import React, { Component } from 'react';
import '../Cards/Cards.css';


class Cards extends Component {
  constructor(props){
    super();
    this.name = props.name;
    this.ref  = props.ref;
  }
  render () {
    return (
          <div className="card mb-5 cardwidth">
            <div className="card-body">
             <a href="{this.ref}" className="card-link textSize">{this.name}</a>
            </div>
          </div>
    );
  }
}

export default Cards;
