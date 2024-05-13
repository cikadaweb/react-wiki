import React from 'react';
import { EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const Group = () => {
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>group</h2>
      </EuiTitle>
      <EuiText>
        Добавляет в оповещение дополнительные группы. Группы — это необязательные теги, добавляемые
        к оповещениям.
      </EuiText>
      <EuiText>
        Их можно использовать в других правилах, используя if_group или if_matched_group, или с
        помощью инструментов синтаксического анализа предупреждений для категоризации
        предупреждений.
      </EuiText>
      <EuiText>
        Группы — это переменные, определяющие поведение. Когда оповещение включает в себя эту
        групповую метку, происходит следующее поведение указанное в примере.
      </EuiText>
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml">
        {`
<rule id="3801" level="4">
  <description>Группа правил, связанных со спамом.</description>
  <group>spam,</group>
</rule>
         `}
      </EuiCodeBlock>
      <EuiText>
        Теперь каждое правило со строкой {'<group>spam,</group>'} будет включено в эту группу.
      </EuiText>
      <EuiText>Метка применяемая для группировки правил.</EuiText>
    </EuiFlexItem>
  );
};
