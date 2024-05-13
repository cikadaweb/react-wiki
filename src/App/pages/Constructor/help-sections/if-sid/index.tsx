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

export const IfSid = () => {
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
      option: 'if_sid',
      allowedValue:
        'Любой идентификатор правила. Несколько значений должны быть разделены запятыми или пробелами.',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>if_sid</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Соответствует, когда
        идентификатор в списке ранее совпадал. Он похож на дочерний декодер, с тем ключевым
        отличием, что у предупреждений может быть столько потомков, сколько необходимо, тогда как у
        декодера не может быть «внуков».
      </EuiText>
      <EuiBasicTable items={items} columns={columns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="100110" level="5">
              <if_sid>100100, 100101</if_sid>
              <match>Error</match>
              <description>В журнале содержиться ошибка.</description>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Правило <EuiCode>100110</EuiCode> срабатывает, когда одно из родительских правил совпало,
          а журналы содержат слово Error.
        </EuiText>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
