import React, { Component } from 'react';
import '../SelectorCards/SelectorCards.css';
import Cards from '../Cards/Cards';
import Resourceposition from '../ProgramRecources/RecourcePlacement'
import { Route, Link } from 'react-router-dom';

class SelectorCards extends Component {
  render () {
    return (

        <div className="Container">
          <div className="row">
              <div className="col">
              <Cards refe="admin" name="Διαχηρηστής Προγράμματος"/>
              </div>
              <div className="col">
              <Cards refe="lab" name="Εργαστήριο Αιγινίου"/>
              </div>
              <div className="col">
              <Cards refe="office" name="Γραφειο Θεσσαλονικης"/>
              </div>
          </div>
          <div className="row">
              <div className="col ">
                <Cards refe="sellers" name="Πωλητές"/>
              </div>
              <div className="col">
                <Cards refe="photo" name="Φωτογραφίες"/>
              </div>
              <div className="col">
                <Cards refe="recource" name="Πρόγραμμα Αποθήκης"/>
              </div>
          </div>
        </div>

    );
  }
}

export default SelectorCards;
