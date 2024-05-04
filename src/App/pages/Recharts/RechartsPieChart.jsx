import { useEffect, useState } from 'react';

import { Row, Col, Card } from 'antd';
import { Tooltip, PieChart, Pie, Cell } from 'recharts';

import style from '@/App/pages/Recharts/Recharts.module.css';
import { log } from '@/utils/log';

const TestHypothesis = () => {
  const [chartData, setChartData] = useState([]);

  const [fsChartData, setFsChartData] = useState({
    total_in_bytes: 0,
    free_in_bytes: 0,
    available_in_bytes: 0,
  });

  useEffect(() => {
    generateChartData();
  }, []);

  // useEffect(() => {
  //     log('chartData: ', chartData.data);
  // }, [chartData]);

  const bytesToGB = (bytes) => {
    const GB = Math.pow(1024, 3);
    const resultInGB = bytes / GB;
    return Math.round(resultInGB);
  };

  const generateChartData = () => {
    // const data = {
    //   _nodes: {
    //     total: 1,
    //     successful: 1,
    //     failed: 0,
    //   },
    //   cluster_name: 'opensearch',
    //   cluster_uuid: '9RYq3uBXTwiptHPIaAe-4Q',
    //   timestamp: 1702281276061,
    //   status: 'yellow',
    //   indices: {
    //     count: 141,
    //     shards: {
    //       total: 141,
    //       primaries: 141,
    //       replication: 0,
    //       index: {
    //         shards: {
    //           min: 1,
    //           max: 1,
    //           avg: 1,
    //         },
    //         primaries: {
    //           min: 1,
    //           max: 1,
    //           avg: 1,
    //         },
    //         replication: {
    //           min: 0,
    //           max: 0,
    //           avg: 0,
    //         },
    //       },
    //     },
    //     docs: {
    //       count: 2612023,
    //       deleted: 10,
    //     },
    //     store: {
    //       size_in_bytes: 2116553661,
    //       reserved_in_bytes: 0,
    //     },
    //     fielddata: {
    //       memory_size_in_bytes: 214712,
    //       evictions: 0,
    //     },
    //     query_cache: {
    //       memory_size_in_bytes: 201654,
    //       total_count: 645203,
    //       hit_count: 111907,
    //       miss_count: 533296,
    //       cache_size: 274,
    //       cache_count: 576,
    //       evictions: 302,
    //     },
    //     completion: {
    //       size_in_bytes: 0,
    //     },
    //     segments: {
    //       count: 961,
    //       memory_in_bytes: 0,
    //       terms_memory_in_bytes: 0,
    //       stored_fields_memory_in_bytes: 0,
    //       term_vectors_memory_in_bytes: 0,
    //       norms_memory_in_bytes: 0,
    //       points_memory_in_bytes: 0,
    //       doc_values_memory_in_bytes: 0,
    //       index_writer_memory_in_bytes: 0,
    //       version_map_memory_in_bytes: 0,
    //       fixed_bit_set_memory_in_bytes: 152,
    //       max_unsafe_auto_id_timestamp: 1701648001557,
    //       file_sizes: {},
    //     },
    //     mappings: {
    //       field_types: [
    //         {
    //           name: 'alias',
    //           count: 1,
    //           index_count: 1,
    //         },
    //         {
    //           name: 'boolean',
    //           count: 148,
    //           index_count: 52,
    //         },
    //         {
    //           name: 'date',
    //           count: 402,
    //           index_count: 140,
    //         },
    //         {
    //           name: 'double',
    //           count: 1,
    //           index_count: 1,
    //         },
    //         {
    //           name: 'float',
    //           count: 1606,
    //           index_count: 135,
    //         },
    //         {
    //           name: 'geo_point',
    //           count: 134,
    //           index_count: 133,
    //         },
    //         {
    //           name: 'half_float',
    //           count: 262,
    //           index_count: 131,
    //         },
    //         {
    //           name: 'integer',
    //           count: 11,
    //           index_count: 2,
    //         },
    //         {
    //           name: 'ip',
    //           count: 919,
    //           index_count: 132,
    //         },
    //         {
    //           name: 'keyword',
    //           count: 4776,
    //           index_count: 140,
    //         },
    //         {
    //           name: 'long',
    //           count: 7604,
    //           index_count: 135,
    //         },
    //         {
    //           name: 'nested',
    //           count: 1,
    //           index_count: 1,
    //         },
    //         {
    //           name: 'object',
    //           count: 3586,
    //           index_count: 137,
    //         },
    //         {
    //           name: 'text',
    //           count: 1868,
    //           index_count: 139,
    //         },
    //       ],
    //     },
    //     analysis: {
    //       char_filter_types: [
    //         {
    //           name: 'mapping',
    //           count: 131,
    //           index_count: 131,
    //         },
    //       ],
    //       tokenizer_types: [],
    //       filter_types: [],
    //       analyzer_types: [
    //         {
    //           name: 'custom',
    //           count: 131,
    //           index_count: 131,
    //         },
    //       ],
    //       built_in_char_filters: [],
    //       built_in_tokenizers: [
    //         {
    //           name: 'whitespace',
    //           count: 131,
    //           index_count: 131,
    //         },
    //       ],
    //       built_in_filters: [],
    //       built_in_analyzers: [],
    //     },
    //   },
    //   nodes: {
    //     count: {
    //       total: 1,
    //       cluster_manager: 1,
    //       coordinating_only: 0,
    //       data: 1,
    //       ingest: 1,
    //       master: 1,
    //       remote_cluster_client: 1,
    //       search: 0,
    //     },
    //     versions: ['2.8.1'],
    //     os: {
    //       available_processors: 12,
    //       allocated_processors: 12,
    //       names: [
    //         {
    //           name: 'Linux',
    //           count: 1,
    //         },
    //       ],
    //       pretty_names: [
    //         {
    //           pretty_name: 'Astra Linux',
    //           count: 1,
    //         },
    //       ],
    //       mem: {
    //         total_in_bytes: 67190386688,
    //         free_in_bytes: 41486974976,
    //         used_in_bytes: 25703411712,
    //         free_percent: 62,
    //         used_percent: 38,
    //       },
    //     },
    //     process: {
    //       cpu: {
    //         percent: 0,
    //       },
    //       open_file_descriptors: {
    //         min: 1273,
    //         max: 1273,
    //         avg: 1273,
    //       },
    //     },
    //     jvm: {
    //       max_uptime_in_millis: 868131246,
    //       versions: [
    //         {
    //           version: '17.0.7',
    //           vm_name: 'OpenJDK 64-Bit Server VM',
    //           vm_version: '17.0.7+7',
    //           vm_vendor: 'Eclipse Adoptium',
    //           bundled_jdk: true,
    //           using_bundled_jdk: true,
    //           count: 1,
    //         },
    //       ],
    //       mem: {
    //         heap_used_in_bytes: 485945408,
    //         heap_max_in_bytes: 1073741824,
    //       },
    //       threads: 95,
    //     },
    //     fs: {
    //       total_in_bytes: 48946196480,
    //       free_in_bytes: 16586375168,
    //       available_in_bytes: 14069583872,
    //       cache_reserved_in_bytes: 0,
    //     },
    //     plugins: [],
    //     network_types: {
    //       transport_types: {
    //         netty4: 1,
    //       },
    //       http_types: {
    //         netty4: 1,
    //       },
    //     },
    //     discovery_types: {
    //       'single-node': 1,
    //     },
    //     packaging_types: [
    //       {
    //         type: 'tar',
    //         count: 1,
    //       },
    //     ],
    //     ingest: {
    //       number_of_pipelines: 0,
    //       processor_stats: {},
    //     },
    //   },
    //   read_only: false,
    // };
    // setFsChartData(data.nodes.fs);
    // const data_size = data['indices']['store']['size_in_bytes'];
    // const fs_total = data['nodes']['fs']['total_in_bytes'];
    // const fs_free = data['nodes']['fs']['free_in_bytes'];
    // const data_size_percent = ((1.0 * data_size) / fs_total) * 100;
    // const fs_free_percent = ((1.0 * fs_free) / fs_total) * 100;
    // const fs_used_percent =
    //   100.0 * (1 - (1.0 * fs_free) / fs_total) - data_size_percent;
    // setChartData([
    //   { name: 'ES Data', value: Math.ceil(data_size_percent) },
    //   { name: 'Занято', value: Math.ceil(fs_used_percent) },
    //   { name: 'Доступно', value: Math.ceil(fs_free_percent) },
    // ]);
    // log('response: ', data);
  };

  const setupColor = (chartPieName) => {
    switch (chartPieName) {
      case 'ES Data':
        return 'red';
      case 'Занято':
        return 'green';
      case 'Доступно':
        return 'gray';
      default:
        return 'yellow';
    }
  };

  return (
    <div className="container">
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}
                bordered={true}
                size={'small'}>
                <div>0 правил</div>
              </Card>
            </Col>

            <Col span={12}>
              <Card
                title="Эврестический анализ"
                className={style.dashboard__card}>
                <div>0 правил</div>
              </Card>
            </Col>

            <Col span={12}>
              <Card title="Трафик пакетов" className={style.dashboard__card}>
                <div>Непринятые пакеты</div>
              </Card>
            </Col>

            <Col span={12}>
              <Card title="Файловая система" className={style.dashboard__card}>
                <div>
                  <span className={style.plate}>
                    {bytesToGB(fsChartData.free_in_bytes)}
                  </span>{' '}
                  Гб из{' '}
                  <span className={style.plate}>
                    {bytesToGB(fsChartData.total_in_bytes)}
                  </span>{' '}
                </div>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={setupColor(entry.name)}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}>
                <div>Непринятые пакеты</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}>
                <div>Непринятые пакеты</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}>
                <div>Непринятые пакеты</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Используемые правила"
                className={style.dashboard__card}>
                <div>Непринятые пакеты</div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TestHypothesis;
