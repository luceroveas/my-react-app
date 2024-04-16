import React from "react";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay-nextgen";

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
  return (
    <LoadingOverlay active={true} spinner text="wait a second...">
      <p>Some content or children or something.</p>
    </LoadingOverlay>
  );
}
