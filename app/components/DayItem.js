import React from 'react';
require('../styles/style.css');

function DayItem(props) {
	return (
    <div className="four wide column">
      <h2 className="ui icon header">
        <i className="wi wi-moonrise"></i>
        <div className="content">{props.dayName}</div>
      </h2>
    </div>
	)
}

export default DayItem;