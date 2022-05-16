import React from "react";
import Form from "./Form";
import Weather from "./Weather";

//const API_KEY = process.env.API_Key;

const API_KEY = "17b65561cfc18aa602620fce9fc1a13f";

class Meteo extends React.Component {
  state = {
    temperature: undefined,
    speed: undefined,
    pressure: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        speed: data.wind.speed,
        pressure: data.main.pressure,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        speed: undefined,
        pressure: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Remplir les champs."
      });
    }
  }
  render() {
    return (

      <div className=" dsk-12">
        <div className="flex off-dsk-4 dsk-6">
          <div className="insert_table">
            <h1 id='title' className="txtCenter">Météo local</h1>
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              speed={this.state.speed}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
            />

          </div>
        </div>
      </div>
    );
  }
};
export default Meteo;