import React from 'react';
import { EuiBasicTable, EuiCode, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const Dstip = () => {
  const dcipColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
    {
      field: 'description',
      name: 'Описание',
    },
  ];
  const dcipItems = [
    {
      option: 'dstip',
      allowedValue: 'любые IP',
      description:
        'Используется как необходимое условие для срабатывания правила. Cравнивается любой IP-адрес или блок CIDR с IP-адресом, декодированным как dstip. Если применено "!"  то выплняеться отрицаание.',
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
  ];

  return (
    <EuiFlexItem>
      <EuiFlexItem>
        <EuiTitle>
          <h2>dstip</h2>
        </EuiTitle>
        <EuiText>
          (поле IP-пакета, содержащее в себе IP-адрес рабочей станции, которой он адресован)
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiBasicTable items={dcipItems} columns={dcipColumns} />
      </EuiFlexItem>
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
          <rule id="100110" level="5">
            <if_sid>100100</if_sid>
            <dstip>!198.168.41.30</dstip>
            <description> Был обнаружен другой dstip.</description>
          </rule>
        `}
      </EuiCodeBlock>
      <EuiText>
        Это правило срабатывает при обнаружении <EuiCode>dstip</EuiCode>, отличного от
        198.168.41.30.
      </EuiText>
      <EuiText>Возможные атрибуты</EuiText>
      <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      <EuiText>
        Если метка <EuiCode>dstip</EuiCode> объявлена в правиле несколько раз, применяются следующие
        правила:
      </EuiText>
      <ul style={{ listStyle: 'inherit', paddingLeft: '15px' }}>
        <li>Полученное значение является их конкатенацией;</li>
        <li>
          Результирующее значение атрибута соответствует значению, указанному в последней метке.
          Если он не указан, будет использоваться значение по умолчанию.
        </li>
      </ul>
    </EuiFlexItem>
  );
};
