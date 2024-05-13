import React from 'react';
import { EuiBasicTable, EuiCode, EuiFlexGroup, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const Data = () => {
  const dataColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const dataItems = [
    {
      option: 'data',
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
        <h2>data</h2>
      </EuiTitle>
      <EuiBasicTable items={dataItems} columns={dataColumns} />
      <EuiFlexItem>
        <EuiText>Возможные атрибуты</EuiText>
        <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>
          Если метка <EuiCode>data</EuiCode> объявлена в правиле несколько раз, применяются
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
