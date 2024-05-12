import type { IDecoderChildren, IRuleChildren } from '../types';

import EOptionAttributes from '../constants/option-attributes-list';
import EOptionParameters from '../constants/option-parameters';

type TXMLView = Array<string | string[]>;

const convertToIndentCode = (
  rules: IRuleChildren[] | null = null,
  decoders: IDecoderChildren[] | null = null,
  comments: string[],
  groupName?: string
) => {
  const xml: TXMLView = [];
  if (rules) {
    xml.push(comments.join(''));
    xml.push(`<group name="${groupName}">\n`);
    xml.push(rules.map((rule) => createChildTag(rule, 2)).join(''));
    xml.push('</group>');
    return xml.join('');
  } else if (decoders) {
    xml.push(comments.join(''));
    xml.push(decoders.map((decoder) => createChildTag(decoder, 0)).join(''));
  }

  return xml.join('');
};

const createChildTag = (child: IRuleChildren | IDecoderChildren, spaces) => {
  const attributes: string[] = [];
  const children: string[] = [];

  if (child.attributes.size > 0) {
    child.attributes.forEach((value, key) => {
      if (EOptionAttributes[key]) {
        if (value) {
          attributes.push(` ${key}="${value}"`);
        }
        return;
      }
      attributes.push(` ${key}="${value}"`);
    });
  }

  if (child.children.length > 0) {
    child.children.forEach((nestedChild) => {
      children.push(createChildTag(nestedChild, spaces + 2));
    });
  }

  const tagWithChildren =
    `${' '.repeat(spaces)}<${child.nodeName}${attributes.join('')}>\n` +
    children.join('') +
    `${' '.repeat(spaces)}</${child.nodeName}>\n`;

  const createTagWithNoChildren = () => {
    const value =
      child.nodeName === 'group' && !(child.value[child.value.length - 1] === ',')
        ? child.value + ','
        : child.value;
    if (child.value.length > 93) {
      return (
        `${' '.repeat(spaces)}<${child.nodeName}${attributes.join('')}>\n` +
        `${' '.repeat(spaces + 2)} ${value}\n` +
        `${' '.repeat(spaces)}</${child.nodeName}>\n`
      );
    }
    return (
      `${' '.repeat(spaces)}<${child.nodeName}${attributes.join('')}>` +
      value +
      `</${child.nodeName}>\n`
    );
  };

  if (EOptionParameters[child.nodeName] || child.nodeName === 'rule' || child.nodeName === 'decoder') {
    if (children.length > 0) {
      return tagWithChildren;
    }
    if (child.value) {
      return createTagWithNoChildren();
    }
    if (child.nodeName !== 'decoder') {
      return '';
    }
  }

  return createTagWithNoChildren();
};

export default convertToIndentCode;
