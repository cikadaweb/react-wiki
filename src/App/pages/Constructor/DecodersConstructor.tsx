import { useState, Fragment } from "react";
import "@elastic/eui/dist/eui_theme_light.css";

import {
  EuiPage,
  EuiFlexItem,
  EuiTitle,
  EuiFlexGroup,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiPanel,
  EuiButtonEmpty,
  EuiTabs,
  EuiTab,
  EuiSpacer,
  EuiPopover,
  EuiContextMenu,
  EuiButtonIcon,
} from "@elastic/eui";

import uuid from "uuid/v4";

import changeFieldHandler from "./utils/change-field-handler";
import { IRuleChildren, ITab } from "./types";
import ConstructorTabs from "./constants/const.toggle-buttons";
import convertToIndentCode from "./utils/create-rule-tag";
import loadXML from "./utils/load-xml";

import XMLConstructor from "./xml-constructor/XMLConstructor";
import XMLTextView from "./xml-text-view/xml-text-view";

import { RulesetHandler } from "./RulesClass";

export const checkFilenameXMLExtension = (filename: string): string => {
  let filenameParams = filename.split(".");
  if (filenameParams.includes("xml")) {
    return filename;
  }
  return filename + ".xml";
};

const DecodersConstructor = () => {
  const initialRules = [
    {
      id: "1",
      nodeName: "rule",
      value: "Initial Rule 1",
      children: [],
      attributes: new Map([
        ["id", "1"],
        ["level", "1"],
      ]),
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [isHelpPopupOpened, setHelpPopupOpened] = useState(false);
  const [selectedTab, setSelectedTab] = useState("constructor");

  const [rules, setRules] = useState<IRuleChildren[]>(initialRules);

  const [fileName, setFileName] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [groupName, setGroupName] = useState("");

  const [showWarningRestart, setShowWarningRestart] = useState(false);

  const [isFieldsFilled, setFieldsFilled] = useState(true);
  const [isFileNameFilled, setFileNameFilled] = useState(false);
  const [isGroupNameFilled, setGroupNameFilled] = useState(false);
  const [isRuleSerialFilled, setRuleSerialFilled] = useState(false);
  const [isRuleLevelFilled, setRuleLevelFilled] = useState(false);
  const [isDescFilled, setDescFilled] = useState(false);

  const loadXMLHandler = (xmlString: string) => {
    if (xmlString === undefined || xmlString === null || xmlString === "") {
      alert("Please Copy and Paste XML in the text area");
      return false;
    }
    const { rules, groupName, comments } = loadXML(xmlString);
    setRules(rules);
    setGroupName(groupName);
    setComments(comments);
    return true;
  };

  const onTabChange = (id: string) => {
    setSelectedTab(id);
  };

  const addRule = (obj: IRuleChildren, index: number = 0) => {
    setRules((prev) => {
      const arr = [...prev];
      arr.splice(index, 0, obj);
      return arr;
    });
  };

  const deleteRule = (id: string) => {
    setRules((prev) => prev.filter((item) => item.id !== id));
  };

  const updateRule = (newRule: IRuleChildren) => {
    setRules((prev) => {
      return prev.map((rule) => (rule.id === newRule.id ? newRule : rule));
    });
  };

  const checkFields = () => {
    if (fileName === "") {
      setFileNameFilled(true);
    } else {
      setFileNameFilled(false);
    }
    if (groupName === "") {
      setGroupNameFilled(true);
    } else {
      setGroupNameFilled(false);
    }
    rules.forEach((item) => {
      if (item.attributes.get("id") === "") {
        setRuleSerialFilled(true);
      } else {
        setRuleSerialFilled(false);
      }
      if (item.attributes.get("level") === "") {
        setRuleLevelFilled(true);
      } else {
        setRuleLevelFilled(false);
      }
      if (item.children[0].value === "") {
        setDescFilled(true);
      } else {
        setDescFilled(false);
      }
    });
  };

  const renderTabs = (tabs: ITab[]): JSX.Element[] => {
    return tabs.map((item) => {
      return (
        <EuiTab
          key={item.id}
          onClick={() => onTabChange(item.id)}
          title={item.label}
          isSelected={item.id === selectedTab}
        >
          {item.label}
        </EuiTab>
      );
    });
  };

  const deleteAll = () => {
    setFieldsFilled(true);
    setFileNameFilled(false);
    setGroupNameFilled(false);
    setRuleSerialFilled(false);
    setRuleLevelFilled(false);
    setDescFilled(false);
    setRules([
      {
        id: uuid(),
        attributes: new Map(),
        children: [],
        value: "",
        nodeName: "rule",
      },
    ]);
    setGroupName("");
    setComments([]);
  };

  const saveFile = async () => {
    try {
      checkFields();
      if (
        fileName &&
        groupName !== "" &&
        rules.every((rule) => {
          return (
            rule.children[0].value !== "" &&
            rule.attributes.get("level") !== "" &&
            rule.attributes.get("id") !== ""
          );
        })
      ) {
        const rulesetHandler = new RulesetHandler("rules");
        const content = convertToIndentCode(rules, null, comments, groupName);
        await rulesetHandler.updateFile(
          checkFilenameXMLExtension(fileName),
          content,
          true
        );
        setShowWarningRestart(true);
        setFieldsFilled(true);
        deleteAll();
        setFileName("");
      } else {
        setFieldsFilled(false);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const tabContent = () => {
    if (selectedTab === "constructor") {
      return (
        <XMLConstructor
          checkers={{
            ruleSerial: isRuleSerialFilled,
            ruleLevel: isRuleLevelFilled,
            ruleDesc: isDescFilled,
          }}
          addRule={addRule}
          deleteRule={deleteRule}
          updateRule={updateRule}
          rules={rules}
        />
      );
    }

    return (
      <XMLTextView
        rules={rules}
        groupName={groupName}
        comments={comments}
        loadXMLHandler={loadXMLHandler}
      />
    );
  };

  const helpButton = (
    <EuiButtonIcon
      onClick={() => setHelpPopupOpened(true)}
      iconType="questionInCircle"
      aria-label="Heart"
    />
  );

  const helpPanels = [
    {
      id: 0,
      title: "Подробнее об этом разделе",
      items: [
        {
          name: "Синтаксис правил",
          onClick: (ev) => {
            setHelpPopupOpened(true);
            console.log(
              `AppNavigate.navigateToModule(ev, 'manager', { tab: 'helpPage' });`
            );
          },
        },
      ],
    },
  ];

  return (
    <EuiPage style={{ padding: "30px" }}>
      <EuiFlexGroup direction="column">
        <EuiFlexGroup
          style={{ padding: "20px", display: "flex", alignItems: "center" }}
        >
          <EuiFlexItem>
            <EuiTitle>
              <h1>Конструктор XML</h1>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiPopover
              button={helpButton}
              isOpen={isHelpPopupOpened}
              closePopover={() => {
                setHelpPopupOpened(false);
              }}
              panelPaddingSize="none"
            >
              <EuiContextMenu initialPanelId={0} panels={helpPanels} />
            </EuiPopover>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              onClick={(ev) => {
                console.log(
                  `AppNavigate.navigateToModule(ev, 'manager', { tab: 'rules' });`
                );
              }}
              iconType="folderClosed"
            >
              Редактировать существующие правила
            </EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty onClick={() => {}} iconType="exportAction">
              Экспорт в формате
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiFlexItem grow={false}>
          <EuiFormRow
            label={<div style={{ fontSize: "16px" }}>Имя XML файла</div>}
          >
            <EuiFieldText
              value={fileName}
              onChange={(e) => {
                changeFieldHandler(e, setFileName);
              }}
              type="text"
              className="filename_input"
              isInvalid={isFileNameFilled && !fileName}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiTabs size="m">{renderTabs(ConstructorTabs)}</EuiTabs>
        {!isLoading && (
          <EuiFlexItem>
            <EuiPage>
              <EuiFlexGroup direction={"column"}>
                <EuiPanel style={{ padding: "0 40px 20px 40px" }}>
                  {selectedTab === "constructor" && (
                    <>
                      <EuiFlexGroup
                        style={{ marginTop: "20px" }}
                        alignItems={"center"}
                        justifyContent={"spaceBetween"}
                      >
                        <EuiFlexItem style={{ marginLeft: 0 }} grow={false}>
                          <p
                            className="euiText"
                            style={{
                              alignSelf: "flex-start",
                              color: "red",
                              paddingBottom: "15px",
                            }}
                          >
                            {isFieldsFilled ||
                            (fileName &&
                              groupName &&
                              rules.every((rule) => {
                                return (
                                  rule.children[0].value !== "" &&
                                  rule.attributes.get("level") !== "" &&
                                  rule.attributes.get("id") !== ""
                                );
                              }))
                              ? ""
                              : "Заполните все обязательные поля!"}
                          </p>
                          <EuiFormRow label={<h3>Задать имя группы</h3>}>
                            <EuiFieldText
                              value={groupName}
                              onChange={(e) => {
                                changeFieldHandler(e, setGroupName);
                              }}
                              isInvalid={isGroupNameFilled && !groupName}
                              type="text"
                            />
                          </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexGroup justifyContent={"flexEnd"}>
                          <EuiFlexItem grow={false}>
                            <EuiButton
                              onClick={deleteAll}
                              fill
                              color={"danger"}
                            >
                              Очистить
                            </EuiButton>
                          </EuiFlexItem>
                          <EuiFlexItem grow={false}>
                            <EuiButton
                              onClick={saveFile}
                              fill
                              color={"primary"}
                            >
                              Сохранить
                            </EuiButton>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </EuiFlexGroup>
                      <EuiSpacer size="l" />
                      {showWarningRestart && (
                        <Fragment>
                          {/* <WzRestartClusterManagerCallout
                              onRestarted={() => setShowWarningRestart(false)}
                              onRestartedError={() =>
                                setShowWarningRestart(false)
                              }
                            /> */}
                          <div>WzRestartClusterManagerCallout</div>
                          <EuiSpacer size="s" />
                        </Fragment>
                      )}
                    </>
                  )}
                  {tabContent()}
                </EuiPanel>
              </EuiFlexGroup>
            </EuiPage>
          </EuiFlexItem>
        )}
      </EuiFlexGroup>
    </EuiPage>
  );
};

export default DecodersConstructor;
