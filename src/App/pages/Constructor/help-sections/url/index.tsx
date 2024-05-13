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

export const Url = () => {
  const urlColumns = [
    {
      field: 'option',
      name: 'Опция',
    },
    {
      field: 'allowedValue',
      name: 'Принимаемые значения',
    },
  ];
  const urlItems = [
    {
      option: 'url',
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
        <h2>url</h2>
      </EuiTitle>
      <EuiText>
        Используется как необходимое условие для срабатывания правила. Он проверит любой URL-адрес
        (декодированный как URL-адрес).
      </EuiText>
      <EuiBasicTable items={urlItems} columns={urlColumns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
            <rule id="31102" level="0">
              <if_sid>31101</if_sid>
              <url>.jpg$|.gif$|favicon.ico$|.png$|robots.txt$|.css$|.js$|.jpeg$</url>
              <compiled_rule>is_simple_http_request</compiled_rule>
              <description> Игнорирование кода ошибок 400.</description>
            </rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Это правило является дочерним по отношению к правилу 31101 уровня 5 и становится правилом
          уровня 0, когда подтверждает, что расширения не вызывают ошибки.
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>Возможные атрибуты</EuiText>
        <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText>
          Если метка <EuiCode>url</EuiCode> объявлена в правиле несколько раз, применяются следующие
          правила:
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
