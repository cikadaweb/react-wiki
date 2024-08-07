enum ERuleParameters {
  'decoded_as' = 'Имя декодера',
  'match' = 'match',
  'category' = 'Типы журналов',
  'id' = 'Поле "id" в декодере',
  'field' = 'Поле "order" в декодере',
  'regex' = 'Регулярное выражение regex',
  'srcip' = 'IP адрес источника',
  'dstip' = 'IP адрес получателя',
  'srcport' = 'PORT источника',
  'dstport' = 'PORT назначения',
  'data' = 'Данные в поле data',
  'extra_data' = 'Данные в поле extra_data',
  'user' = 'Пользователь',
  'system_name' = 'Имя системы',
  'program_name' = 'Имя программы',
  'protocol' = 'Протокол',
  'hostname' = 'Имя хоста',
  'time' = 'Время',
  'weekday' = 'День',
  'url' = 'Поле "url" в декодере',
  'location' = 'Поле "location" в декодере',
  'action' = 'Поле "action" в декодере',
  'status' = 'Поле "status" в декодере',
  'srcgeoip' = 'Поле "srcgeoip" в декодере',
  'dstgeoip' = 'Поле "dstgeoip" в декодере',
  'if_sid' = 'ID-родительского правила',
  'if_group' = 'Имя группы правил',
  'if_level' = 'Уровень родительского правила',
  'if_matched_sid' = 'ID правила работающего в течении заданного времени',
  'if_matched_group' = 'Название группы запущеннной течении заданного времени',
  'same_id' = 'Совподение по полю "id" в декодере',
  'different_id' = 'Не совподение по полю "id" в декодере',
  'same_srcip' = 'Совподение по полю "same_srcip" в декодере',
  'different_srcip' = 'Не совподение по полю "different_srcip" в декодере',
  'same_dstip' = 'Совподение по полю "same_dstip" в декодере',
  'different_dstip' = 'Не совподение по полю "different_dstip" в декодере',
  'same_srcport' = 'Совподение по полю "same_srcport" в декодере',
  'different_srcport' = 'Не совподение по полю "different_srcport" в декодере',
  'same_dstport' = 'Совподение по полю "same_dstport" в декодере',
  'different_dstport' = 'Не совподение по полю "different_dstport" в декодере',
  'same_location' = 'Совподение по полю "same_location" в декодере',
  'different_location' = 'Не совподение по полю "different_location" в декодере',
  'same_srcuser' = 'Не совподение по полю "different_srcuser" в декодере',
  'same_user' = 'Совподение по полю "same_user" в декодере',
  'different_user' = 'Не совподение по полю "different_user" в декодере',
  'same_field' = 'Совподение по полю "same_field" в декодере',
  'different_field' = 'Не совподение по полю "different_field" в декодере',
  'same_protocol' = 'Совподение по полю "same_protocol" в декодере',
  'different_protocol' = 'Не совподение по полю "different_protocol" в декодере',
  'same_action' = 'Совподение по полю "same_action" в декодере',
  'different_action' = 'Не совподение по полю "different_action" в декодере',
  'same_data' = 'Совподение по полю "same_data" в декодере',
  'different_data' = 'Не совподение по полю "different_data" в декодере',
  'same_extra_data' = 'Совподение по полю "same_extra_data" в декодере',
  'different_extra_data' = 'Не совподение по полю "different_extra_data" в декодере',
  'same_status' = 'Совподение по полю "same_status" в декодере',
  'different_status' = 'Не совподение по полю "different_status" в декодере',
  'same_system_name' = 'Совподение по полю "same_system_name" в декодере',
  'different_system_name' = 'Не совподение по полю "different_system_name" в декодере',
  'same_url' = 'Совподение по полю "same_url" в декодере',
  'different_url' = 'Не совподение по полю "different_url" в декодере',
  'same_srcgeoip' = 'Совподение по полю "same_srcgeoip" в декодере',
  'different_srcgeoip' = 'Не совподение по полю "different_srcgeoip" в декодере',
  'same_dstgeoip' = 'Совподение по полю "same_dstgeoip" в декодере',
  'different_dstgeoip' = 'Не совподение по полю "different_dstgeoip" в декодере',
  'list' = 'Поиск CDB',
  'info' = 'Доп информация',
  'options' = 'Доп пораметры',
  'check_diff' = 'Изменеие выводв команд',
  'group' = 'Назначить группу правил',
  'mitre' = 'MITRE',
  'var' = 'Задать переменную',
}

export default ERuleParameters;
