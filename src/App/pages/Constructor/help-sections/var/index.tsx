import React from 'react';
import { EuiBasicTable, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const Var = () => {
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
      attribute: 'name',
      value: 'Имя для переменной.',
    },
  ];
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>var</h2>
      </EuiTitle>
      <EuiText>
        Определяет переменную, которую можно использовать в любом месте того же файла.
      </EuiText>
      <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
 <var name="joe_folder">/home/joe/</var>

  <group name="local,">

    <rule id="100001" level="5">
      <if_sid>550</if_sid>
      <field name="file">^$joe_folder</field>
      <description> Joe's файл был изменен.</description>
      <group>ossec,pci_dss_10.6.1,gpg13_10.1,gdpr_IV_35.7.d,</group>
    </rule>

</group>
         `}
      </EuiCodeBlock>
    </EuiFlexItem>
  );
};
