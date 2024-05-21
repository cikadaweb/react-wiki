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
  EuiText,
  EuiSpacer,
  EuiSwitch,
} from "@elastic/eui";
import uuid from "uuid/v4";

import { IRuleChildren } from "../types";

import changeFieldHandler from "../utils/change-field-handler";
import convertToIndentCode from "../utils/create-rule-tag";
import loadXML from "../utils/load-xml";

import RuleXMLConstructor from "../components/RuleXMLConstructor/RuleXMLConstructor";
import RuleXMLText from "../components/RuleXMLText/RuleXMLText";
import WzRestartClusterManagerCallout from '../components/RestartClusterManagerCallout/WzRestartClusterManagerCalloute';

import { RulesetHandler } from "../classes/RulesClass";
import { validateFilenameExtension } from "../utils/validate-filename-extension";

const RulesPage = () => {
  const initialRulesState = [
    {
      id: uuid(),
      nodeName: "rule",
      attributes: new Map(),
      children: [],
      value: "",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [isConstructorMode, setIsConstructorMode] = useState<boolean>(true);

  const [rules, setRules] = useState<IRuleChildren[]>(initialRulesState);

  const [fileName, setFileName] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [groupName, setGroupName] = useState("");

  const [isWazuhMangerRestartAlert, setIsWazuhMangerRestartAlert] = useState(false);

  const [isFieldsFilled, setFieldsFilled] = useState(true);
  const [isFileNameValid, setFileNameValid] = useState(false);
  const [isGroupNameValid, setGroupNameValid] = useState(false);
  const [isRuleSerialValid, setRuleSerialValid] = useState(false);
  const [isRuleLevelValid, setRuleLevelValid] = useState(false);
  const [isDescriptionValid, setDescriptionValid] = useState(false);

  const loadXMLHandler = (xmlString: string) => {
    if (!xmlString || xmlString.trim() === "") {
      alert("Please Copy and Paste XML in the text area");
      return false;
    }
    const { rules, groupName, comments } = loadXML(xmlString);
    setRules(rules);
    setGroupName(groupName);
    setComments(comments);
    return true;
  };

  const onSwitchChange = () => {
    setIsConstructorMode(prevState => !prevState);
  };

  const addRule = (newRule: IRuleChildren, index: number = 0) => {
    setRules((prevRules) => {
      const updatedRules = [...prevRules];
      updatedRules.splice(index, 0, newRule);
      return updatedRules;
    });
  };

  const deleteRule = (id: string) => {
    setRules((prevRules) => prevRules.filter((rule) => rule.id !== id));
  };

  const updateRule = (updatedRule: IRuleChildren) => {
    setRules((prevRules) =>
      prevRules.map((rule) => (rule.id === updatedRule.id ? updatedRule : rule))
    );
  };

  const validateFields = () => {
    setFileNameValid(!!fileName);
    setGroupNameValid(!!groupName);
    setRuleSerialValid(rules.every((rule) => !!rule.attributes.get("id")));
    setRuleLevelValid(rules.every((rule) => !!rule.attributes.get("level")));
    setDescriptionValid(rules.every((rule) => !!rule.children[0].value));
  };

  const resetForm = () => {
    setFieldsFilled(true);
    setFileNameValid(false);
    setGroupNameValid(false);
    setRuleSerialValid(false);
    setRuleLevelValid(false);
    setDescriptionValid(false);
    setRules([
      {
        id: uuid(),
        nodeName: "rule",
        attributes: new Map(),
        children: [],
        value: "",
      },
    ]);
    setGroupName("");
    setComments([]);
  };

  const saveFile = async () => {
    try {
      validateFields();
      if (
        fileName &&
        groupName &&
        rules.every(
          (rule) =>
            rule.children[0].value &&
            rule.attributes.get("level") &&
            rule.attributes.get("id")
        )
      ) {
        const rulesetHandler = new RulesetHandler("rules");
        const content = convertToIndentCode(rules, null, comments, groupName);
        await rulesetHandler.updateFile(
          validateFilenameExtension(fileName),
          content,
          true
        );
        setIsWazuhMangerRestartAlert(true);
        setFieldsFilled(true);
        resetForm();
        setFileName("");
      } else {
        setFieldsFilled(false);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const renderXMLConstructor = () => {
    return (
      <RuleXMLConstructor
        checkers={{
          ruleSerial: isRuleSerialValid,
          ruleLevel: isRuleLevelValid,
          ruleDesc: isDescriptionValid,
        }}
        addRule={addRule}
        deleteRule={deleteRule}
        updateRule={updateRule}
        rules={rules}
      />
    );
  };

  const renderTextConstructor = () => {
    return (
      <RuleXMLText
        rules={rules}
        groupName={groupName}
        comments={comments}
        loadXMLHandler={loadXMLHandler}
      />
    );
  };

  return (
    <EuiPage style={{ padding: "30px" }}>
      <EuiFlexGroup direction="column">

        <EuiFlexItem>
          <EuiTitle size="m">
            <h1>Конструктор правил</h1>
          </EuiTitle>
        </EuiFlexItem>

        <EuiFlexItem>

          <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem>
              <EuiText size="m" style={{marginBottom: '15px'}}>
                Отразить в виде:
              </EuiText>
              <EuiSwitch
                  label="Конструктор / Текст"
                  checked={isConstructorMode}
                  onChange={onSwitchChange}
              />
            </EuiFlexItem>

            <EuiFlexItem>
              <EuiFlexGroup justifyContent={"flexEnd"}>

                <EuiFlexItem grow={false}>
                  <EuiButton
                      onClick={() => {}}
                      iconType="questionInCircle"
                      iconSide="right"
                  >
                    Справочник
                  </EuiButton>
                </EuiFlexItem>

                <EuiFlexItem grow={false}>
                  <EuiButton
                      onClick={resetForm}
                      color="danger"
                      iconType="refresh"
                      iconSide="right"
                  >
                    Очистить форму
                  </EuiButton>
                </EuiFlexItem>

                <EuiFlexItem grow={false}>
                  <EuiButton
                      onClick={saveFile}
                      color="secondary"
                      fill
                      iconType="save"
                      iconSide="right"
                  >
                    Сохранить
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow
              label="Имя XML файла:"
              fullWidth
              helpText="wazuh-rules-example"
          >
            <EuiFieldText
                value={fileName}
                onChange={(e) => {
                  changeFieldHandler(e, setFileName);
                }}
                type="text"
                className="filename_input"
                isInvalid={!fileName && isFileNameValid}
                fullWidth
            />
          </EuiFormRow>
        </EuiFlexItem>

        {!isLoading && (
          <EuiFlexItem>
                  {isConstructorMode && (
                    <EuiFlexGroup direction="column" gutterSize="m">
                      <EuiFlexItem>
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
                                    rule.children[0].value &&
                                    rule.attributes.get("level") &&
                                    rule.attributes.get("id")
                                );
                              }))
                              ? ""
                              : "Please fill in all required fields!"}
                        </p>
                      </EuiFlexItem>

                      <EuiFlexItem>
                        <EuiFormRow
                            label={<h3>Имя группы: </h3>}
                            fullWidth
                        >
                          <EuiFieldText
                              value={groupName}
                              onChange={(e) => {
                                changeFieldHandler(e, setGroupName);
                              }}
                              isInvalid={!groupName && isGroupNameValid}
                              fullWidth
                              type="text"
                          />
                        </EuiFormRow>
                      </EuiFlexItem>

                      {isWazuhMangerRestartAlert && (
                        <Fragment>
                          <WzRestartClusterManagerCallout
                              onRestarted={() => setIsWazuhMangerRestartAlert(false)}
                              onRestartedError={() => setIsWazuhMangerRestartAlert(false)}
                          />
                          <EuiSpacer size="s" />
                        </Fragment>
                      )}
                    </EuiFlexGroup>
                  )}
                  {isConstructorMode
                    ? renderXMLConstructor()
                    : renderTextConstructor()}
          </EuiFlexItem>
        )}
      </EuiFlexGroup>
    </EuiPage>
  );
};

export default RulesPage;
