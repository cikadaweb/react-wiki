import React from 'react';
import { EuiCode, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const Description = () => {
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>description</h2>
      </EuiTitle>
      <EuiText>
        Указывает удобочитаемое описание правила, чтобы обеспечить контекст для каждого оповещения
        относительно характера событий, которым оно соответствует.
      </EuiText>
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
<rule id="100015" level="2">
  ...
  <description> Событие произошло . </description>
</rule>

<rule id="100035" level="4">
  ...
  <description> Файл отсутствует. Доступ без ограничения. </description>
</rule>
         `}
      </EuiCodeBlock>
      <EuiText>
        В описательное сообщение можно включить любое декодированное поле (статическое или
        динамическое). Применяеться следующий синтаксис: $(имя_поля), чтобы добавить поле в
        описание.
      </EuiText>
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
        <rule id="100005" level="8">
          <match>illegal user|invalid user</match>
          <description>sshd: Попытка войти под несуществующим пользователем из IP $(attempt_ip)</description>
          <options>no_log</options>
        </rule>
        `}
      </EuiCodeBlock>
      <EuiText>
        Если <EuiCode>description</EuiCode> в правиле используется несколько раз, применяются
        следующие правила:
        <ul>
          <li>Полученное значение является их конкатенацией.</li>
        </ul>
      </EuiText>
    </EuiFlexItem>
  );
};
