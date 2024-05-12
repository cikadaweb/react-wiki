import uuid from 'uuid/v4';

import type { IRuleChildren } from '../types';
const loadXML = (xmlString: string) => {
  const domParser = new DOMParser();
  const xmlDoc = domParser.parseFromString(xmlString, 'text/xml') as XMLDocument;
  const parentGroup = xmlDoc.children[0];
  const rules: IRuleChildren[] = [];
  const groupName: string =
    parentGroup.attributes[0]?.name === 'name' ? parentGroup.attributes[0].value : '';
  const comments: string[] = [];

  if (parentGroup.nodeName === 'group' && parentGroup.children.length > 0) {
    Array.from(parentGroup.children).forEach((node) => {
      rules.push(createChildrenElements(node));
    });

    xmlDoc.childNodes.forEach((node) => {
      if (node.nodeName === '#comment' && node.nodeValue) {
        comments.push('<!--' + node.nodeValue + '-->\n\n');
      }
    });
  }
  return {
    rules,
    groupName,
    comments,
  };
};

const createChildrenElements = (node: Element) => {
  const attributes = new Map();
  Array.from(node.attributes).forEach((attribute) => {
    attributes.set(attribute.nodeName, attribute.value);
  });

  if (Array.from(node.children).length > 0) {
    const children = Array.from(node.children).map((child) => {
      return createChildrenElements(child);
    });

    return {
      nodeName: node.nodeName,
      attributes,
      value: '',
      children,
      id: uuid(),
    };
  }
  return {
    nodeName: node.nodeName,
    attributes,
    children: [],
    value: node.textContent ?? '',
    id: uuid(),
  };
};

export default loadXML;
