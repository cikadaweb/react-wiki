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

import { IRuleChildren, ITab } from "./types";

import changeFieldHandler from "./utils/change-field-handler";
import ConstructorTabs from "./constants/const.toggle-buttons";
import convertToIndentCode from "./utils/create-rule-tag";
import loadXML from "./utils/load-xml";

import RuleXMLConstructor from "./components/RuleXMLConstructor/RuleXMLConstructor";
import XMLText from "./components/RuleXMLText/RuleXMLText";

import { RulesetHandler } from "./classes/RulesClass";
import { validateFilenameExtension } from "./utils/validate-filename-extension";

const RulesPage = () => {
  const initialRulesState = [
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
  const [isHelpPopupOpen, setHelpPopupOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("constructor");

  const [rules, setRules] = useState<IRuleChildren[]>(initialRulesState);

  const [fileName, setFileName] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [groupName, setGroupName] = useState("");

  const [showWarningRestart, setShowWarningRestart] = useState(false);

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

  const onTabChange = (id: string) => {
    setSelectedTab(id);
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

  const renderTabs = (tabs: ITab[]): JSX.Element[] => {
    return tabs.map((tab) => (
      <EuiTab
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        isSelected={tab.id === selectedTab}
        title={tab.label}
      >
        {tab.label}
      </EuiTab>
    ));
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
        setShowWarningRestart(true);
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
      <XMLText
        rules={rules}
        groupName={groupName}
        comments={comments}
        loadXMLHandler={loadXMLHandler}
      />
    );
  };

  const helpButton = (
    <EuiButtonIcon
      onClick={() => setHelpPopupOpen(true)}
      iconType="questionInCircle"
      aria-label="Help"
    />
  );

  const helpPanels = [
    {
      id: 0,
      title: "Learn More",
      items: [
        {
          name: "Syntax Rules",
          onClick: (ev) => {
            setHelpPopupOpen(true);
            console.log(`Navigate to help section`);
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
              <h1>XML Constructor</h1>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiPopover
              button={helpButton}
              isOpen={isHelpPopupOpen}
              closePopover={() => {
                setHelpPopupOpen(false);
              }}
              panelPaddingSize="none"
            >
              <EuiContextMenu initialPanelId={0} panels={helpPanels} />
            </EuiPopover>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              onClick={(ev) => {
                console.log(`Navigate to rules`);
              }}
              iconType="folderClosed"
            >
              Edit Existing Rules
            </EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty onClick={() => {}} iconType="exportAction">
              Export in Format
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiFlexItem grow={false}>
          <EuiFormRow
            label={<div style={{ fontSize: "16px" }}>XML File Name</div>}
          >
            <EuiFieldText
              value={fileName}
              onChange={(e) => {
                changeFieldHandler(e, setFileName);
              }}
              type="text"
              className="filename_input"
              isInvalid={!fileName && isFileNameValid}
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
                                rule.children[0].value &&
                                rule.attributes.get("level") &&
                                rule.attributes.get("id")
                              );
                            }))
                            ? ""
                            : "Please fill in all required fields!"}
                        </p>
                        <EuiFormRow label={<h3>Enter Group Name</h3>}>
                          <EuiFieldText
                            value={groupName}
                            onChange={(e) => {
                              changeFieldHandler(e, setGroupName);
                            }}
                            isInvalid={!groupName && isGroupNameValid}
                            type="text"
                          />
                        </EuiFormRow>
                      </EuiFlexItem>
                      <EuiFlexGroup justifyContent={"flexEnd"}>
                        <EuiFlexItem grow={false}>
                          <EuiButton
                            onClick={resetForm}
                            fill
                            color={"danger"}
                          >
                            Clear
                          </EuiButton>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiButton
                            onClick={saveFile}
                            fill
                            color={"primary"}
                          >
                            Save
                          </EuiButton>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexGroup>
                    <EuiSpacer size="l" />
                    {showWarningRestart && (
                      <Fragment>
                        <div>Restart Cluster Manager Callout</div>
                        <EuiSpacer size="s" />
                      </Fragment>
                    )}
                  </>
                )}
                {selectedTab === "constructor"
                  ? renderXMLConstructor()
                  : renderTextConstructor()}
              </EuiPanel>
            </EuiFlexGroup>
          </EuiPage>
        </EuiFlexItem>
        )}
      </EuiFlexGroup>
    </EuiPage>
  );
};

export default RulesPage;
