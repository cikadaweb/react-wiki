import React from 'react';
import { EuiBasicTable, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const Info = () => {
  const columns = [
    {
      field: 'defaultValue',
      name: 'Значение по умолчанию',
    },
    {
      field: 'allowedValue',
      name: 'Допустимые значения',
    },
  ];
  const items = [
    {
      option: '-',
      allowedValue: 'Любая строка',
    },
  ];

  const possibleAtrColumns = [
    {
      field: 'attribute',
      name: 'Атрибуты',
    },
    {
      field: 'allowedValue',
      name: 'Допустимые значения',
    },
    {
      field: 'description',
      name: 'Описание',
    },
  ];
  const possibleAtrItems = [
    {
      attribute: 'type',
      description:
        'Это значение по умолчанию, если тип не выбран. Дополнительная информация об оповещении/событии.',
      allowedValues: 'text',
    },
    {
      attribute: 'type',
      description: 'Ссылка на дополнительную информацию об оповещении/событии.',
      allowedValues: 'link',
    },
    {
      attribute: 'type',
      description: 'Номер CVE, связанный с этим предупреждением/событием.',
      allowedValues: 'cve',
    },
    {
      attribute: 'type',
      description: 'Идентификатор osvdb, связанный с этим предупреждением/событием.',
      allowedValues: 'ovsdb',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>info</h2>
      </EuiTitle>
      <EuiText>Дополнительная информация может быть добавлена через следующие атрибуты:</EuiText>
      <EuiBasicTable items={items} columns={columns} />
      <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
    <rule id="5714" level="14" timeframe="120" frequency="3">
      <if_matched_sid>5713</if_matched_sid>
      <match>Local: crc32 compensation attack</match>
      <description>sshd: SSH CRC-32 Compensation attack</description>
      <info type="cve">2001-0144</info>
      <info type="link">http://www.securityfocus.com/bid/2347/info/</info>
      <group>exploit_attempt,pci_dss_11.4,pci_dss_6.2,gpg13_4.12,gdpr_IV_35.7.d,nist_800_53_SI.4,nist_800_53_SI.2,</group>
    </rule>
          `}
        </EuiCodeBlock>
        <EuiText>Правило предоставляет дополнительную информацию об обнаруженной угрозе.</EuiText>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
