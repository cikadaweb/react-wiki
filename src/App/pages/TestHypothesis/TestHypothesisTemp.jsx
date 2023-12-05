import React, { Component } from 'react';

import { format } from 'date-fns';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Line
} from "recharts";



class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  generateChartData = () => {
    const baseTime = 1701250819956;
    const additionalElementsCount = 100;
    const maxMeanValue = 169247;
  
    const data = [];
  
    for (let i = 0; i < additionalElementsCount; i++) {
      const newTime = baseTime + i * 216378;
      const newMean = Math.random() * maxMeanValue;
  
      data.push({
        time: newTime,
        mean: newMean,
      });
    }
  
    this.setState({ data });
  };
  

  componentDidMount() {
    this.generateChartData();
  }

  render() {

    return (
      <div className="container">
        <ResponsiveContainer width={"100%"} height={400}>
        <LineChart 
          data={this.state.data}
          margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        >
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="time"
            domain={["dataMin", "dataMax"]}
            tickFormatter={(unixTime) => format(new Date(unixTime), 'HH:mm:ss')}
          >
            <Label
              value={"Time"}
              position="bottom"
              style={{ textAnchor: "middle" }}
            />
          </XAxis>
          <YAxis>
            <Label
              value={"Packets"}
              position="left"
              angle={-90}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          <Line
            dataKey="mean"
            name="Packets"
            type={"natural"}
          />
        </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Test;
