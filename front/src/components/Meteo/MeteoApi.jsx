import React from "react";
import Form from "./FormApi";
import Weather from "./WeatherApi";

class MeteoApi extends React.Component {
  state = {
    HumiSol: undefined,
    TaskValue1: undefined,
    TaskValue2: undefined,

    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const ip = e.target.elements.ip.value;
    const port = e.target.elements.port.value;
    const api_call = await fetch(`http://${ip}:${port}/json`);
    const data = await api_call.json();
    console.log(data);
    if (ip && port) {
      this.setState({
        HumiSol: data.Sensors[0].TaskValues[0].Value,
        TaskValue1: data.Sensors[2].TaskValues[0].Value,
        TaskValue2: data.Sensors[2].TaskValues[1].Value,
        error: ""
      });
    } else {
      this.setState({
        HumiSol: undefined,
        TaskValue1: undefined,
        TaskValue2: undefined,

        error: "Remplir les champs."
      });
    }
  }
  render() {
    return (

      <div className=" dsk-12">

        <div className="flex off-dsk-4 dsk-6">
          <div className="insert_table">
            <h1 id='title' className="txtCenter">Météo</h1>
            <Form getWeather={this.getWeather} />
            <Weather
              humiSol={this.state.HumiSol}
              taskvalue1={this.state.TaskValue1}
              taskvalue2={this.state.TaskValue2}
              error={this.state.error}
            />

          </div>
        </div>
      </div>

    );
  }
};
export default MeteoApi;