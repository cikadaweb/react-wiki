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

export const IfGroup = () => {
  const columns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const items = [
    {
      option: 'if_group',
      allowedValue: 'Любая группа.',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>if_group</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Соответствует, если группа
        совпадала ранее.
      </EuiText>
      <EuiBasicTable items={items} columns={columns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="184676" level="12">
                <if_group>sysmon_event1</if_group>
                <field name="sysmon.image">lsm.exe</field>
                <description>Sysmon - Подозрительный процесс - lsm.exe</description>
                <group>pci_dss_10.6.1,pci_dss_11.4,gdpr_IV_35.7.d,hipaa_164.312.b,nist_800_53_AU.6,nist_800_53_SI.4,</group>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Правило сработает, если группа <EuiCode>sysmon_event1</EuiCode> уже совпадала ранее и если
          поле, расшифрованное как <EuiCode>sysmon.image</EuiCode>, имеет значение «lsm.exe».
        </EuiText>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
