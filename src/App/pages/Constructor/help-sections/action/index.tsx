import React from 'react';
import {
  EuiBasicTable,
  EuiCallOut,
  EuiCode,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export const Action = () => {
  const actionColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const actionItems = [
    {
      option: 'action',
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
        <h2>action</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Он проверит любое действие
        (расшифровывается как ДЕЙСТВИЕ).
      </EuiText>
      <EuiBasicTable items={actionItems} columns={actionColumns} />
      <EuiFlexItem>
        <EuiSpacer size="s" />
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="4502" level="4">
              <if_sid>4500</if_sid>
              <action type="osregex">warning|WARN</action>
              <description>Netscreen предупреждающее сообщение.</description>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Это правило запускает предупреждение уровня 4, когда декодированное действие с Netscreen
          warning или WARN.
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>Возможные атрибуты</EuiText>
        <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      </EuiFlexItem>
      <EuiCallOut>
        <EuiText>Примечание</EuiText>
        <EuiText>
          Используйте атрибут type только для соответствия регулярному выражению. Его нужно
          опустить, если поле action пытается сопоставить строку.
        </EuiText>
      </EuiCallOut>
      <EuiFlexItem>
        <EuiText>
          Если метка <EuiCode>action</EuiCode> объявлена в правиле несколько раз, применяются
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
