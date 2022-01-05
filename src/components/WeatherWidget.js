/**
 * Simple weather widget component.
 * Uses OpenWeather current weather API: https://openweathermap.org/current
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

/**
 *
 * @param {string} cityId City ID to get weather at that location.
 *                        List of city IDs: http://bulk.openweathermap.org/sample/
 */
const WeatherWidget = ({ cityId }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async reqConfig => {
    const resp = await axios(reqConfig);

    setWeatherData(resp.data);
  };

  useEffect(() => {
    const endpoint = "https://api.openweathermap.org/data/2.5/weather";

    fetchWeather({
      method: "get",
      url: endpoint,
      params: {
        id: cityId,
        units: "imperial",
        appid: process.env.GATSBY_WEATHER_API_KEY,
      },
    });
  }, [cityId]);

  return (
    weatherData !== null && (
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          className="d-inline"
          alt="weather icon"
        ></img>
        <b>{weatherData.main.temp}&deg;F</b>{" "}
        {weatherData.weather[0].description}
      </div>
    )
  );
};

WeatherWidget.propTypes = {
  cityId: PropTypes.number.isRequired,
};

export default WeatherWidget;
