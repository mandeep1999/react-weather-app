import React from 'react';

const Weather = ({ item, isLoading }) => {
  return isLoading === true ? (
    item.cod !== '200' ? (
      <h1>Not Found</h1>
    ) : (
      ''
    )
  ) : typeof item.main != 'undefined' ? (
    <div>
      <div className="location-box">
        <div className="location">{item.name}</div>
        <div className="date">{window.Date().slice(3, 15)}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{item.main.temp} °C </div>
        <div className="weather"> {item.weather[0].main}</div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Weather;
