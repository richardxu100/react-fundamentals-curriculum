import React, { PropTypes } from 'react';
import ReactRouter, { Link } from 'react-router'
require('../styles/style.css');

function DayItem(props) {
	return (
    <div className="four wide column">
      <h2 className="ui icon header">
				<Link to={`/detail/${props.dayName}`} key={props.dayName}>	      
        	<i className="wi wi-moonrise"></i>
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