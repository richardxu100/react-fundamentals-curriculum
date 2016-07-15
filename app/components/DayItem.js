import React, { PropTypes } from 'react';
import ReactRouter, { Link } from 'react-router'
require('../styles/style.css');

// <i className={`wi wi-${props.icon}`}></i>
function DayItem(props) {
	return (
    <div className="four wide column">
      <h2 className="ui icon header">
				<Link to={`/detail/${props.dayName}`} key={props.dayName}>	      
  			 <img src={`../images/weather-icons/${props.icon}.svg`} alt="weather icon"/>
        </Link>  
        <div className="content">{props.dayName}</div>
      </h2>
    </div>
	)
}

DayItem.propTypes = {
	dayName: PropTypes.string.isRequired
}

export default DayItem;