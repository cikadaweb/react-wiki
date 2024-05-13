import React from 'react';
import {
  EuiBasicTable,
  EuiCode,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export const Hostname = () => {
  const hostnameColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const hostnameItems = [
    {
      option: 'hostname',
      allowedValue:
        'Могут применяться любые регулярные выражения ( regex, sregex или pcre2 ) см. таблицу Regular expressions',
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
        <h2>hostname</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Любое имя хоста (декодируемое
        как имя хоста системного журнала) или файл журнала.
      </EuiText>
      <EuiBasicTable items={hostnameItems} columns={hostnameColumns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="2931" level="0">
              <hostname>yum.log$</hostname>
              <match>^Installed|^Updated|^Erased</match>
              <description>Yum журнал.</description>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Это правило будет группировать правила для журналов Yum, когда что-то устанавливается,
          обновляется или удаляется.
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>Возможные атрибуты</EuiText>
        <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>
          Если метка <EuiCode>hostname</EuiCode> объявлена в правиле несколько раз, применяются
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
