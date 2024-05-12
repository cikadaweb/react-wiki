import uuid from 'uuid/v4';

import type { IDecoderChildren } from '../types';
const loadXML = (xmlString: string) => {
  xmlString = '<main>\n' + xmlString + '</main>';

  const domParser = new DOMParser();
  const xmlDoc = domParser.parseFromString(xmlString, 'text/xml') as XMLDocument;
  const parentGroup = xmlDoc.children[0];

  const decoders: IDecoderChildren[] = [];
  const comments: string[] = [];

  Array.from(parentGroup.children).forEach((node) => {
    decoders.push(createChildrenElements(node));
  });

  xmlDoc.childNodes.forEach((node) => {
    if (node.nodeName === '#comment' && node.nodeValue) {
      comments.push('<!--' + node.nodeValue + '-->\n\n');
    }
  });

  return {
    decoders,
    comments,
  };
};

const createChildrenElements = (node: Element) => {
  const attributes = new Map();
  if (node.nodeName === 'decoder') {
    Array.from(node.attributes).forEach((attribute) => {
      attributes.set(attribute.nodeName, attribute.value);
    });
  }

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
