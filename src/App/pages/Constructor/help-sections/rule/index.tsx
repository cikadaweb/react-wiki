import React from 'react';
import { EuiBasicTable, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';
import { rules } from '../../constants/help-info';

export const Rule = () => {
  const rulesColumns = [
    {
      field: 'parameter',
      name: 'Параметр',
      width: '20%',
    },
    {
      field: 'allowedValues',
      name: 'Допустимые значения',
      width: '20%',
    },
    {
      field: 'definition',
      name: 'Описание',
    },
  ];

  return (
    <>
      <EuiFlexItem>
        <EuiTitle>
          <h2>rule</h2>
        </EuiTitle>
        <EuiText>
          {`<rule>`} — это тег, с которого начинается блок, определяющий правило. В этом разделе
          объясняются различные варианты этого тега.
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexItem>
          <EuiBasicTable items={rules} columns={rulesColumns} />
        </EuiFlexItem>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiTitle>
          <h3>Пример</h3>
        </EuiTitle>
        <EuiCodeBlock language="xml" isCopyable>
          {`<rule id="31316" level="10" frequency="8" timeframe="240">`}
        </EuiCodeBlock>
      </EuiFlexItem>
    </>
  );
};
