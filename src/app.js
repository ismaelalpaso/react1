import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./searchBar";
import WeatherInfo from "./weatherInfo";

function App() {
  const [data, setData] = useState({});

  const searchLocation = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4781090b174cfc433ae157c6ed8d4057`;

    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className="app">
      <SearchBar onSearch={searchLocation} />
      <WeatherInfo data={data} />
    </div>
  );
}

export default App;
