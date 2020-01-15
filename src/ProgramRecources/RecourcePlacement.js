import React from 'react';
import Cards from '../Cards/Cards';
const Resourceposition = () => {
  return (
    <div className="Container">
      <h2 className="mb-5 text-center">Επιλέξτε Κατηγορία</h2>
      <div className="row justify-content-center">

        <Cards refe="admin_resource" name="Διαχηρηστής Αποθήκης" />


        <Cards refe="simple_user" name="Χρήστης Αποθήκης" />

      </div>
    </div>
  )
};
export default Resourceposition;
