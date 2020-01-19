import React from 'react';
import './Card.css';
import { Link } from "react-router-dom";

const card = (props) => {
  //find first word
  let indexOf = props.name.indexOf(" ");
  let first;
  let rest;

  //If there is more than one word split the name in the first word and the rest.
  if (indexOf >= 0) {
    first = props.name.slice(0, indexOf);
    rest = props.name.slice(indexOf);
  } else {
    first = props.name;
    rest = null;
  }
  
  return (
    <div className="card mb-5 cardwidth">
      <div className="card-body">
        <Link className="linkblack card-link textSize" to={props.refe} >
          <span>{first}</span>
          {rest !== null ? (<br />) : null}
          {rest !== null ? <span>{rest}</span> : null}</Link>
      </div>
    </div>

  );
}

export default card;
