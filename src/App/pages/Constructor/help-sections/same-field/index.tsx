import React from 'react';
import { EuiCode, EuiCodeBlock, EuiFlexItem, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';

export const SameField = () => {
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>same_field</h2>
      </EuiTitle>
      <EuiSpacer size="s"></EuiSpacer>
      <EuiText>
        Значение динамического поля, указанное в этой опции, должно появляться в предыдущих событиях
        определенное количество раз <EuiCode>frequency</EuiCode> в течение требуемого периода
        времени <EuiCode>timeframe</EuiCode>.
      </EuiText>
      <EuiSpacer size="s"></EuiSpacer>
      <EuiText>
        Пример использования <EuiCode>{`<same_field>key</same_field>`}</EuiCode>
      </EuiText>
      <EuiSpacer size="s"></EuiSpacer>
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
          <!-- {"key":"value", "key2":"AAAA"} -->
          <rule id="100001" level="3">
            <decoded_as>json</decoded_as>
            <field name="key">value</field>
            <description>Тест JSON вызов</description>
          </rule>

          <rule id="100002" level="10" frequency="4" timeframe="300">
            <if_matched_sid>100001</if_matched_sid>
            <same_field>key2</same_field>
            <description>Тест same_field опция</description>
          </rule>
         `}
      </EuiCodeBlock>
      <EuiSpacer size="s"></EuiSpacer>
      <EuiText>
        Правило 100002 срабатывает, когда key2 в рассматриваемом в данный момент событии совпадает с
        четырьмя событиями, которые ранее соответствовали правилу 100001 в течение последних 300
        секунд. Таким образом, для следующей последовательности событий:
      </EuiText>
      <EuiSpacer size="s" />
      <EuiCodeBlock language="xml">
        {`
          {"key":"value", "key2":"AAAA"}
          {"key":"value", "key2":"AAAA"}
          {"key":"value", "key2":"BBBB"}
          {"key":"value", "key2":"AAAA"}
          {"key":"value", "key2":"CCCC"}
          {"key":"value", "key2":"CCCC"}
          {"key":"value", "key2":"AAAA"}
        `}
      </EuiCodeBlock>
      <EuiSpacer size="s" />
      <EuiText>
        Последнее событие вызовет срабатывание правила 100002 вместо 100001, так как оно обнаружило
        значение AAAA в трех предыдущих событиях. Соответствующее оповещение выглядит так:
      </EuiText>
      <EuiSpacer size="s" />
      <EuiCodeBlock language="xml">
        {`
        {
  "timestamp": "2020-03-04T03:00:28.973-0800",
  "rule": {
    "level": 10,
    "description": "Testing same_field option",
    "id": "100002",
    "frequency": 4,
    "firedtimes": 1,
    "mail": false,
    "groups": [
      "local"
    ]
  },
  "agent": {
    "id": "000",
    "name": "ubuntu"
  },
  "manager": {
    "name": "ubuntu"
  },
  "id": "1583319628.14426",
  "previous_output": "{\\"key\\":\\"value\\",\\"key2\\":\\"AAAA\\"}\\n{\\"key\\":\\"value\\",\\"key2\\":\\"AAAA\\"}\\n{\\"key\\":\\"value\\",\\"key2\\":\\"AAAA\\"}",
  "full_log": "{\\"key\\":\\"value\\",\\"key2\\":\\"AAAA\\"}",
  "decoder": {
    "name": "json"
  },
  "data": {
    "key": "value",
    "key2": "AAAA"
  },
  "location": "/root/test.log"
}
        `}
      </EuiCodeBlock>
    </EuiFlexItem>
  );
};
