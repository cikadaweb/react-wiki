export const items = [
  {
    name: '',
    option: 'rule',
    values: 'Любые см. таблицу rule',
    description: 'Он запускает новое правило и его определяющие параметры.',
  },
  {
    name: '',
    option: 'match',
    values: 'Любые см. таблицу Regular expressions раздел sregex',
    description:
      'Он попытается найти совпадение в журнале, используя sregex по умолчанию, решив, следует ли запускать правило.',
  },
  {
    name: 'Регулярное выражение regex',
    option: 'regex',
    values: 'Любые см. таблицу Regular expressions раздел regex',
    description: 'Он делает то же самое, что и match, но с регулярным выражением  regex.',
  },
  {
    name: 'Имя декодера',
    option: 'decoded_as',
    values: 'любое имя декодера',
    description:
      'Он будет (должен) соответствовать журналам, которые были декодированы определенным декодером.',
  },
  {
    name: 'Типы журналов',
    option: 'category',
    values: 'см. Типы журналов',
    description: 'Должен совпадать с типом журналов с которфх собирает информацию.',
  },
  {
    name: 'Поле "order" в декодере',
    option: 'field',
    values: 'Имя и регулярное выражение см таблицу Regular expressions',
    description:
      'Он будет сравнивать поле, извлеченное декодером, в order (см. "Синтексис Декодеров") по порядку с регулярным выражением.',
  },
  {
    name: 'IP адрес источника',
    option: 'srcip',
    values: 'Любые IP адреса',
    description:
      'Сравнивается IP-адрес с IP-адресом, декодированным как srcip. Если использовать !  то будут исключать эти IP адреса.',
  },
  {
    name: 'IP адрес получателя',
    option: 'dstip',
    values: 'Любые IP адреса',
    description:
      'Сравнивается IP-адрес с IP-адресом, декодированным как dstip. Если использовать !  то будут исключать эти IP адреса.',
  },
  {
    name: 'PORT источника',
    option: 'srcport',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее порт, со значением, декодированным как  srcport',
  },
  {
    name: 'PORT назначения',
    option: 'dstport',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее порт, со значением, декодированным как  dstport',
  },
  {
    name: 'Данные в поле data',
    option: 'data',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее данные, со значением, декодированным как  data',
  },
  {
    name: 'Данные в поле extra_data',
    option: 'extra_data',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее дополнительные данные, со значением, декодированным как  extra_data',
  },
  {
    name: 'Пользователь',
    option: 'user',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее пользователя, со значением, декодированным как  user',
  },
  {
    name: 'Имя системы',
    option: 'system_name',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее название системы, со значением, декодированным как  system_name',
  },
  {
    name: 'Имя программы',
    option: 'program_name',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее имя программы, со значением, предварительно декодированным как program_name',
  },
  {
    name: 'Протокол',
    option: 'protocol',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее имя протокола, со значением, предварительно декодированным как protocol',
  },
  {
    name: 'Имя хоста',
    option: 'hostname',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее имя хоста, со значением, предварительно декодированным как  hostname',
  },
  {
    name: 'Время',
    option: 'time',
    values: 'Любое время в формате (чч:мм - чч:мм)',
    description:
      'Он проверяет, было ли событие сгенерировано в течение этого временного диапазона.',
  },
  {
    name: 'День',
    option: 'weekday',
    values: 'monday - sunday, weekdays, weekends',
    description: 'Он проверяет, было ли событие сгенерировано в определенные дни недели.',
  },
  {
    name: 'Поле "id" в декодере',
    option: 'id',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее идентификатор, со значением, декодированным как id',
  },
  {
    name: 'Поле "url" в декодере',
    option: 'url',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее URL-адрес, со значением, декодированным как url',
  },
  {
    name: 'Поле "location" в декодере',
    option: 'location',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее местоположение, со значением, предварительно декодированным как location',
  },
  {
    name: 'Поле "action" в декодере',
    option: 'action',
    values: '"строка" или см. таблицу Regular expressions',
    description:
      'Он сравнивает строку или регулярное выражение, представляющее действие, со значением, декодированным как action',
  },
  {
    name: 'Поле "status" в декодере',
    option: 'status',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее статус, со значением, расшифрованным как status',
  },
  {
    name: 'Поле "srcgeoip" в декодере',
    option: 'srcgeoip',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее источник GeoIP, со значением, декодированным как srcgeoip',
  },
  {
    name: 'Поле "dstgeoip" в декодере',
    option: 'dstgeoip',
    values: 'Любые см. таблицу Regular expressions',
    description:
      'Он сравнивает регулярное выражение, представляющее пункт назначения GeoIP, со значением, декодированным как dstgeoip',
  },
  {
    name: 'ID-родительского правила',
    option: 'if_sid',
    values: 'Список идентификаторов правил, разделенных запятыми или пробелами.',
    description:
      'Он работает аналогично родительскому декодеру. Он сработает если ранее определен параментр (родитель) в списке в файле.',
  },
  {
    name: 'Имя группы правил',
    option: 'if_group',
    values: 'Любое название группы.',
    description: 'Он будет совпадать, если указанная группа совпадала ранее.',
  },
  {
    name: 'Уровень родительского правила',
    option: 'if_level',
    values: 'значение от 1 до 16',
    description: 'Он будет совпадать, если этот уровень уже был активирован другим правилом.',
  },
  {
    name: 'ID правила работающего в течении заданного времени',
    option: 'if_matched_sid',
    values: 'Любой идентификатор правила (число).',
    description:
      'Подобно if_sid, но он будет соответствовать (срабатывать) только в том случае, если идентификатор был активирован в течение определенного периода времени.',
  },
  {
    name: 'Название группы запущеннной течении заданного времени',
    option: 'if_matched_group',
    values: 'Любое название группы.',
    description:
      'Аналогичен if_group, но он будет соответствовать (срабатывать) только в том случае, если группа была запущена в течение определенного периода времени.',
  },
  {
    name: 'Совпадение по полю "id" в декодере',
    option: 'same_id',
    values: '',
    description: 'Декодер id должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "id" в декодере',
    option: 'different_id',
    values: '',
    description: 'Декодер id должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_srcip" в декодере',
    option: 'same_srcip',
    values: '',
    description: 'Декодер srcip должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_srcip" в декодере',
    option: 'different_srcip',
    values: '',
    description: 'Декодер srcip должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_dstip" в декодере',
    option: 'same_dstip',
    values: '',
    description: 'Декодер dstip должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_dstip" в декодере',
    option: 'different_dstip',
    values: '',
    description: 'Декодер dstip должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_srcport" в декодере',
    option: 'same_srcport',
    values: '',
    description: 'Декодер srcport должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_srcport" в декодере',
    option: 'different_srcport',
    values: '',
    description: 'Декодер srcport должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_dstport" в декодере',
    option: 'same_dstport',
    values: '',
    description: 'Декодер dstport должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_dstport" в декодере',
    option: 'different_dstport',
    values: '',
    description: 'Декодер dstport должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_location" в декодере',
    option: 'same_location',
    values: '',
    description: 'location  должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_location" в декодере',
    option: 'different_location',
    values: '',
    description: 'location  должен быть различны.',
  },
  {
    name: 'Совпадение по полю "same_srcuser" в декодере',
    option: 'same_srcuser',
    values: '',
    description: 'Декодер srcuser должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_srcuser" в декодере',
    option: 'different_srcuser',
    values: '',
    description: 'Декодер srcuser должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_user" в декодере',
    option: 'same_user',
    values: '',
    description: 'Декодер user должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_user" в декодере',
    option: 'different_user',
    values: '',
    description: 'Декодер user должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_field" в декодере',
    option: 'same_field',
    values: '',
    description: 'Декодер field должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_field" в декодере',
    option: 'different_field',
    values: '',
    description: 'Декодер field должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_protocol" в декодере',
    option: 'same_protocol',
    values: '',
    description: 'Декодер protocol должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_protocol" в декодере',
    option: 'different_protocol',
    values: '',
    description: 'Декодер protocol должены быть различны',
  },
  {
    name: 'Совпадение по полю "same_action" в декодере',
    option: 'same_action',
    values: '',
    description: 'Декодер action должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_action" в декодере',
    option: 'different_action',
    values: '',
    description: 'Декодер action должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_data" в декодере',
    option: 'same_data',
    values: '',
    description: 'Декодер data должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_data" в декодере',
    option: 'different_data',
    values: '',
    description: 'Декодер data должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_extra_data" в декодере',
    option: 'same_extra_data',
    values: '',
    description: 'Декодер extra_data должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_extra_data" в декодере',
    option: 'different_extra_data',
    values: '',
    description: 'Декодер extra_data должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_status" в декодере',
    option: 'same_status',
    values: '',
    description: 'Декодер same_status должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_status" в декодере',
    option: 'different_status',
    values: '',
    description: 'Декодер same_status должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_system_name" в декодере',
    option: 'same_system_name',
    values: '',
    description: 'Декодер system_name должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_system_name" в декодере',
    option: 'different_system_name',
    values: '',
    description: 'Декодер system_name должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_url" в декодере',
    option: 'same_url',
    values: '',
    description: 'Декодер same_url должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_url" в декодере',
    option: 'different_url',
    values: '',
    description: 'Декодер same_url должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_srcgeoip" в декодере',
    option: 'same_srcgeoip',
    values: '',
    description: 'Декодер same_srcgeoip должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_srcgeoip" в декодере',
    option: 'different_srcgeoip',
    values: '',
    description: 'Декодер same_srcgeoip должены быть различны.',
  },
  {
    name: 'Совпадение по полю "same_dstgeoip" в декодере',
    option: 'same_dstgeoip',
    values: '',
    description: 'Декодер same_dstgeoip должен быть одинаковым.',
  },
  {
    name: 'Не совпадение по полю "different_dstgeoip" в декодере',
    option: 'different_dstgeoip',
    values: '',
    description: 'Декодер same_dstgeoip должены быть различны.',
  },
  {
    name: '',
    option: 'description',
    values: 'Любое слово',
    description: 'Предоставляет удобочитаемое описание, объясняющее цель правила.',
  },
  {
    name: 'Поиск CDB',
    option: 'list',
    values: 'Путь к файлу CDB',
    description: 'Выполните поиск CDB, используя список ossec.',
  },
  {
    name: 'Доп информация',
    option: 'info',
    values: 'Любое слово',
    description: 'Дополнительная информация с использованием определенных атрибутов.',
  },
  {
    name: 'Доп пораметры',
    option: 'options',
    values: 'значение из таблици (см. описание options)',
    description: 'Дополнительные параметры правил, которые можно использовать.',
  },
  {
    name: 'Изменеие выводв команд',
    option: 'check_diff',
    values: '',
    description: 'Определяет, когда изменяется вывод команды.',
  },
  {
    name: 'Назначить группу правил',
    option: 'group',
    values: 'Любое слово',
    description: 'Добавляет в оповещение дополнительные группы',
  },
  {
    name: 'MITRE ATT&CK',
    option: 'mitre',
    values: 'значение из таблици (см. описание mitre)',
    description: 'Содержит идентификаторы Mitre Technique, соответствующие правилу.',
  },
  {
    name: 'Задать переменную',
    option: 'var',
    values: 'Имя для переменной. Наиболее используемое: BAD_WORDS',
    description:
      'Определяет переменную, которую можно использовать в любом месте внутри одного и того же файла.',
  },
];

export const rules = [
  {
    parameter: 'level',
    allowedValues: '0-16',
    definition: 'Указывает уровень правила. Оповещения и ответы используют это значение.',
  },
  {
    parameter: 'id',
    allowedValues: '1 to 999999',
    definition: 'Указывает идентификатор правила.',
  },
  {
    parameter: 'maxsize',
    allowedValues: '1 to 9999',
    definition: 'Указывает максимальный размер события.',
  },
  {
    parameter: 'frequency',
    allowedValues: '2 to 9999',
    definition: 'Сколько раз правило должно совпасть до срабатывания.',
  },
  {
    parameter: 'timeframe',
    allowedValues: '1 to 99999',
    definition:
      'Таймфрейм в секундах. Эта опция предназначена для использования с опцией frequency.',
  },
  {
    parameter: 'ignore',
    allowedValues: '1 to 999999',
    definition:
      'Время (в секундах) игнорирования этого правила после его запуска (во избежание флуда).',
  },
  {
    parameter: 'overwrite',
    allowedValues: 'yes, no',
    definition:
      'Используется для замены правила локальными изменениями. Чтобы поддерживать согласованность между загруженными правилами, if_sid, if_group, if_level, if_matched_sid, и if_matched_group метки не учитываются при перезаписи правила. Если какой-либо из них встречается, преобладает исходное значение.',
  },
  {
    parameter: 'noalert',
    allowedValues: '0, 1',
    definition:
      '0 (оповещения, значение по умолчанию) или 1 (нет оповещений). Если для параметра noalert установлено значение 1, событие продолжает анализировать другие правила, несмотря на то, что правило совпадает.',
  },
];

export const sregex = [
  {
    symbol: '^',
    description: 'Используется чтобы указать начало текста',
  },
  {
    symbol: '$',
    description: 'Используется чтобы указать конец текста',
  },
  {
    symbol: '|',
    description: 'Используется чтобы создать логику: or , между несколькими шаблонами',
  },
  {
    symbol: '!',
    description: 'Используется чтобы создать  отрицать выражение',
  },
];

export const regex = [
  {
    symbol: '\\w',
    allowedValues: "A-Z, a-z, 0-9, '-', '@', '_'",
  },
  {
    symbol: '\\d',
    allowedValues: '0-9',
  },
  {
    symbol: '\\s',
    allowedValues: 'Spaces " "',
  },
  {
    symbol: '\\t',
    allowedValues: 'Вкладки',
  },
  {
    symbol: '\\p',
    allowedValues: '()*+,-.:;<=>?[]!"\'#$%&',
  },
  {
    symbol: '\\W',
    allowedValues: 'все что не \\w',
  },
  {
    symbol: '\\D',
    allowedValues: 'все что не \\d',
  },
  {
    symbol: '\\S',
    allowedValues: 'все что не \\s',
  },
  {
    symbol: '.',
    allowedValues: 'все',
  },
];

export const modifiers = [
  {
    symbol: '+',
    allowedValues: 'соответствовать один или несколько раз',
  },
  {
    symbol: '*',
    allowedValues: 'соответствовать ноль или более раз',
  },
];

export const specSymbols = [
  {
    symbol: '^',
    allowedValues: 'Используется чтобы указать начало текста',
  },
  {
    symbol: '$',
    allowedValues: 'Используется чтобы указать конец текста',
  },
  {
    symbol: '|',
    allowedValues: 'Используется чтобы создать логику: or , между несколькими шаблонами',
  },
];

export const pcre = [
  {
    symbol: '.',
    action: 'Любой символ, кроме новой строки',
  },
  {
    symbol: '\\d',
    action: 'Любая десетичная цифра [0-9]',
  },
  {
    symbol: '\\D',
    action: 'Любой символ, не являющийся десятичной цифрой, равный [^0-9]',
  },
  {
    symbol: '\\h',
    action: 'Любой горизонтальный пробел',
  },
  {
    symbol: '\\H',
    action: 'Любой символ, не являющийся горизонтальным пробелом',
  },
  {
    symbol: '\\s',
    action: 'Любой пробельный символ, равный [\\t\\r\\n\\f]',
  },
  {
    symbol: '\\S',
    action: 'Любой символ, не являющийся пробелом, равный [^\\t\\r\\n\\f]',
  },
  {
    symbol: '\\w',
    action: 'Любое "слово" символ',
  },
  {
    symbol: '\\W',
    action: 'Любое "не-слово" символ',
  },
];

export const quantifiers = [
  {
    expression: '?',
    action: '0 or 1, greedy',
  },
  {
    expression: '?+',
    action: '0 or 1, possessive',
  },
  {
    expression: '??',
    action: '0 or 1, lazy',
  },
  {
    expression: '*',
    action: '0 or more, greedy',
  },
  {
    expression: '*+',
    action: '0 or more, possessive',
  },
  {
    expression: '*?',
    action: '0 or more, lazy',
  },
  {
    expression: '+',
    action: '1 or more, greedy',
  },
  {
    expression: '++',
    action: '1 or more, possessive',
  },
  {
    expression: '+?',
    action: '1 or more, lazy',
  },
  {
    expression: '{n}',
    action: 'Exactly n',
  },
  {
    expression: '{n,m}',
    action: 'At least n, no more than m, greedy',
  },
  {
    expression: '{n,m}+',
    action: 'At least n, no more than m, possessive',
  },
  {
    expression: '{n,m}?',
    action: 'At least n, no more than m, lazy',
  },
  {
    expression: '{n,}',
    action: 'n or more, greedy',
  },
  {
    expression: '{n,}+',
    action: 'n or more, possessive',
  },
  {
    expression: '{n,}?',
    action: 'n or more, lazy',
  },
];
