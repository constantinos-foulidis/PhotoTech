import React, { Component } from 'react';
import '../SelectorCards/SelectorCards.css';
import Cards from '../Cards/Cards';
class SelectorCards extends Component {
  render () {
    return (
        <div className="Container">
          <div className="row">
              <div className="col">
              <Cards name="Διαχηρηστής Προγράμματος"/>
              </div>
              <div className="col">
              <Cards name="Εργαστήριο Αιγινίου"/>
              </div>
              <div className="col">
              <Cards name="Γραφειο Θεσσαλονικης"/>
              </div>
          </div>
          <div className="row">
              <div className="col ">
                <Cards name="Πωλητές"/>
              </div>
              <div className="col">
                <Cards name="Φωτογραφίες"/>
              </div>
              <div className="col">
                <Cards name="Πρόγραμμα Αποθήκης"/>
              </div>
          </div>
        </div>
    );
  }
}

export default SelectorCards;
