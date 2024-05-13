import React from 'react';
import { EuiBasicTable, EuiCode, EuiFlexItem, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';
import { modifiers, regex, specSymbols } from '../../constants/help-info';

export const RegexSyntax = () => {
  return (
    <>
      <EuiFlexItem>
        <EuiTitle size="s">
          <h3>Regular expressions - Regex (OS_Regex) syntax</h3>
        </EuiTitle>
        <EuiSpacer size="xs" />
        Поддерживаемые выражения
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiBasicTable
          items={regex}
          style={{ width: '30%' }}
          columns={[
            {
              field: 'symbol',
              name: 'Символы',
            },
            {
              field: 'allowedValues',
              name: 'Возможные значения',
            },
          ]}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiTitle size="s">
          <h3>Модификаторы</h3>
        </EuiTitle>
        <EuiBasicTable
          items={modifiers}
          style={{ width: '30%' }}
          columns={[
            {
              field: 'symbol',
              name: 'Символы',
            },
            {
              field: 'allowedValues',
              name: 'Возможные значения',
            },
          ]}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiTitle size="s">
          <h3>Специальные символы</h3>
        </EuiTitle>
        <EuiBasicTable
          style={{ width: '30%' }}
          items={specSymbols}
          columns={[
            {
              field: 'symbol',
              name: 'Символы',
            },
            {
              field: 'allowedValues',
              name: 'Возможные значения',
            },
          ]}
        />
        <EuiSpacer size="m" />
        <EuiText>Использование специальных символов требует экранирования</EuiText>
        <EuiSpacer size="s" />
        <EuiBasicTable
          style={{ width: '30%' }}
          items={[
            {
              dollarSign: '\\ $',
              leftParenthesis: '\\ (',
              rightParenthesis: '\\ )',
              backslash: '\\ \\',
              pipe: '\\ |',
              lessThanSign: '\\ <',
            },
          ]}
          columns={[
            {
              field: 'dollarSign',
              name: '$',
            },
            {
              field: 'leftParenthesis',
              name: '(',
            },
            {
              field: 'rightParenthesis',
              name: ')',
            },
            {
              field: 'backslash',
              name: '\\',
            },
            {
              field: 'pipe',
              name: '|',
            },
            {
              field: 'lessThanSign',
              name: '<',
            },
          ]}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiTitle size="s">
          <h3>Ограничения</h3>
        </EuiTitle>
        <ul style={{ listStyle: 'inherit', paddingLeft: '15px' }}>
          <li>
            Модификаторы <EuiCode>*</EuiCode> и <EuiCode>+</EuiCode> могут применяться только к
            выражениям с обратной косой чертой, а не к пустым символам (например,
            <EuiCode>\d+</EuiCode> поддерживается, <EuiCode>0+</EuiCode> — нет);
          </li>
          <li>
            нельзя использовать чередование в группе, например. <EuiCode>(foo|bar)</EuiCode>
            запрещено;
          </li>
          <li>
            сложный возврат не поддерживается, например. <EuiCode>\p*\d*\s*\w*: </EuiCode>не
            соответствует ни одному выражению после <EuiCode>:</EuiCode>, потому что
            <EuiCode>\p*</EuiCode>использует двоеточие;
          </li>
          <li>
            <EuiCode>.</EuiCode> соответствует точке, тогда как <EuiCode>\.</EuiCode> соответствует
            любому символу;
          </li>
          <li>
            <EuiCode>\s</EuiCode> соответствует только пробелу ASCII (32), а не другим пробелам,
            таким как вкладка;
          </li>
          <li>
            нет синтаксиса для соответствия символу вставки, звездочке или плюсу (но
            <EuiCode>\p</EuiCode> будет соответствовать звездочке или плюсу, а также некоторым
            другим символам).
          </li>
        </ul>
      </EuiFlexItem>
    </>
  );
};
