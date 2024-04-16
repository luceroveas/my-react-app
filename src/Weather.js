import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in  ${response.data.name} is ${response.data.main.temp} C `
    );
  }
  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return <h1> Helloworld from weather.js</h1>;
}
