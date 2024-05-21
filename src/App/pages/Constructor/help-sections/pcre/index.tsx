import React from 'react';
import {
  EuiBasicTable,
  EuiCode,
  EuiCodeBlock,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';
import { pcre, quantifiers } from '../../constants/HelpSectionsInfo';

export const Pcre = () => {
  const xmlCode = ` <decoder>
    <type>syslog</type>
    ...
</decoder>`;

  return (
    <>
      <EuiFlexItem>
        <EuiTitle size="s">
          <h2>PCRE2</h2>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText>
          Perl Compatible Regular Expressions (PCRE) пытается максимально точно соответствовать
          синтаксису и семантике Perl.
        </EuiText>
        <EuiSpacer size="s" />
        <EuiText>
          Набор функций на языке Си с реализацией регулярных выражений и средств сопоставления с
          образцом (pattern matching), близких по синтаксису и семантике к регулярным выражениям
          языка Perl 5. PCRE2 представляет собой переработанную реализацию оригинальной библиотеки
          PCRE с несовместимым API и расширенными возможностями. Библиотека основана разработчиками
          почтового сервера Exim и распространяется под лицензией BSD.
        </EuiText>
        <EuiSpacer size="s" />
        <EuiTitle size="s">
          <h3>Поддерживаемые выражения</h3>
        </EuiTitle>
        <EuiBasicTable
          style={{ width: '30%' }}
          items={pcre}
          columns={[
            {
              field: 'symbol',
              name: 'Символы',
            },
            {
              field: 'action',
              name: 'Действие',
            },
          ]}
        />
        <EuiSpacer size="s" />
        <EuiText>Специальные символы</EuiText>
        <EuiBasicTable
          style={{ width: '30%' }}
          items={[
            {
              symbol: '\\f',
              action: 'Form feed (hex 0C)',
            },
            {
              symbol: '\\n',
              action: 'Newline (hex 0A)',
            },
            {
              symbol: '\\r',
              action: 'Carriage return (hex 0D)',
            },
            {
              symbol: '\\t',
              action: 'Tab (hex 09)',
            },
            {
              symbol: '\\0dd',
              action: 'Character with octal code 0dd',
            },
            {
              symbol: '\\o{ddd..}',
              action: 'Character with octal code ddd..',
            },
            {
              symbol: '\\xhh',
              action: 'Character with hex code hh',
            },
            {
              symbol: '\\x{hh..}',
              action: 'Character with hex code hh..',
            },
          ]}
          columns={[
            {
              field: 'symbol',
              name: 'Символы',
            },
            {
              field: 'action',
              name: 'Действие',
            },
          ]}
        />
        <EuiSpacer size="s" />
        <EuiText>Квантификаторы</EuiText>
        <EuiBasicTable
          items={quantifiers}
          columns={[
            {
              field: 'expression',
              name: 'Выражение',
            },
            {
              field: 'action',
              name: 'Действие',
            },
          ]}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiTitle>
          <h2>Типы журналов</h2>
        </EuiTitle>
        <EuiText>
          по умолчанию <EuiCode>syslog</EuiCode> возможные значения:
          <ul>
            <li>firewall;</li>
            <li>ids;</li>
            <li>web-log;</li>
            <li>syslog;</li>
            <li>squid;</li>
            <li>windows;</li>
            <li>host-information;</li>
            <li>ossec.</li>
          </ul>
        </EuiText>
        <EuiSpacer size="s" />
        Пример:
        <EuiSpacer size="s" />
        <EuiCodeBlock language="xml" isCopyable>
          {xmlCode}
        </EuiCodeBlock>
      </EuiFlexItem>
    </>
  );
};
