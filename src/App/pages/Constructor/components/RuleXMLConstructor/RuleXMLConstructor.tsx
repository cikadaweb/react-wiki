import React from "react";
import uuid from "uuid/v4";

import type { IParameter, IRuleChildren } from "../../types";

import RuleItem from "@/App/pages/Constructor/components/Rule/RuleItem";
import ERuleAttributes from "../../constants/RuleAttributes";
import ERuleParameters from "../../constants/RuleParameters";

interface IXMLConstructorProps {
  addRule: (rule: IRuleChildren, index) => void;
  deleteRule: (id: string) => void;
  updateRule: (rule: IRuleChildren) => void;
  rules: IRuleChildren[];
  checkers: {
    ruleSerial: boolean;
    ruleLevel: boolean;
    ruleDesc: boolean;
  };
}

const RuleXMLConstructor = (props: IXMLConstructorProps) => {
  const { addRule, deleteRule, updateRule, rules, checkers } = props;
  const renderRuleItems = rules.map((rule, index) => {
    const parametersList: IParameter[] = [];
    const attributesList: IParameter[] = [];
    let description = "";

    rule.attributes.forEach((value, key) => {
      if (ERuleAttributes[key] && value) {
        attributesList.push({
          value,
          name: key,
          id: uuid(),
        });
      }
    });

    rule.children.forEach((child) => {
      if (ERuleParameters[child.nodeName]) {
        if (child.value) {
          if (child.nodeName === "group") {
            const value = child.value.replace(/,\s*$/, "");
            parametersList.push({
              value,
              name: child.nodeName,
              id: uuid(),
            });
          } else {
            parametersList.push({
              value: child.value,
              name: child.nodeName,
              id: uuid(),
            });
          }
        }

        if (child.children.length > 0) {
          const value = child.children.map((child) => child.value).join(",");

          parametersList.push({
            value,
            name: child.nodeName,
            id: uuid(),
          });
        }
      }
      if (child.nodeName === "description") {
        description = child.value;
      }
    });

    return (
      <RuleItem
        key={rule.id}
        id={rule.id}
        index={index}
        serial={rule.attributes.get("id") ?? ""}
        level={rule.attributes.get("level") ?? ""}
        description={description ?? ""}
        deleteRule={deleteRule}
        updateRule={updateRule}
        addRule={addRule}
        deleteButtonShown={rules.length > 1}
        childrenList={parametersList}
        attributesList={attributesList}
        checkers={checkers}
      />
    );
  });

  return (
    <>{renderRuleItems}</>
  );
};

export default RuleXMLConstructor;