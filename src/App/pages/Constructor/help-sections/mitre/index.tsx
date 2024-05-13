import React from 'react';
import { EuiBasicTable, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const Mitre = () => {
  const possibleAtrColumns = [
    {
      field: 'attribute',
      name: 'Атрибуты',
    },
    {
      field: 'value',
      name: 'Значение',
    },
  ];
  const possibleAtrItems = [
    {
      attribute: 'id',
      value: 'ID техники MITRE ATT&CK.',
    },
  ];
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>mitre</h2>
      </EuiTitle>
      <EuiText>
        Указывает идентификатор метода MITRE ATT&CK или идентификаторы, которые хорошо соответствуют
        правилу.
      </EuiText>
      <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
<rule id="100002" level="10">
  <description>Образец техники атаки.</description>
  <mitre>
    <id>T1110</id>
    <id>T1037</id>
  </mitre>
</rule>
         `}
      </EuiCodeBlock>
    </EuiFlexItem>
  );
};
