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

export const ProgramName = () => {
  const programColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const programItems = [
    {
      option: 'program_name',
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
        <h2>program_name</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Имя программы
        расшифровывается как имя процесса syslog.
      </EuiText>
      <EuiBasicTable items={programItems} columns={programColumns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="1005" level="5">
                <program_name>syslogd</program_name>
                <match>^restart</match>
                <description>Syslogd перезапущен.</description>
                <group>pci_dss_10.6.1,gpg13_10.1,gpg13_4.14,gdpr_IV_35.7.d,hipaa_164.312.b,nist_800_53_AU.6, </group>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>Правило сработает при перезапуске программы Syslogd.</EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>Возможные атрибуты</EuiText>
        <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>
          Если метка <EuiCode>program_name</EuiCode> объявлена в правиле несколько раз, применяются
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
