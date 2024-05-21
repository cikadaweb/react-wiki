import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  EuiFlexGroup,
  EuiPage,
  EuiTitle,
  EuiBasicTable,
  EuiFlexItem,
  EuiPanel,
  EuiCodeBlock,
  EuiText,
  EuiCode,
  EuiCallOut,
  EuiSpacer,
} from "@elastic/eui";
import { items } from "../constants/HelpSectionsInfo";
import { Srcip } from "../help-sections/srcip";
import { Dstip } from "../help-sections/dstip";
import { Srcport } from "../help-sections/srcport";
import { Dstport } from "../help-sections/dtsport";
import { Data } from "../help-sections/data";
import { ExtraData } from "../help-sections/extra-data";
import { User } from "../help-sections/user";
import { SystemName } from "../help-sections/system-name";
import { ProgramName } from "../help-sections/program-name";
import { Hostname } from "../help-sections/hostname";
import { Time } from "../help-sections/time";
import { Weekday } from "../help-sections/weekday";
import { Id } from "../help-sections/id";
import { Url } from "../help-sections/url";
import { LocationSection } from "../help-sections/location";
import { Action } from "../help-sections/action";
import { Status } from "../help-sections/status";
import { Srcgeoip } from "../help-sections/srcgeoip";
import { Dstgeoip } from "../help-sections/dstgeoip";
import { IfSid } from "../help-sections/if-sid";
import { IfGroup } from "../help-sections/if-group";
import { IfLevel } from "../help-sections/if-level";
import { IfMatchedSid } from "../help-sections/if-matched-sid";
import { IfMatchedGroup } from "../help-sections/if-matched-group";
import { SameField } from "../help-sections/same-field";
import { DifferentSrcgeoip } from "../help-sections/different-srcgeoip";
import { Description } from "../help-sections/description";
import { List } from "../help-sections/list";
import { Info } from "../help-sections/info";
import { Options } from "../help-sections/options";
import { CheckDiff } from "../help-sections/check-diff";
import { Group } from "../help-sections/group";
import { Mitre } from "../help-sections/mitre";
import { Var } from "../help-sections/var";
import { RegexSyntax } from "../help-sections/regex-syntax";
import { Pcre } from "../help-sections/pcre";
import { SregexSyntax } from "../help-sections/sregex-syntax";
import { Rule } from "../help-sections/rule";
import { Protocol } from "../help-sections/protocol";
import { BadWords } from "../help-sections/bad-words";

const columns = [
  {
    field: "name",
    name: "Наименование",
    width: "20%",
  },
  {
    field: "option",
    name: "Опция",
    width: "10%",
  },
  {
    field: "values",
    name: "Принимаемые значения",
  },
  {
    field: "description",
    name: "Описание",
  },
];

const xml = `<rule id="504" level="3">
    <if_sid>500</if_sid>
    <match>Agent disconnected</match>
    <description>Компонент программного обеспечения отключен.</description>
    <description>Агент OSSEC отключен.</description>
    <mitre>
      <id>T1089</id>
    </mitre>
    <!--<group>pci_dss_10.6.1,pci_dss_10.2.6,gpg13_10.1,gdpr_IV_35.7.d,hipaa_164.312.b,nist_800_53_AU.6,nist_800_53_AU.14,nist_800_53_AU.5,tsc_CC7.2,tsc_CC7.3,tsc_CC6.8,</group> -->
    <group>ТСБ-34,</group>
  </rule>`;

export const HelpPage = () => {
  return (
    <EuiPage>
      <EuiFlexGroup direction="column">
        <EuiFlexItem>
          <EuiTitle>
            <h1>Синтаксис правил</h1>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel>
            <EuiFlexGroup direction="column">
              <EuiFlexItem>
                Примеры правил
                <EuiSpacer size="xs" />
                <EuiCodeBlock language="xml" isCopyable>
                  {xml}
                </EuiCodeBlock>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiBasicTable items={items} columns={columns} />
              </EuiFlexItem>
              <Rule />
              <SregexSyntax />
              <RegexSyntax />
              <Pcre />
              <Srcip />
              <Dstip />
              <Srcport />
              <Dstport />
              <Data />
              <ExtraData />
              <User />
              <SystemName />
              <ProgramName />
              <Protocol />
              <Hostname />
              <Time />
              <Weekday />
              <Id />
              <Url />
              <LocationSection />
              <Action />
              <Status />
              <Srcgeoip />
              <Dstgeoip />
              <IfSid />
              <IfGroup />
              <IfLevel />
              <IfMatchedSid />
              <IfMatchedGroup />
              <EuiFlexItem>
                <EuiTitle>
                  <h2>if_fts</h2>
                </EuiTitle>
                <EuiText>
                  Заставляет декодер, обработавший событие, учитывать строку
                  fts.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<if_fts />`}</EuiCode>
                </EuiText>
                <EuiCallOut>
                  Примечание: Динамические фильтры <EuiCode>same_field</EuiCode>{" "}
                  или <EuiCode>not_same_field</EuiCode> не будут работать со
                  статическими полями (<EuiCode>user</EuiCode>,{" "}
                  <EuiCode>srcip</EuiCode>, <EuiCode>dstip</EuiCode> и т. д.), и
                  вместо них необходимо использовать определенные.
                </EuiCallOut>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_id</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный идентификатор должен совпадать.
                  Этот параметр используется в сочетании с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_id/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_id</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный идентификатор должен быть
                  другим. Этот параметр используется в сочетании с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<different_id/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_srcip</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный исходный IP-адрес должен
                  совпадать. Этот вариант используется совместно с frequency и
                  timeframe.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_srcip/>`}</EuiCode>
                </EuiText>
                <EuiText>
                  Устаревшая метка <EuiCode>same_source_ip</EuiCode> работает
                  как псевдоним для
                  <EuiCode>same_srcip</EuiCode>.
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_srcip</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный исходный IP-адрес должен быть
                  другим. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_srcip />`}</EuiCode>
                </EuiText>
                <EuiText>
                  Устаревшая метка <EuiCode>not_same_source_ip</EuiCode>{" "}
                  работает как псевдоним для <EuiCode>different_srcip</EuiCode>.
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_dstip</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный исходный IP-адрес должен
                  совпадать. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_dstip />`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_dstip</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный исходный IP-адрес должен быть
                  другим. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_dstip />`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_srcport</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный исходный порт должен совпадать.
                  Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_srcport />`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_srcport</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный исходный порт должен быть
                  другим. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_srcport/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_dstport</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный исходный порт должен совпадать.
                  Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_dstport />`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_dstport</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированный исходный порт должен быть
                  другим. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_dstport />`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_location</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что местоположение должно быть одинаковым. Этот
                  вариант используется совместно с <EuiCode>frequency</EuiCode>{" "}
                  и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_location/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_location</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодированное местоположение должно быть
                  другим. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_location/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_srcuser</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что исходный декодированный пользватель должен быть
                  одинаковым. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_srcuser/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_srcuser</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что исходный декодированный пользватель должен быть
                  другим. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_srcuser/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_user</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что исходный декодированный пользватель должен быть
                  одинаковым. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_user/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_user</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что исходный декодированный пользватель должен быть
                  различны. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<different_user/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <SameField />
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_field</h2>
                </EuiTitle>
                <EuiText>
                  Это противоположное значение параметра{" "}
                  <EuiCode>same_field</EuiCode>. Значение динамического поля,
                  указанное в этой опции, должно отличаться от тех, которые были
                  найдены в предыдущих событиях, несколько раз в течение
                  требуемого периода времени
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_field>key2</different_field>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>global_frequency</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что события всех агентов будут учитываться при
                  использовании параметров частоты и{" "}
                  <EuiCode>timeframe</EuiCode>. По умолчанию для увеличения
                  счетчика частоты для правила будут учитываться только события,
                  сгенерированные одним и тем же агентом.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<global_frequency/>`}</EuiCode>
                </EuiText>
                <EuiText>
                  Примечание: Хотя метка содержит слово global, этот параметр
                  работает на уровне менеджера, а не на уровне кластера.
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_protocol</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемый протокол должен быть одинаковым.
                  Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_protocol/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_action</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое значение поля должено быть
                  одинаковым. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_action/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_action </h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое значение поля должено быть
                  отлично. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_action/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_data</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемый данные должены быть одинаковыми.
                  Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_data/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_data</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемые данные должены быть отличны. Этот
                  вариант используется совместно с <EuiCode>frequency</EuiCode>{" "}
                  и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<different_data/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_extra_data</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемые дополнительные данные должены быть
                  одинаковыми. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_extra_data/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_extra_data</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемые дополнительные данные должены быть
                  отличны. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_extra_data/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_status</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемый статус должен быть одинаковым.
                  Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_status/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_status</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое значение статуса должено быть
                  отличны. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_status/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_system_name</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое системное имя должено быть
                  одинаковым. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<same_system_name/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_system_name</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое системное имя должено быть
                  различно. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_system_name/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_url</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое значение url должено быть
                  одинаковым. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_url/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_url</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое значение url должено быть
                  различно. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и<EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<different_url/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_srcgeoip</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое значение srcgeoip должено быть
                  одинаковым. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_srcgeoip/>`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <DifferentSrcgeoip />
              <EuiFlexItem>
                <EuiTitle>
                  <h2>same_dstgeoip</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое значение same_dstgeoip должено
                  быть одинаковым. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования <EuiCode>{`<same_dstgeoip />`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle>
                  <h2>different_dstgeoip</h2>
                </EuiTitle>
                <EuiText>
                  Указывает, что декодируемое значение different_dstgeoip
                  должено быть различно. Этот вариант используется совместно с{" "}
                  <EuiCode>frequency</EuiCode> и <EuiCode>timeframe</EuiCode>.
                </EuiText>
                <EuiText>
                  Пример использования{" "}
                  <EuiCode>{`<different_dstgeoip />`}</EuiCode>
                </EuiText>
              </EuiFlexItem>
              <Description />
              <List />
              <Info />
              <Options />
              <CheckDiff />
              <Group />
              <Mitre />
              <Var />
              <BadWords />
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
  );
};

export default HelpPage;
