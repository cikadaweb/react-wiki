const parametersValue = {
  weekday: {
    values: [
      {
        value: 'monday - sunday',
        text: 'Понедельник - суббота',
      },
      {
        value: 'weekdays',
        text: 'Рабочие дни',
      },
      {
        value: 'weekends',
        text: 'Выходные',
      },
    ],
  },
  category: {
    values: [
      {
        value: 'firewall',
        text: 'firewall',
      },
      {
        value: 'ids',
        text: 'ids',
      },
      {
        value: 'web-log',
        text: 'web-log',
      },
      {
        value: 'syslog',
        text: 'syslog',
      },
      {
        value: 'windows',
        text: 'windows',
      },
      {
        value: 'host-information',
        text: 'host-information',
      },
      {
        value: 'ossec',
        text: 'ossec',
      },
    ],
  },
  noalert: {
    values: [
      {
        value: '0',
        text: '0',
      },
      {
        value: '1',
        text: '1',
      },
    ],
  },
  order: {
    values: [
      {
        value: 'srcuser',
        text: 'srcuser',
      },
      {
        value: 'dstuser',
        text: 'dstuser',
      },
      {
        value: 'user',
        text: 'user',
      },
      {
        value: 'srcip',
        text: 'srcip',
      },
      {
        value: 'dstip',
        text: 'dstip',
      },
      {
        value: 'srcport',
        text: 'srcport',
      },
      {
        value: 'dstport',
        text: 'dstport',
      },
      {
        value: 'protocol',
        text: 'protocol',
      },
      {
        value: 'system_name',
        text: 'system_name',
      },
      {
        value: 'id',
        text: 'id',
      },
      {
        value: 'url',
        text: 'url',
      },
      {
        value: 'action',
        text: 'action',
      },
      {
        value: 'status',
        text: 'status',
      },
      {
        value: 'data',
        text: 'data',
      },
      {
        value: 'extra_data',
        text: 'extra_data',
      },
    ],
  },
  fts: {
    values: [
      {
        value: 'location',
        text: 'location',
      },
      {
        value: 'srcuser',
        text: 'srcuser',
      },
      {
        value: 'dstuser',
        text: 'dstuser',
      },
      {
        value: 'user',
        text: 'user',
      },
      {
        value: 'srcip',
        text: 'srcip',
      },
      {
        value: 'dstip',
        text: 'dstip',
      },
      {
        value: 'srcport',
        text: 'srcport',
      },
      {
        value: 'dstport',
        text: 'dstport',
      },
      {
        value: 'protocol',
        text: 'protocol',
      },
      {
        value: 'system_name',
        text: 'system_name',
      },
      {
        value: 'id',
        text: 'id',
      },
      {
        value: 'url',
        text: 'url',
      },
      {
        value: 'action',
        text: 'action',
      },
      {
        value: 'status',
        text: 'status',
      },
      {
        value: 'data',
        text: 'data',
      },
      {
        value: 'extra_data',
        text: 'extra_data',
      },
    ],
  },
  plugin_decoder: {
    values: [
      {
        value: 'PF_Decoder',
        text: 'PF_Decoder',
      },
      {
        value: 'SymantecWS_Decoder',
        text: 'SymantecWS_Decoder',
      },
      {
        value: 'SonicWall_Decoder',
        text: 'SonicWall_Decoder',
      },
      {
        value: 'OSSECAlert_Decoder',
        text: 'OSSECAlert_Decoder',
      },
      {
        value: 'JSON_Decoder',
        text: 'JSON_Decoder',
      },
    ],
  },
  json_null_field: {
    values: [
      {
        value: 'string',
        text: 'Отображать, как строку',
      },
      {
        value: 'discard',
        text: 'Не отображать',
      },
    ],
  },
  json_array_structure: {
    values: [
      {
        value: 'array',
        text: 'Отображать, как массив',
      },
      {
        value: 'discard',
        text: 'Отображать, как CSV-строку',
      },
    ],
  },
};

export default parametersValue;
