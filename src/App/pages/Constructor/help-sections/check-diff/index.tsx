import React from 'react';
import { EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const CheckDiff = () => {
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>check_diff</h2>
      </EuiTitle>
      <EuiText>Используется для определения момента изменения вывода команды.</EuiText>
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
<rule id="534" level="1">
  <if_sid>530</if_sid>
  <match>ossec: output: 'w'</match>
  <check_diff />
  <options>no_log</options>
  <description>Список зарегистрированных пользователей. По умолчанию он не будет выдавать предупреждение.</description>
</rule>
         `}
      </EuiCodeBlock>
    </EuiFlexItem>
  );
};
