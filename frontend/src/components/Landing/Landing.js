import Traveling from '../../assets/img/traveling.svg';
import Road from '../../assets/img/road.svg';
import Destination from '../../assets/img/destination.svg';
import React from 'react';

import './style.css';

function Landing() {
  return (
      <div className="container-landing">
          <div className="div-infos">
              <img className="img" src={Traveling} alt=""></img>
              <p>
                  Ne plus se soucier de ses vacances et déplacements
              </p>
          </div>
          <div className="div-infos r">
              <img className="img" src={Road} alt=""></img>
              <p>
                  Ne plus se perdre sur la route
              </p>
          </div>
          <div className="div-infos">
              <img className="img" src={Destination} alt=""></img>
              <p>
                  Trouver en deux temps toutes vos informations
              </p>
          </div>
      </div>
  );
}

export default Landing;
