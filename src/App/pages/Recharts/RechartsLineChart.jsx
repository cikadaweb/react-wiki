import { useEffect, useState } from 'react';

import { format } from 'date-fns';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Line,
} from 'recharts';
import { log } from '@/utils/log';


const TestHypothesis = () => {
  const [chartData, setChartData] = useState({ data: [] });

  useEffect(() => {
    generateChartData();
  }, []);

  useEffect(() => {
    log('chartData: ', chartData.data);
  }, [chartData]);

  const generateChartData = () => {
    //     const response = {
    //       '*': {
    //         entries: [
    //           {
    //             "time": 1701237620898,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701237837276,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701238053654,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701238270032,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701238486410,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701238702788,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701238919166,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701239135544,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701239351922,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701239568300,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701239784678,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701240001056,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701240217434,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701240433812,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701240650190,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701240866568,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701241082946,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701241299324,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701241515702,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701241732080,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701241948458,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701242164836,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701242381214,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701242597592,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701242813970,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701243030348,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701243246726,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701243463104,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701243679482,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701243895860,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701244112238,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701244328616,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701244544994,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701244761372,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701244977750,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701245194128,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701245410506,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701245626884,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701245843262,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701246059640,
    //             "mean": null
    //         },
    //         {
    //             "time": 1701246276018,
    //             "mean": 4626.809523809524
    //         },
    //         {
    //             "time": 1701246492396,
    //             "mean": 39845.07407407407
    //         },
    //         {
    //             "time": 1701246708774,
    //             "mean": 47134.77777777778
    //         },
    //         {
    //             "time": 1701246925152,
    //             "mean": 52790.40740740741
    //         },
    //         {
    //             "time": 1701247141530,
    //             "mean": 60257.666666666664
    //         },
    //         {
    //             "time": 1701247357908,
    //             "mean": 66486.51851851853
    //         },
    //         {
    //             "time": 1701247574286,
    //             "mean": 73009.48148148147
    //         },
    //         {
    //             "time": 1701247790664,
    //             "mean": 80921.44444444444
    //         },
    //         {
    //             "time": 1701248007042,
    //             "mean": 90858.07407407407
    //         },
    //         {
    //             "time": 1701248223420,
    //             "mean": 96991.96296296296
    //         },
    //         {
    //             "time": 1701248439798,
    //             "mean": 100924.96296296296
    //         },
    //         {
    //             "time": 1701248656176,
    //             "mean": 104701.70370370371
    //         },
    //         {
    //             "time": 1701248872554,
    //             "mean": 109437.18518518518
    //         },
    //         {
    //             "time": 1701249088932,
    //             "mean": 114857.96428571429
    //         },
    //         {
    //             "time": 1701249305310,
    //             "mean": 121798.85185185185
    //         },
    //         {
    //             "time": 1701249521688,
    //             "mean": 136781.2962962963
    //         },
    //         {
    //             "time": 1701249738066,
    //             "mean": 142219.92592592593
    //         },
    //         {
    //             "time": 1701249954444,
    //             "mean": 147063.14814814815
    //         },
    //         {
    //             "time": 1701250170822,
    //             "mean": 151704.62962962964
    //         },
    //         {
    //             "time": 1701250387200,
    //             "mean": 155666.0
    //         },
    //         {
    //             "time": 1701250603578,
    //             "mean": 161945.0
    //         },
    //         {
    //             "time": 1701250819956,
    //             "mean": 169247.77777777778
    //         },
    //         {
    //             "time": 1701251036334,
    //             "mean": 173560.8148148148
    //         },
    //         {
    //             "time": 1701251252712,
    //             "mean": 177794.7037037037
    //         },
    //         {
    //             "time": 1701251469090,
    //             "mean": 182033.0
    //         },
    //         {
    //             "time": 1701251685468,
    //             "mean": 186122.25925925927
    //         },
    //         {
    //             "time": 1701251901846,
    //             "mean": 191287.25925925927
    //         },
    //         {
    //             "time": 1701252118224,
    //             "mean": 198321.03703703705
    //         },
    //         {
    //             "time": 1701252334602,
    //             "mean": 203834.96296296295
    //         },
    //         {
    //             "time": 1701252550980,
    //             "mean": 213514.37037037036
    //         },
    //         {
    //             "time": 1701252767358,
    //             "mean": 229987.0
    //         },
    //         {
    //             "time": 1701252983736,
    //             "mean": 239508.66666666666
    //         },
    //         {
    //             "time": 1701253200114,
    //             "mean": 247419.66666666666
    //         },
    //         {
    //             "time": 1701253416492,
    //             "mean": 255074.77777777778
    //         },
    //         {
    //             "time": 1701253632870,
    //             "mean": 262785.51851851854
    //         },
    //         {
    //             "time": 1701253849248,
    //             "mean": 270178.48148148146
    //         },
    //         {
    //             "time": 1701254065626,
    //             "mean": 277621.10714285716
    //         },
    //         {
    //             "time": 1701254282004,
    //             "mean": 284859.22222222225
    //         },
    //         {
    //             "time": 1701254498382,
    //             "mean": 294378.55555555556
    //         },
    //         {
    //             "time": 1701254714760,
    //             "mean": 303827.81481481483
    //         },
    //         {
    //             "time": 1701254931138,
    //             "mean": 312569.44444444444
    //         },
    //         {
    //             "time": 1701255147516,
    //             "mean": 321282.77777777775
    //         },
    //         {
    //             "time": 1701255363894,
    //             "mean": 328074.74074074073
    //         },
    //         {
    //             "time": 1701255580272,
    //             "mean": 333955.3333333333
    //         },
    //         {
    //             "time": 1701255796650,
    //             "mean": 338900.0740740741
    //         },
    //         {
    //             "time": 1701256013028,
    //             "mean": 344544.037037037
    //         },
    //         {
    //             "time": 1701256229406,
    //             "mean": 350747.037037037
    //         },
    //         {
    //             "time": 1701256445784,
    //             "mean": 356834.14814814815
    //         },
    //         {
    //             "time": 1701256662162,
    //             "mean": 362640.5925925926
    //         },
    //         {
    //             "time": 1701256878540,
    //             "mean": 368395.6666666667
    //         },
    //         {
    //             "time": 1701257094918,
    //             "mean": 375056.3703703704
    //         },
    //         {
    //             "time": 1701257311296,
    //             "mean": 379981.6666666667
    //         },
    //         {
    //             "time": 1701257527674,
    //             "mean": 384904.44444444444
    //         },
    //         {
    //             "time": 1701257744052,
    //             "mean": 390131.81481481483
    //         },
    //         {
    //             "time": 1701257960430,
    //             "mean": 395470.2962962963
    //         },
    //         {
    //             "time": 1701258176808,
    //             "mean": 400463.77777777775
    //         },
    //         {
    //             "time": 1701258393186,
    //             "mean": 405223.25925925927
    //         },
    //         {
    //             "time": 1701258609564,
    //             "mean": 410029.3333333333
    //         },
    //         {
    //             "time": 1701258825942,
    //             "mean": 415241.037037037
    //         },
    //         {
    //             "time": 1701259042320,
    //             "mean": 420852.39285714284
    //         },
    //         {
    //             "time": 1701259258698,
    //             "mean": 426492.0
    //         }
    //         ]
    //     }
    //   };

    const response = {
      "*": {
        "entries": [
          {
            "time": 1699259638104,
            "mean": null
          },
          {
            "time": 1699285558838,
            "mean": null
          },
          {
            "time": 1699311479572,
            "mean": null
          },
          {
            "time": 1699337400306,
            "mean": null
          },
          {
            "time": 1699363321040,
            "mean": null
          },
          {
            "time": 1699389241774,
            "mean": null
          },
          {
            "time": 1699415162508,
            "mean": null
          },
          {
            "time": 1699441083242,
            "mean": null
          },
          {
            "time": 1699467003976,
            "mean": null
          },
          {
            "time": 1699492924710,
            "mean": null
          },
          {
            "time": 1699518845444,
            "mean": null
          },
          {
            "time": 1699544766178,
            "mean": null
          },
          {
            "time": 1699570686912,
            "mean": null
          },
          {
            "time": 1699596607646,
            "mean": null
          },
          {
            "time": 1699622528380,
            "mean": null
          },
          {
            "time": 1699648449114,
            "mean": null
          },
          {
            "time": 1699674369848,
            "mean": null
          },
          {
            "time": 1699700290582,
            "mean": null
          },
          {
            "time": 1699726211316,
            "mean": null
          },
          {
            "time": 1699752132050,
            "mean": null
          },
          {
            "time": 1699778052784,
            "mean": null
          },
          {
            "time": 1699803973518,
            "mean": null
          },
          {
            "time": 1699829894252,
            "mean": null
          },
          {
            "time": 1699855814986,
            "mean": null
          },
          {
            "time": 1699881735720,
            "mean": null
          },
          {
            "time": 1699907656454,
            "mean": null
          },
          {
            "time": 1699933577188,
            "mean": null
          },
          {
            "time": 1699959497922,
            "mean": null
          },
          {
            "time": 1699985418656,
            "mean": null
          },
          {
            "time": 1700011339390,
            "mean": null
          },
          {
            "time": 1700037260124,
            "mean": null
          },
          {
            "time": 1700063180858,
            "mean": null
          },
          {
            "time": 1700089101592,
            "mean": null
          },
          {
            "time": 1700115022326,
            "mean": null
          },
          {
            "time": 1700140943060,
            "mean": null
          },
          {
            "time": 1700166863794,
            "mean": null
          },
          {
            "time": 1700192784528,
            "mean": null
          },
          {
            "time": 1700218705262,
            "mean": null
          },
          {
            "time": 1700244625996,
            "mean": null
          },
          {
            "time": 1700270546730,
            "mean": null
          },
          {
            "time": 1700296467464,
            "mean": null
          },
          {
            "time": 1700322388198,
            "mean": null
          },
          {
            "time": 1700348308932,
            "mean": null
          },
          {
            "time": 1700374229666,
            "mean": null
          },
          {
            "time": 1700400150400,
            "mean": null
          },
          {
            "time": 1700426071134,
            "mean": null
          },
          {
            "time": 1700451991868,
            "mean": null
          },
          {
            "time": 1700477912602,
            "mean": null
          },
          {
            "time": 1700503833336,
            "mean": null
          },
          {
            "time": 1700529754070,
            "mean": null
          },
          {
            "time": 1700555674804,
            "mean": null
          },
          {
            "time": 1700581595538,
            "mean": null
          },
          {
            "time": 1700607516272,
            "mean": null
          },
          {
            "time": 1700633437006,
            "mean": null
          },
          {
            "time": 1700659357740,
            "mean": null
          },
          {
            "time": 1700685278474,
            "mean": null
          },
          {
            "time": 1700711199208,
            "mean": null
          },
          {
            "time": 1700737119942,
            "mean": null
          },
          {
            "time": 1700763040676,
            "mean": null
          },
          {
            "time": 1700788961410,
            "mean": null
          },
          {
            "time": 1700814882144,
            "mean": null
          },
          {
            "time": 1700840802878,
            "mean": null
          },
          {
            "time": 1700866723612,
            "mean": null
          },
          {
            "time": 1700892644346,
            "mean": null
          },
          {
            "time": 1700918565080,
            "mean": null
          },
          {
            "time": 1700944485814,
            "mean": null
          },
          {
            "time": 1700970406548,
            "mean": null
          },
          {
            "time": 1700996327282,
            "mean": null
          },
          {
            "time": 1701022248016,
            "mean": null
          },
          {
            "time": 1701048168750,
            "mean": null
          },
          {
            "time": 1701074089484,
            "mean": null
          },
          {
            "time": 1701100010218,
            "mean": null
          },
          {
            "time": 1701125930952,
            "mean": null
          },
          {
            "time": 1701151851686,
            "mean": null
          },
          {
            "time": 1701177772420,
            "mean": null
          },
          {
            "time": 1701203693154,
            "mean": null
          },
          {
            "time": 1701229613888,
            "mean": 171791.9713292789
          },
          {
            "time": 1701255534622,
            "mean": 653680.9175925925
          },
          {
            "time": 1701281455356,
            "mean": 1163342.9351651745
          },
          {
            "time": 1701307376090,
            "mean": 1658674.6706790123
          },
          {
            "time": 1701333296824,
            "mean": 2159183.2580645164
          },
          {
            "time": 1701359217558,
            "mean": null
          },
          {
            "time": 1701385138292,
            "mean": null
          },
          {
            "time": 1701411059026,
            "mean": 1350563.3485873458
          },
          {
            "time": 1701436979760,
            "mean": 2848748.3543209876
          },
          {
            "time": 1701462900494,
            "mean": 3599789.142901235
          },
          {
            "time": 1701488821228,
            "mean": 4315039.656992899
          },
          {
            "time": 1701514741962,
            "mean": 5032063.78425926
          },
          {
            "time": 1701540662696,
            "mean": 5750292.351234568
          },
          {
            "time": 1701566583430,
            "mean": 6455837.926520531
          },
          {
            "time": 1701592504164,
            "mean": 7120894.195679013
          },
          {
            "time": 1701618424898,
            "mean": 7790646.062962963
          },
          {
            "time": 1701644345632,
            "mean": 8462764.23464032
          },
          {
            "time": 1701670266366,
            "mean": 1271430.5177590626
          },
          {
            "time": 1701696187100,
            "mean": null
          },
          {
            "time": 1701722107834,
            "mean": null
          },
          {
            "time": 1701748028568,
            "mean": null
          },
          {
            "time": 1701773949302,
            "mean": null
          },
          {
            "time": 1701799870036,
            "mean": null
          },
          {
            "time": 1701825790770,
            "mean": null
          },
          {
            "time": 1701851711504,
            "mean": null
          }
        ]
      },
      "from_date": 1699277186378,
      "interval": 25920735
    };

    const { entries } = response['*'];

    log('entries: ', entries);

    log('response.interval: ', response.interval);

    const gdata = [];
    const newInterval = response.interval;

    if (entries && entries.length > 1) {
      for (let i = 1; i < entries.length; i++) {
        gdata.push({
          time: entries[i]['time'],
          mean: Math.max((entries[i]['mean'] - entries[i - 1]['mean']) / newInterval, 0)
        });
      }
    });

    setChartData({ data: gdata });
    };

  return (
    <div className="container">
      {/* <Row gutter={[8, 8]}>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}
                bordered={true}
                size={'small'}
              >
                <div>
                  0 правил
                </div>
              </Card>
            </Col>

            <Col span={12}>
              <Card
                title="Эврестический анализ"
                className={style.dashboard__card}
              >
                <div>
                  0 правил
                </div>
              </Card>
            </Col>

            <Col span={12}>
              <Card
                title="Трафик пакетов"
                className={style.dashboard__card}
              >
                <ResponsiveContainer width={250} height={200}>
                  <LineChart data={chartData.data} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
                    <CartesianGrid />
                    <XAxis
                      type="number"
                      dataKey="time"
                      domain={['dataMin', 'dataMax']}
                      tickFormatter={unixTime => format(new Date(unixTime), 'HH:mm:ss')}
                    >
                      <Label value={'Time'} position="bottom" style={{ textAnchor: 'middle' }} />
                    </XAxis>
                    <YAxis>
                      <Label value={'Packets'} position="left" angle={-90} style={{ textAnchor: 'middle' }} />
                    </YAxis>
                    <Tooltip />
                    <Line dataKey="mean" name="Packets" type={'natural'} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </Col>

            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}
              >
                <div>
                  Непринятые пакеты
                </div>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}
              >
                <div>
                  Непринятые пакеты
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}
              >
                <div>
                  Непринятые пакеты
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}
              >
                <div>
                  Непринятые пакеты
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}
              >
                <div>
                  Непринятые пакеты
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row> */}
      <ResponsiveContainer width={500} height={300}>
        <LineChart data={chartData.data} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="time"
            domain={['dataMin', 'dataMax']}
            tickFormatter={unixTime => format(new Date(unixTime), 'HH:mm:ss')}
          >
            <Label value={'Time'} position="bottom" style={{ textAnchor: 'middle' }} />
          </XAxis>
          <YAxis>
            <Label value={'Packets'} position="left" angle={-90} style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip />
          <Line dataKey="mean" name="Packets" type={'natural'} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TestHypothesis;
