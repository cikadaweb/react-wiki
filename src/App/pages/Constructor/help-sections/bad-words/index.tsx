import React from 'react';
import { EuiCode, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const BadWords = () => {
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>BAD_WORDS</h2>
      </EuiTitle>
      <EuiCodeBlock>{`<var name="BAD_WORDS">error|warning|failure</var>`}</EuiCodeBlock>
      <EuiText>
        <EuiCode>BAD_WORDS</EuiCode> — часто используемый вариант использования параметра{' '}
        <EuiCode>{`<var>`}</EuiCode>.
      </EuiText>
      <EuiText>
        Он используется для включения нескольких слов в одну и ту же переменную. Позже эту
        переменную можно сопоставить с декодерами, чтобы проверить, входит ли какое-либо из этих
        слов в перехваченное событие.
      </EuiText>
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
<var name="BAD_WORDS">error|warning|failure</var>

<group name="syslog,errors,">
  <rule id="XXXX" level="2">
    <match>$BAD_WORDS</match>
    <description>Обнаружена ошибка.</description>
  </rule>
</group>
         `}
      </EuiCodeBlock>
    </EuiFlexItem>
  );
};
