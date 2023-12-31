import React from "react";

function WeatherInfo({ data }) {
  return (
    <div className="container">
        <div className="top">
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
            </div>
            <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
        </div>

    {data.name !== undefined && (
        <div className="bottom">
            <div className="feels">
                {data.main ? <p className="bold">{data.main.feels_like.toFixed()}ºC</p> : null}
                <p>Sensación térmica</p>
            </div>
            <div className="humidity">
                {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
                <p>Humedad</p>
            </div>
            <div className="wind">
                {data.wind ? <p className="bold">{data.wind.speed.toFixed()} Km/h</p> : null}
                <p>Velocidad del viento</p>
            </div>
        </div>
    )}
    </div>
  );
}

export default WeatherInfo;
