import React from 'react';
import { EuiCode, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const DifferentSrcgeoip = () => {
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>different_srcgeoip</h2>
      </EuiTitle>
      <EuiText>
        Указывает, что декодируемое значение srcgeoip должено быть различно. Этот вариант
        используется совместно с <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
      </EuiText>
      <EuiText>
        Пример использования <EuiCode>{`<different_srcgeoip />`}</EuiCode>
      </EuiText>
      <EuiText>В качестве примера этих последних вариантов проверьте это правило:</EuiText>
      <EuiCodeBlock language="xml">
        {`
<rule id=100005 level="0">
  <match> Could not open /home </match>
  <same_user />
  <different_srcgeoip />
  <same_dstport />
 </rule>
         `}
      </EuiCodeBlock>
      <EuiText>
        Это правило сработает, когда один и тот же пользователь <EuiCode>user</EuiCode> пытается
        открыть файл /home, но возвращает ошибку, используя другой <EuiCode>ip</EuiCode> но тот же
        порт <EuiCode>dstport</EuiCode>.
      </EuiText>
    </EuiFlexItem>
  );
};
