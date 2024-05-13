import React from 'react';
import {
  EuiBasicTable,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export const Time = () => {
  const timeColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const timeItems = [
    {
      option: 'time',
      allowedValue:
        'Время в следующем формате (hh:mm-hh:mm, hh:mm am-hh:mm pm, hh-hh, hh am-hh pm)',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>time</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Используется для проверки
        времени создания события.
      </EuiText>
      <EuiBasicTable items={timeItems} columns={timeColumns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="17101" level="9">
              <if_group>authentication_success</if_group>
              <time>6 pm - 8:30 am</time>
              <description> Успешный вход в нерабочее время. </description>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>Это правило срабатывает при успешном входе в систему между 18:00 и 8:30.</EuiText>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
