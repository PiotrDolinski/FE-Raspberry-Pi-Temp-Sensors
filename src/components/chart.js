import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  getChartData = (data) => {
    return {
      labels: data.map((el) => el.time),

      datasets: [
        {
          label: `Temperatura`,
          data: data.map((el) => el.temp),
          backgroundColor: "#ffffff",
        },
      ],
    };
  };

  render() {
    const chartData = this.props.data ? this.getChartData(this.props.data) : {};
    return (
      <div className="chart">
        <Bar
          data={chartData}
          width={50}
          height={450}
          options={{
            legend: {
              display: false,
              position: "right",
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

export default Chart;
