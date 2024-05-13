import React from 'react';
import { EuiBasicTable, EuiCodeBlock, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';

export const List = () => {
  const columns = [
    {
      field: 'defaultValue',
      name: 'Значение по умолчанию',
    },
    {
      field: 'allowedValue',
      name: 'Допустимые значения',
    },
  ];
  const items = [
    {
      option: '-',
      allowedValue:
        'Путь к файлу CDB, который будет использоваться для поиска в каталоге OSSEC. Также должен быть включен в файл ossec.conf.',
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
      name: '',
    },
  ];
  const possibleAtrItems = [
    {
      attribute: 'field',
      description:
        'ключ в БД (CDB):  srcip, srcport, dstip, dstport, extra_data, user, url, id, hostname, program_name, status, action, dynamic field.',
      allowedValues: '',
    },
    {
      attribute: 'lookup',
      description: 'match_key',
      allowedValues:
        'ключ для поиска в cdb и будет соответствовать, если ключ присутствует. По умолчанию',
    },
    {
      attribute: '-',
      description: 'not_match_key',
      allowedValues: 'ключ для поиска и будет совпадать, если его нет в базе данных.',
    },
    {
      attribute: '-',
      description: 'match_key_value',
      allowedValues:
        'поиск в cdb. Оно будет сравниваться с регулярным выражением из атрибута check_value.',
    },
    {
      attribute: '-',
      description: 'address_match_key',
      allowedValues:
        'IP-адрес и ключ для поиска в базе данных будут совпадать, если ключ присутствует.',
    },
    {
      attribute: '-',
      description: 'not_address_match_key',
      allowedValues: 'IP-адрес и ключ для поиска будут совпадать, если его НЕТ в базе данных.',
    },
    {
      attribute: '-',
      description: 'address_match_key_value',
      allowedValues:
        'IP-адрес для поиска в cdb. Оно будет сравниваться с регулярным выражением из атрибута check_value.',
    },
    {
      attribute: 'check_value',
      description:
        'регулярное выражение для сопоставления значения, извлеченного из cdb при использовании типов: address_match_key_value, match_key_value',
      allowedValues: '',
    },
  ];

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>list</h2>
      </EuiTitle>
      <EuiText>Выполните поиск CDB, используя список ossec.</EuiText>
      <EuiBasicTable items={items} columns={columns} />
      <EuiBasicTable items={possibleAtrItems} columns={possibleAtrColumns} />
      <EuiFlexItem>
        <EuiText>Пример:</EuiText>
        <EuiCodeBlock language="xml">
          {`
<rule id="80780" level="3">
    <if_sid>80700</if_sid>
    <list field="audit.key" lookup="match_key_value" check_value="write">etc/lists/audit-keys</list>
    <description>Аудит: просмотр — доступ для записи</description>
    <group>audit_watch_write,gdpr_IV_30.1.g,</group>
</rule>
          `}
        </EuiCodeBlock>
        <EuiText>
          Правило будет искать в поле «audit.key» из CDB. Где он будет проверять, равено ли значение
          поля «write», если это правдо то срабтает правило уровня 3.
        </EuiText>
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
