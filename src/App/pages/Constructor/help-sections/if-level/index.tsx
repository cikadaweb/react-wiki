import React from 'react';
import { EuiBasicTable, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const IfLevel = () => {
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
      option: 'if_level',
      allowedValue: 'любой уровень 1 - 16',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>if_level</h2>
      </EuiTitle>
      <EuiText>Совпадает, если уровень совпадал ранее.</EuiText>
      <EuiBasicTable items={items} columns={columns} />
    </EuiFlexItem>
  );
};
