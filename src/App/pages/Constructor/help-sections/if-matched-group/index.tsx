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

export const IfMatchedGroup = () => {
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
      option: 'if_matched_group',
      allowedValue: 'любой идентификатор группы',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>if_matched_group</h2>
      </EuiTitle>
      <EuiText>
        Соответствует, если оповещение определенного идентификатора было инициировано в течение
        заданного количества секунд.
      </EuiText>
      <EuiText>
        Этот параметр используется в сочетании с <EuiCode>frequency</EuiCode> и
        <EuiCode>timeframe</EuiCode>.
      </EuiText>
      <EuiBasicTable items={items} columns={columns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="40113" level="12" frequency="8" timeframe="360">
              <if_matched_group>virus</if_matched_group>
              <description>Обнаружено несколько вирусов - возможная вспышка.</description>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Правило сработает, когда вирус будет обнаружен 8 раз за последние 360 секунд.
        </EuiText>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
