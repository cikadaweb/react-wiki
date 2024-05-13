import React from 'react';
import {
  EuiBasicTable,
  EuiCallOut,
  EuiCodeBlock,
  EuiFlexItem,
  EuiText,
  EuiTitle,
  EuiCode,
} from '@elastic/eui';

export const Options = () => {
  const possibleAtrColumns = [
    {
      field: 'attribute',
      name: 'Атрибуты',
    },
    {
      field: 'description',
      name: 'Описание',
    },
  ];
  const possibleAtrItems = [
    {
      attribute: 'alert_by_email',
      description: 'Всегда оповещение по электронной почте.',
    },
    {
      attribute: 'no_email_alert',
      description: 'Никогда не предупреждайте по электронной почте.',
    },
    {
      attribute: 'no_log',
      description: 'Не регистрирует это предупреждение.',
    },
    {
      attribute: 'no_full_log',
      description: 'Не включайте поле full_log в оповещение.',
    },
    {
      attribute: 'no_counter',
      description: 'Пропустите поле rule.firedtimes в предупреждении JSON.',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>options</h2>
      </EuiTitle>
      <EuiText>Дополнительные параметры правил.</EuiText>
      <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
<rule id="9800" level="8">
  <match>illegal user|invalid user</match>
  <description>sshd: Попытка войти под несуществующим пользователем</description>
  <options>no_log</options>
</rule>
          `}
        </EuiCodeBlock>
        <EuiCallOut>
          Примечание: Необходимо использовать один тег <EuiCode>{`<options>`}</EuiCode> для каждой
          опции, которую вы хотите добавить.
        </EuiCallOut>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
