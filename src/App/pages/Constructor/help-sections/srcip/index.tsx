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

export const Srcip = () => {
  return (
    <EuiFlexItem>
      <EuiFlexItem>
        <EuiTitle>
          <h2>srcip</h2>
        </EuiTitle>
        <EuiText>
          (поле IP-пакета, содержащее в себе IP-адрес рабочей станции, от которой он поступил)
        </EuiText>
        <EuiBasicTable
          items={[
            {
              option: 'srcip',
              allowedValue: 'любые IP',
              description:
                'Используется как необходимое условие для срабатывания правила. Cравнивается любой IP-адрес или блок CIDR с IP-адресом, декодированным как srcip. Если применено "!"  то выплняеться отрицаание.',
            },
          ]}
          columns={[
            {
              field: 'option',
              name: 'Опция',
            },
            {
              field: 'allowedValue',
              name: 'Принимаемые значения',
            },
            {
              field: 'description',
              name: 'Описание',
            },
          ]}
        />
      </EuiFlexItem>
      <EuiSpacer size="xs" />
      <EuiText>Пример:</EuiText>
      <EuiCodeBlock language="xml" isCopyable>
        {`    <rule id="100105" level="8">
        <if_sid>100100</if_sid>
        <srcip>10.25.23.12</srcip>
        <description>Обнаружен запрещённый IP адрес.</description>
    </rule>
         `}
      </EuiCodeBlock>
      <EuiSpacer size="s" />
      <EuiText>
        Это правило сработает, когда этот адресс 10.25.23.12 будет извлечен из логов.
      </EuiText>
      <EuiText>Возможные атрибуты</EuiText>
      <EuiBasicTable
        items={[
          {
            attribute: 'negate',
            description: 'позволяет отрицать регулярное выражение',
            allowedValues: 'no/yes',
            defaultValues: 'no',
          },
        ]}
        columns={[
          {
            field: 'attribute',
            name: 'Атрибуты',
          },
          {
            field: 'description',
            name: 'Описание',
          },
          {
            field: 'allowedValues',
            name: 'Принимаемые значения',
          },
          {
            field: 'defaultValues',
            name: 'Значение по умолчанию',
          },
        ]}
      />
      <EuiText>
        Если метка <EuiCode>srcip</EuiCode> объявлена в правиле несколько раз, применяются следующие
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
  );
};
