import React, { Component } from 'react';

import { Row, Col } from 'antd';
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

    const response = {
      '*': {
        entries: [
          {
            "time": 1701237620898,
            "mean": null
        },
        {
            "time": 1701237837276,
            "mean": null
        },
        {
            "time": 1701238053654,
            "mean": null
        },
        {
            "time": 1701238270032,
            "mean": null
        },
        {
            "time": 1701238486410,
            "mean": null
        },
        {
            "time": 1701238702788,
            "mean": null
        },
        {
            "time": 1701238919166,
            "mean": null
        },
        {
            "time": 1701239135544,
            "mean": null
        },
        {
            "time": 1701239351922,
            "mean": null
        },
        {
            "time": 1701239568300,
            "mean": null
        },
        {
            "time": 1701239784678,
            "mean": null
        },
        {
            "time": 1701240001056,
            "mean": null
        },
        {
            "time": 1701240217434,
            "mean": null
        },
        {
            "time": 1701240433812,
            "mean": null
        },
        {
            "time": 1701240650190,
            "mean": null
        },
        {
            "time": 1701240866568,
            "mean": null
        },
        {
            "time": 1701241082946,
            "mean": null
        },
        {
            "time": 1701241299324,
            "mean": null
        },
        {
            "time": 1701241515702,
            "mean": null
        },
        {
            "time": 1701241732080,
            "mean": null
        },
        {
            "time": 1701241948458,
            "mean": null
        },
        {
            "time": 1701242164836,
            "mean": null
        },
        {
            "time": 1701242381214,
            "mean": null
        },
        {
            "time": 1701242597592,
            "mean": null
        },
        {
            "time": 1701242813970,
            "mean": null
        },
        {
            "time": 1701243030348,
            "mean": null
        },
        {
            "time": 1701243246726,
            "mean": null
        },
        {
            "time": 1701243463104,
            "mean": null
        },
        {
            "time": 1701243679482,
            "mean": null
        },
        {
            "time": 1701243895860,
            "mean": null
        },
        {
            "time": 1701244112238,
            "mean": null
        },
        {
            "time": 1701244328616,
            "mean": null
        },
        {
            "time": 1701244544994,
            "mean": null
        },
        {
            "time": 1701244761372,
            "mean": null
        },
        {
            "time": 1701244977750,
            "mean": null
        },
        {
            "time": 1701245194128,
            "mean": null
        },
        {
            "time": 1701245410506,
            "mean": null
        },
        {
            "time": 1701245626884,
            "mean": null
        },
        {
            "time": 1701245843262,
            "mean": null
        },
        {
            "time": 1701246059640,
            "mean": null
        },
        {
            "time": 1701246276018,
            "mean": 4626.809523809524
        },
        {
            "time": 1701246492396,
            "mean": 39845.07407407407
        },
        {
            "time": 1701246708774,
            "mean": 47134.77777777778
        },
        {
            "time": 1701246925152,
            "mean": 52790.40740740741
        },
        {
            "time": 1701247141530,
            "mean": 60257.666666666664
        },
        {
            "time": 1701247357908,
            "mean": 66486.51851851853
        },
        {
            "time": 1701247574286,
            "mean": 73009.48148148147
        },
        {
            "time": 1701247790664,
            "mean": 80921.44444444444
        },
        {
            "time": 1701248007042,
            "mean": 90858.07407407407
        },
        {
            "time": 1701248223420,
            "mean": 96991.96296296296
        },
        {
            "time": 1701248439798,
            "mean": 100924.96296296296
        },
        {
            "time": 1701248656176,
            "mean": 104701.70370370371
        },
        {
            "time": 1701248872554,
            "mean": 109437.18518518518
        },
        {
            "time": 1701249088932,
            "mean": 114857.96428571429
        },
        {
            "time": 1701249305310,
            "mean": 121798.85185185185
        },
        {
            "time": 1701249521688,
            "mean": 136781.2962962963
        },
        {
            "time": 1701249738066,
            "mean": 142219.92592592593
        },
        {
            "time": 1701249954444,
            "mean": 147063.14814814815
        },
        {
            "time": 1701250170822,
            "mean": 151704.62962962964
        },
        {
            "time": 1701250387200,
            "mean": 155666.0
        },
        {
            "time": 1701250603578,
            "mean": 161945.0
        },
        {
            "time": 1701250819956,
            "mean": 169247.77777777778
        },
        {
            "time": 1701251036334,
            "mean": 173560.8148148148
        },
        {
            "time": 1701251252712,
            "mean": 177794.7037037037
        },
        {
            "time": 1701251469090,
            "mean": 182033.0
        },
        {
            "time": 1701251685468,
            "mean": 186122.25925925927
        },
        {
            "time": 1701251901846,
            "mean": 191287.25925925927
        },
        {
            "time": 1701252118224,
            "mean": 198321.03703703705
        },
        {
            "time": 1701252334602,
            "mean": 203834.96296296295
        },
        {
            "time": 1701252550980,
            "mean": 213514.37037037036
        },
        {
            "time": 1701252767358,
            "mean": 229987.0
        },
        {
            "time": 1701252983736,
            "mean": 239508.66666666666
        },
        {
            "time": 1701253200114,
            "mean": 247419.66666666666
        },
        {
            "time": 1701253416492,
            "mean": 255074.77777777778
        },
        {
            "time": 1701253632870,
            "mean": 262785.51851851854
        },
        {
            "time": 1701253849248,
            "mean": 270178.48148148146
        },
        {
            "time": 1701254065626,
            "mean": 277621.10714285716
        },
        {
            "time": 1701254282004,
            "mean": 284859.22222222225
        },
        {
            "time": 1701254498382,
            "mean": 294378.55555555556
        },
        {
            "time": 1701254714760,
            "mean": 303827.81481481483
        },
        {
            "time": 1701254931138,
            "mean": 312569.44444444444
        },
        {
            "time": 1701255147516,
            "mean": 321282.77777777775
        },
        {
            "time": 1701255363894,
            "mean": 328074.74074074073
        },
        {
            "time": 1701255580272,
            "mean": 333955.3333333333
        },
        {
            "time": 1701255796650,
            "mean": 338900.0740740741
        },
        {
            "time": 1701256013028,
            "mean": 344544.037037037
        },
        {
            "time": 1701256229406,
            "mean": 350747.037037037
        },
        {
            "time": 1701256445784,
            "mean": 356834.14814814815
        },
        {
            "time": 1701256662162,
            "mean": 362640.5925925926
        },
        {
            "time": 1701256878540,
            "mean": 368395.6666666667
        },
        {
            "time": 1701257094918,
            "mean": 375056.3703703704
        },
        {
            "time": 1701257311296,
            "mean": 379981.6666666667
        },
        {
            "time": 1701257527674,
            "mean": 384904.44444444444
        },
        {
            "time": 1701257744052,
            "mean": 390131.81481481483
        },
        {
            "time": 1701257960430,
            "mean": 395470.2962962963
        },
        {
            "time": 1701258176808,
            "mean": 400463.77777777775
        },
        {
            "time": 1701258393186,
            "mean": 405223.25925925927
        },
        {
            "time": 1701258609564,
            "mean": 410029.3333333333
        },
        {
            "time": 1701258825942,
            "mean": 415241.037037037
        },
        {
            "time": 1701259042320,
            "mean": 420852.39285714284
        },
        {
            "time": 1701259258698,
            "mean": 426492.0
        }
        ]
    }
  };

    const { entries } = response['*'];
    const gdata = [];
    const interval = 1000;
  
    if (entries && entries.length > 1) {
      for (let i = 1; i < entries.length; i++) {
        gdata.push({
          time: entries[i]['time'],
          mean: Math.max((entries[i]['mean'] - entries[i - 1]['mean']) / interval, 0)
        });
      }
    }
  
    this.setState({ data: gdata });
  };
  

  componentDidMount() {
    this.generateChartData();
  }

  render() {

    return (
      <div className="container">
        <Row>
            <Col span={12}>
                <Row>
                    <Col span={12}>
                    <ResponsiveContainer width={250} height={200}>
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
                        dot={false}
                    />
                    </LineChart>
                    </ResponsiveContainer>
                </Col>
                <Col span={12}>
                    Здесь какое-то содержимое
                </Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={12}>
                    Здесь какое-то содержимое
                    </Col>
                    <Col span={12}>
                        Здесь какое-то содержимое
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Test;
