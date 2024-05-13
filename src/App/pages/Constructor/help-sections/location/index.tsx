import React from 'react';
import {
  EuiBasicTable,
  EuiCode,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export const LocationSection = () => {
  const locationColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const locationItems = [
    {
      option: 'location',
      allowedValue:
        'Могут применяться любые регулярные выражения ( regex, sregex или pcre2 ) см. таблицу Regular expressions',
    },
  ];
  const attributesColumns = [
    {
      field: 'attribute',
      name: 'атрибуты',
    },
    {
      field: 'description',
      name: 'Описание',
    },
  ];
  const attributesItems = [
    {
      attribute: 'Windows Eventchannel',
      description: 'EventChannel',
    },
    {
      attribute: 'Windows Eventlog',
      description: 'WinEvtLog',
    },
    {
      attribute: 'FIM (Syscheck)',
      description: 'syscheck',
    },
    {
      attribute: 'Rootcheck',
      description: 'rootcheck',
    },
    {
      attribute: 'Syscollector',
      description: 'syscollector',
    },
    {
      attribute: 'Vuln Detector',
      description: 'vulnerability-detector',
    },
    {
      attribute: 'Azure Logs',
      description: 'azure-logs',
    },
    {
      attribute: 'AWS S3 integration',
      description: 'aws-s3',
    },
    {
      attribute: 'Docker integration',
      description: 'Wazuh-Docker',
    },
    {
      attribute: 'Osquery integration',
      description: 'osquery',
    },
    {
      attribute: 'OpenSCAP integration',
      description: 'open-scap',
    },
    {
      attribute: 'CIS-CAT integration',
      description: 'wodle_cis-cat',
    },
    {
      attribute: 'SCA module',
      description: 'sca',
    },
  ];
  const possibleAtrColumns = [
    {
      field: 'attribute',
      name: 'атрибуты',
    },
    {
      field: 'description',
      name: 'Описание',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
    {
      field: 'defaultValues',
      name: 'Значение по умолчанию',
    },
  ];
  const possibleAtrItems = [
    {
      attribute: 'negate',
      description: 'позволяет отрицать регулярное выражение',
      allowedValues: 'no/yes',
      defaultValues: 'no',
    },
    {
      attribute: 'type',
      description: 'позволяет выбирать тип регулярного выражения',
      allowedValues: 'osmatch/osregex/pcre2',
      defaultValues: 'osmatch',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>location</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Он проверит содержимое поля
        location и попытается найти совпадение.
      </EuiText>
      <EuiBasicTable items={locationItems} columns={locationColumns} />
      <EuiSpacer size="s" />
      <EuiText>
        Расположение определяет источник ввода. Если событие исходит от агента, его имя и
        зарегистрированный IP-адрес (как он был добавлен) добавляются к местоположению.
      </EuiText>
      <EuiSpacer size="s" />
      <EuiText>
        Пример: расположения журнала, «/var/log/syslog» в агенте с именем «dbserver» и
        зарегистрированным с IP-адресом «any»:
      </EuiText>
      <EuiSpacer size="s" />
      <EuiText>(dbserver) {`any->/var/log/syslog`}</EuiText>
      <EuiSpacer size="s" />
      <EuiFlexItem>
        <EuiText>Следующие компоненты используют статическое расположение:</EuiText>
        <EuiBasicTable
          style={{ width: '30%' }}
          items={attributesItems}
          columns={attributesColumns}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiSpacer size="xs" />
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
           <rule id="24000" level="3">
            <location>osquery$</location>
            <description>osquery ответ</description>
          </rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Это правило группирует журналы, поступающие из <EuiCode>osquery</EuiCode>. Активация
          оповещения уровня 3 для него.
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>Возможные атрибуты</EuiText>
        <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>
          Если метка <EuiCode>location</EuiCode> объявлена в правиле несколько раз, применяются
          следующие правила:
        </EuiText>
        <ul style={{ listStyle: 'inherit', paddingLeft: '15px' }}>
          <li>Полученное значение является их конкатенацией;</li>
          <li>
            Результирующее значение атрибута соответствует значению, указанному в последней метке.
            Если он не указан, будет использоваться значение по умолчанию.
          </li>
        </ul>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
