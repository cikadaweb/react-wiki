import React from 'react';
import { EuiFlexGroup } from '@elastic/eui';
import uuid from 'uuid/v4';

import type { IParameter, IRuleChildren } from '../../types';

import RuleTemplate from '../rule-template/rule-template';
import EOptionAttributes from '../../constants/option-attributes-list';
import EOptionParameters from '../../constants/option-parameters';
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

const XMLConstructor = (props: IXMLConstructorProps) => {
  const { addRule, deleteRule, updateRule, rules, checkers } = props;
  const renderTemplateRules = rules.map((rule, index) => {
    const parametersList: IParameter[] = [];
    const attributesList: IParameter[] = [];
    let description = '';

    rule.attributes.forEach((value, key) => {
      if (EOptionAttributes[key] && value) {
        attributesList.push({
          value,
          name: key,
          id: uuid(),
        });
      }
    });

    rule.children.forEach((child) => {
      if (EOptionParameters[child.nodeName]) {
        if (child.value) {
          if (child.nodeName === 'group') {
            const value = child.value.replace(/,\s*$/, '');
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
          const value = child.children.map((child) => child.value).join(',');

          parametersList.push({
            value,
            name: child.nodeName,
            id: uuid(),
          });
        }
      }
      // TODO: придумать другую реализацию для сохранения поля description
      if (child.nodeName === 'description') {
        description = child.value;
      }
    });

    return (
      <RuleTemplate
        key={rule.id}
        id={rule.id}
        index={index}
        serial={rule.attributes.get('id') ?? ''}
        level={rule.attributes.get('level') ?? ''}
        description={description ?? ''}
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

  return <EuiFlexGroup direction={'column'}>{renderTemplateRules}</EuiFlexGroup>;
};

export default XMLConstructor;
