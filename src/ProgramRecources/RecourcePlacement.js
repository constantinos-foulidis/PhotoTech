import React from 'react';
import Cards from '../Cards/Cards';
const Resourceposition = () => {
    return   (
      <div className="Container">
        <h2 className="mb-5">Επιλέξτε Κατηγορία</h2>
        <div className="row justify-content-center">
            <div className="col-3 ">
            <Cards refe="admin_resource" name="Διαχηρηστής Αποθήκης"/>
            </div>
            <div className="col-3 ">
            <Cards refe="simple_user" name="Χρήστης Αποθήκης"/>
            </div>
        </div>
      </div>
 )
};
export default Resourceposition;
