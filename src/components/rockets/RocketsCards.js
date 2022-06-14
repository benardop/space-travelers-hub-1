import React from 'react';
import '../stylesheets/RocketsCards.css';
import PropTypes from 'prop-types';

function RocketsCards({ rocket }) {
  const {
    rocketId, rocketName, rocketDesc, rocketImg,
  } = rocket;

  const clickHandler = (e) => {
    console.log(e.target.id);
  };

  return (
    <section className="rocketCard">
      <img className="rocketImg" src={rocketImg} alt="" srcSet="" />
      <div className="rocketDesc">
        <h1 className="titleDesc">{rocketName}</h1>
        <p className="paraDesc">{rocketDesc}</p>
        <button className="reserveBtn" type="button" id={rocketId} onClick={clickHandler}>Reserve Rocket</button>
      </div>
    </section>
  );
}

RocketsCards.propTypes = {
  rocket: PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketDesc: PropTypes.string,
    rocketImg: PropTypes.string,
  }).isRequired,
};

export default RocketsCards;
