import { useEffect, useState } from 'react';

import { Row, Col, Card } from 'antd';
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

import style from '@/App/pages/Recharts/Recharts.module.css';
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
            "time": 1699028452330,
            "mean": 0
          },
          {
            "time": 1699062321132,
            "mean": 0
          },
          {
            "time": 1699096189934,
            "mean": 0
          },
          {
            "time": 1699130058736,
            "mean": 0
          },
          {
            "time": 1699163927538,
            "mean": 0
          },
          {
            "time": 1699197796340,
            "mean": 0
          },
          {
            "time": 1699231665142,
            "mean": 0
          },
          {
            "time": 1699265533944,
            "mean": 0
          },
          {
            "time": 1699299402746,
            "mean": 0
          },
          {
            "time": 1699333271548,
            "mean": 0
          },
          {
            "time": 1699367140350,
            "mean": 0
          },
          {
            "time": 1699401009152,
            "mean": 0
          },
          {
            "time": 1699434877954,
            "mean": 0
          },
          {
            "time": 1699468746756,
            "mean": 0
          },
          {
            "time": 1699502615558,
            "mean": 0
          },
          {
            "time": 1699536484360,
            "mean": 0
          },
          {
            "time": 1699570353162,
            "mean": 0
          },
          {
            "time": 1699604221964,
            "mean": 0
          },
          {
            "time": 1699638090766,
            "mean": 0
          },
          {
            "time": 1699671959568,
            "mean": 0
          },
          {
            "time": 1699705828370,
            "mean": 0
          },
          {
            "time": 1699739697172,
            "mean": 0
          },
          {
            "time": 1699773565974,
            "mean": 0
          },
          {
            "time": 1699807434776,
            "mean": 0
          },
          {
            "time": 1699841303578,
            "mean": 0
          },
          {
            "time": 1699875172380,
            "mean": 0
          },
          {
            "time": 1699909041182,
            "mean": 0
          },
          {
            "time": 1699942909984,
            "mean": 0
          },
          {
            "time": 1699976778786,
            "mean": 0
          },
          {
            "time": 1700010647588,
            "mean": 0
          },
          {
            "time": 1700044516390,
            "mean": 0
          },
          {
            "time": 1700078385192,
            "mean": 0
          },
          {
            "time": 1700112253994,
            "mean": 0
          },
          {
            "time": 1700146122796,
            "mean": 0
          },
          {
            "time": 1700179991598,
            "mean": 0
          },
          {
            "time": 1700213860400,
            "mean": 0
          },
          {
            "time": 1700247729202,
            "mean": 0
          },
          {
            "time": 1700281598004,
            "mean": 0
          },
          {
            "time": 1700315466806,
            "mean": 0
          },
          {
            "time": 1700349335608,
            "mean": 0
          },
          {
            "time": 1700383204410,
            "mean": 0
          },
          {
            "time": 1700417073212,
            "mean": 0
          },
          {
            "time": 1700450942014,
            "mean": 0
          },
          {
            "time": 1700484810816,
            "mean": 0
          },
          {
            "time": 1700518679618,
            "mean": 0
          },
          {
            "time": 1700552548420,
            "mean": 0
          },
          {
            "time": 1700586417222,
            "mean": 0
          },
          {
            "time": 1700620286024,
            "mean": 0
          },
          {
            "time": 1700654154826,
            "mean": 0
          },
          {
            "time": 1700688023628,
            "mean": 0
          },
          {
            "time": 1700721892430,
            "mean": 0
          },
          {
            "time": 1700755761232,
            "mean": 0
          },
          {
            "time": 1700789630034,
            "mean": 0
          },
          {
            "time": 1700823498836,
            "mean": 0
          },
          {
            "time": 1700857367638,
            "mean": 0
          },
          {
            "time": 1700891236440,
            "mean": 0
          },
          {
            "time": 1700925105242,
            "mean": 0
          },
          {
            "time": 1700958974044,
            "mean": 0
          },
          {
            "time": 1700992842846,
            "mean": 0
          },
          {
            "time": 1701026711648,
            "mean": 0
          },
          {
            "time": 1701060580450,
            "mean": 0
          },
          {
            "time": 1701094449252,
            "mean": 0
          },
          {
            "time": 1701128318054,
            "mean": 0
          },
          {
            "time": 1701162186856,
            "mean": 0
          },
          {
            "time": 1701196055658,
            "mean": 0
          },
          {
            "time": 1701229924460,
            "mean": 0.008745834762733268
          },
          {
            "time": 1701263793262,
            "mean": 0.018067535160042118
          },
          {
            "time": 1701297662064,
            "mean": 0.018741043689951203
          },
          {
            "time": 1701331530866,
            "mean": 0.017446011608023664
          },
          {
            "time": 1701365399668,
            "mean": 0
          },
          {
            "time": 1701399268470,
            "mean": 0.03640409286623668
          },
          {
            "time": 1701433137272,
            "mean": 0.04597913420593562
          },
          {
            "time": 1701467006074,
            "mean": 0.030470775122937024
          },
          {
            "time": 1701500874876,
            "mean": 0.02763693888866423
          },
          {
            "time": 1701534743678,
            "mean": 0.027699293253715736
          },
          {
            "time": 1701568612480,
            "mean": 0.02698310899508663
          },
          {
            "time": 1701602481282,
            "mean": 0.025696996633003375
          },
          {
            "time": 1701636350084,
            "mean": 0.025922977790821432
          },
          {
            "time": 1701670218886,
            "mean": 0
          },
          {
            "time": 1701704087688,
            "mean": 0
          },
          {
            "time": 1701737956490,
            "mean": 0
          },
          {
            "time": 1701771825292,
            "mean": 0
          },
          {
            "time": 1701805694094,
            "mean": 0
          },
          {
            "time": 1701839562896,
            "mean": 0
          },
          {
            "time": 1701873431698,
            "mean": 0
          },
          {
            "time": 1701907300500,
            "mean": 0
          },
          {
            "time": 1701941169302,
            "mean": 0
          },
          {
            "time": 1701975038104,
            "mean": 0
          },
          {
            "time": 1702008906906,
            "mean": 0.0010833464370979845
          },
          {
            "time": 1702042775708,
            "mean": 0.002455062852588911
          },
          {
            "time": 1702076644510,
            "mean": 0
          },
          {
            "time": 1702110513312,
            "mean": 0
          },
          {
            "time": 1702144382114,
            "mean": 0
          },
          {
            "time": 1702178250916,
            "mean": 0
          },
          {
            "time": 1702212119718,
            "mean": 0
          },
          {
            "time": 1702245988520,
            "mean": 0
          },
          {
            "time": 1702279857322,
            "mean": 0.017452683657446785
          },
          {
            "time": 1702313726124,
            "mean": 0
          },
          {
            "time": 1702347594926,
            "mean": 0.013799145293906512
          },
          {
            "time": 1702381463728,
            "mean": 0
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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className={style.chart__tooltip}>
          <div className="label">Время: {`${format(payload[0].payload.time, 'HH:mm:ss')}`}</div>
          <div className="label">Скорость: {`${payload[0].payload.mean.toFixed(2)}`}</div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="container">
      <ResponsiveContainer width={500} height={300}>
        <LineChart data={chartData.data} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
          <XAxis
            type="number"
            dataKey="time"
            domain={['dataMin', 'dataMax']}
            tickFormatter={unixTime => format(new Date(unixTime), 'HH:mm:ss')}
          >
          </XAxis>
          <Tooltip
            content={<CustomTooltip payload={chartData.data} />}
          />
          <YAxis type="number" domain={[0, 'auto']}/>

          <Line dataKey="mean" name="Packets" type={'natural'} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TestHypothesis;
