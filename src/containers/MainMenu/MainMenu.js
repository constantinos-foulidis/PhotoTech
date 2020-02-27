import React, { Component } from "react";
import "./MainMenu.css";
import Cards from "../../components/Card/Card";

class MainMenu extends Component {
  render() {
    return (
      <div className="Container ">
        <h2 className="mb-5 text-center">Επιλέξτε Κατηγορία</h2>
        <div className="row justify-content-center">
          <div className="col">
            <Cards refe="/admin" name="Διαχειριστής Προγράμματος" />
          </div>
          <div className="col">
            <Cards refe="/lab" name="Εργαστήριο Αιγινίου" />
          </div>
          <div className="col">
            <Cards refe="/office" name="Γραφείο Θεσσαλονικης" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col ">
            <Cards refe="/sellers" name="Πωλητές" />
          </div>
          <div className="col">
            <Cards refe="/photo" name="Φωτογραφίες" />
          </div>
          <div className="col">
            <Cards refe="/recource" name="Πρόγραμμα Αποθήκης" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
