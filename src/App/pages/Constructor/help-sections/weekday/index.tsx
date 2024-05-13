import React from 'react';
import {
  EuiBasicTable,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export const Weekday = () => {
  const weekdayColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const weekdayItems = [
    {
      option: 'weekday',
      allowedValue: 'monday - sunday, weekdays, weekends',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>weekday</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Проверяет день недели, в
        который было сгенерировано событие.
      </EuiText>
      <EuiBasicTable items={weekdayItems} columns={weekdayColumns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="17102" level="9">
              <if_group>authentication_success</if_group>
              <weekday>weekends</weekday>
              <description>Успешный вход в выходные.</description>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>Это правило сработает при успешном входе в систему в выходные дни.</EuiText>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
