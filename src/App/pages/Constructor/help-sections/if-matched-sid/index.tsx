import React from 'react';
import {
  EuiBasicTable,
  EuiCallOut,
  EuiCode,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export const IfMatchedSid = () => {
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
      option: 'if_matched_sid',
      allowedValue: 'любой идентификатор правила',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>if_matched_sid</h2>
      </EuiTitle>
      <EuiText>
        Соответствует, если оповещение определенного идентификатора было инициировано в течение
        заданного количества секунд.
      </EuiText>
      <EuiText>Этот параметр используется в сочетании с frequency и timeframe.</EuiText>
      <EuiBasicTable items={items} columns={columns} />
      <EuiCallOut>
        <EuiText>Примечание:</EuiText>
        <EuiText>
          Правила на уровне 0 немедленно отбрасываются и не будут использоваться с
          <EuiCode>if_matched_rules</EuiCode>. Уровень должен быть не ниже 1, но к правилу можно
          добавить параметр {`<no_log>`}, чтобы убедиться, что оно не регистрируется.
        </EuiText>
      </EuiCallOut>
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="30316" level="10" frequency="10" timeframe="120">
              <if_matched_sid>30315</if_matched_sid>
              <same_source_ip />
              <description>Apache: несколько недопустимых запросов URI из одного источника.</description>
              <mitre>
                <id>T1499</id>
              </mitre>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Правило срабатывает, когда правило 30315 срабатывает 10 раз за 120 секунд и если запросы
          были сделаны одним и тем же <EuiCode>srcip</EuiCode>.
        </EuiText>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
