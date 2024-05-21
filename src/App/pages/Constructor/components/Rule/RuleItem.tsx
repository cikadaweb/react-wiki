import React, { useState, useEffect } from "react";
import {
  EuiPanel,
  EuiFormRow,
  EuiFieldText,
  EuiSpacer,
  EuiFlexItem,
  EuiFlexGroup,
  EuiButtonIcon,
  EuiTextArea
} from "@elastic/eui";
import uuid from 'uuid/v4';

import type { IParameter, IRuleChildren } from "../../types";
import EOptionAttributes from "../../constants/option-attributes-list";
import EOptionParameters from "../../constants/option-parameters";

import { ParameterList } from "../ParameterList/ParameterList";
import changeFieldHandler from "../../utils/change-field-handler";
import createOptions from "../../utils/create-options";

interface IRuleItemProps {
  serial: string;
  level: string;
  description: string;
  deleteRule: (id: string) => void;
  updateRule: (rule: IRuleChildren) => void;
  addRule: (rule: IRuleChildren, index: number) => void;
  childrenList: IParameter[];
  attributesList: IParameter[];
  deleteButtonShown: boolean;
  id: string;
  index: number;
  checkers: {
    ruleSerial: boolean;
    ruleLevel: boolean;
    ruleDesc: boolean;
  };
}

const RuleItem = (props: IRuleItemProps) => {
  const {
    serial,
    level,
    description,
    deleteRule,
    updateRule,
    addRule,
    childrenList,
    attributesList,
    deleteButtonShown,
    id,
    index,
    checkers,
  } = props;

  const [ruleChildrenList, setRuleChildrenList] = useState(childrenList);
  const [ruleAttributesList, setRuleAttributesList] = useState(attributesList);
  const [ruleSerial, setRuleSerial] = useState(serial);
  const [ruleLevel, setRuleLevel] = useState(level);
  const [ruleDescription, setRuleDescription] = useState(description);

  const onAddRuleClick = () => {
    addRule(
      {
        id: uuid(),
        children: [],
        attributes: new Map(),
        value: "",
        nodeName: "rule",
      } as IRuleChildren,
      index + 1
    );
  };

  const onDeleteRuleClick = () => {
    deleteRule(id);
  };

  const createChildren = (child: IParameter) => {
    const children: IRuleChildren[] = [];
    const attributes = new Map();
    if (child.name === "mitre") {
      const splitParameterValue = child.value.split(",");
      splitParameterValue.forEach((value) => {
        if (value.trim()) {
          children.push(
            createChildren({
              name: "id",
              value,
              id: uuid(),
            })
          );
        }
      });

      return {
        nodeName: child.name,
        children,
        value: "",
        attributes,
        id: uuid(),
      };
    }

    return {
      nodeName: child.name,
      value: child.value,
      children,
      attributes,
      id: uuid(),
    };
  };

  const getChildrenList = (childrenList: IParameter[]): IRuleChildren[] => {
    const newChildren: IRuleChildren[] = [
      {
        nodeName: "description",
        value: ruleDescription,
        children: [],
        id: uuid(),
        attributes: new Map(),
      },
    ];

    childrenList.forEach((children) => {
      if (children.name && children.value.trim()) {
        newChildren.push(createChildren(children));
      }
    });

    return newChildren;
  };

  const getAttributesList = (attributesList: IParameter[]) => {
    const attributesMap = new Map([
      ["id", ruleSerial],
      ["level", ruleLevel],
    ]);

    attributesList.forEach((attribute) => {
      if (attribute.name && attribute.value) {
        attributesMap.set(attribute.name, attribute.value);
      }
    });

    return attributesMap;
  };

  const onCopyRuleClick = () => {
    addRule(
      {
        id: uuid(),
        nodeName: "rule",
        value: "",
        children: getChildrenList(ruleChildrenList),
        attributes: getAttributesList(ruleAttributesList),
      },
      index + 1
    );
  };

  useEffect(() => {
    updateRule({
      id,
      children: getChildrenList(ruleChildrenList),
      attributes: getAttributesList(ruleAttributesList),
      value: "",
      nodeName: "rule",
    });
  }, [
    ruleSerial,
    ruleLevel,
    ruleDescription,
    ruleChildrenList,
    ruleAttributesList,
  ]);

  return (
    <>
      <EuiFlexGroup justifyContent="flexEnd" style={{margin: '10px 0'}}>
        <EuiFlexItem grow={false}>
          <EuiButtonIcon iconType="eye" aria-label="Hide" />
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
          <EuiButtonIcon
              onClick={onCopyRuleClick}
              iconType="copy"
              aria-label="Copy"
          />
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
          <EuiButtonIcon
              onClick={onAddRuleClick}
              iconType="plusInCircle"
              aria-label="Add"
          />
        </EuiFlexItem>

        {deleteButtonShown ? (
            <EuiFlexItem grow={false}>
              <EuiButtonIcon
                  onClick={onDeleteRuleClick}
                  iconType="trash"
                  color="danger"
                  aria-label="Delete"
              />
            </EuiFlexItem>
        ) : null}
      </EuiFlexGroup>

      <EuiPanel style={{ backgroundColor: "#FAFBFD", boxShadow: "none" }}>
        <EuiFlexGroup direction="column">
          <EuiFlexItem>
            <EuiFormRow label="Добавить номер правила:" fullWidth>
              <EuiFieldText
                  onChange={(e) => changeFieldHandler(e, setRuleSerial)}
                  value={ruleSerial}
                  type="text"
                  isInvalid={checkers.ruleSerial && !ruleSerial}
                  fullWidth
              />
            </EuiFormRow>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFormRow label="Добавить уровень важности правила:" fullWidth>
              <EuiFieldText
                  onChange={(e) => changeFieldHandler(e, setRuleLevel)}
                  value={ruleLevel}
                  type="number"
                  fullWidth
                  min={0}
                  max={16}
                  isInvalid={checkers.ruleLevel && !ruleLevel}
              />
            </EuiFormRow>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFormRow label="Добавить описание:" fullWidth>
              <EuiTextArea
                  onChange={(e) => changeFieldHandler(e, setRuleDescription)}
                  value={ruleDescription}
                  isInvalid={checkers.ruleDesc && !ruleDescription}
                  fullWidth
              />
            </EuiFormRow>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFlexGroup>
              <EuiFlexItem>
                <ParameterList
                    parametersList={ruleAttributesList}
                    setParametersList={setRuleAttributesList}
                    options={createOptions(EOptionAttributes)}
                    parameterType="attribute"
                />
              </EuiFlexItem>

              <EuiFlexItem>
                <ParameterList
                    parametersList={ruleChildrenList}
                    setParametersList={setRuleChildrenList}
                    options={createOptions(EOptionParameters)}
                    parameterType="children"
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <EuiSpacer size="l" />
    </>
  );
};

export default RuleItem;
