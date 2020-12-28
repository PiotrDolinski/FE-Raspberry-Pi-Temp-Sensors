import React from "react";
import ThermWidget from "./components/therm_widget";
import Chart from "./components/chart.js";

const prepareChartData = (res) => {
  return res.map((el) => ({
    temp: el.temp,
    time: el.time,
  }));
};

class App extends React.Component {
  state = {
    chartData: null,

    hideTermWidget: false,
    showChart: false,
    rpi_sensors: [],
    db_data: [
      { sensor_id: "Zewnątrz", temp: 55 },
      { sensor_id: "Wewnątrz", temp: 55 },
    ],

    date: "",
    sensor: "",
  };
  renderChart = () => {
    return (
      <>
        <Chart data={this.state.chartData} />
        <button onClick={() => this.setState({ showChart: false })}>
          Ukryj
        </button>
      </>
    );
  };

  getData = () => {
    console.log("klik");
    if (this.state.date !== "" && this.state.sensor !== "") {
      fetch("http://localhost:2000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: this.state.date,
          sensor: this.state.sensor,
        }),
      })
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            chartData: prepareChartData(res),
            showChart: true,
          })
        );
    }
  };

  handlerDate = (e) => {
    this.setState({ date: e.target.value });
  };

  handlerSensor = (e) => {
    this.setState({ sensor: e.target.value });
  };
  
  componentDidMount() {
 
    /// add live sensor data
   
  }

  render() {
    return (
      <div className="App">
        <section className="head_section">
          <button onClick={this.getData}>SHOW</button>
          <label htmlFor="date">Wybierz datę</label>
          <input onChange={this.handlerDate} type="date" name="" id="date" />
          <label htmlFor="sensors_list">Wybierz pomieszczenie</label>
          <select onChange={this.handlerSensor} id="sensors_list">
            <option disabled selected>
              ---
            </option>
            {this.state.db_data.map((item) => (
              <option value={item.sensor_id}>{item.sensor_id}</option>
            ))}
          </select>
        </section>
        {!this.state.hideTermWidget && (
          <section className="temp_section">
            <ThermWidget
              pickedDate={this.state.date}
              temp_data={this.state.db_data}
            />
          </section>
        )}

        {this.state.showChart && this.renderChart()}
      </div>
    );
  }
}

export default App;
