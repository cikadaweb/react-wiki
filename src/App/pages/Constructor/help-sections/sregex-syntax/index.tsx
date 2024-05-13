import React from 'react';
import { EuiBasicTable, EuiFlexItem, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';
import { sregex } from '../../constants/help-info';

export const SregexSyntax = () => {
  return (
    <EuiFlexItem>
      <EuiTitle size="s">
        <h3>Таблица Regular expressions</h3>
      </EuiTitle>
      <EuiSpacer size="xs" />
      <EuiTitle size="s">
        <h3>Sregex (OS_Match) syntax</h3>
      </EuiTitle>
      <EuiSpacer size="xs" />
      <EuiText>
        Это быстрее, чем OS_Regex, но поддерживает только простое сопоставление строк и следующие
        специальные символы.
      </EuiText>
      <EuiFlexItem>
        <EuiBasicTable
          items={sregex}
          style={{ width: '60%' }}
          columns={[
            {
              field: 'symbol',
              name: 'Символы',
              width: '20%',
            },
            {
              field: 'description',
              name: 'Описание',
            },
          ]}
        />
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
