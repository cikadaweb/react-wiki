import React from 'react';
import { EuiFlexGroup } from '@elastic/eui';
import uuid from 'uuid/v4';

import type { IParameter, IDecoderChildren } from '../../types';

import DecoderTemplate from '../decoder-template/decoder-template';
import EOptionAttributes from '../../constants/option-attributes-list';
import EOptionParameters from '../../constants/decoders-option-parameters';

interface IXMLConstructorProps {
  addDecoder: (decoder: IDecoderChildren, index) => void;
  deleteDecoder: (id: string) => void;
  updateDecoder: (decoder: IDecoderChildren) => void;
  decoders: IDecoderChildren[];
  checkers: {
    decoderName: boolean;
  };
}

const XMLConstructor = (props: IXMLConstructorProps) => {
  const { addDecoder, deleteDecoder, updateDecoder, decoders, checkers } = props;

  const renderTemplateDecoders = decoders.map((decoder, index) => {
    const parametersList: IParameter[] = [];
    const attributesList: IParameter[] = [];
    let description = '';

    decoder.attributes.forEach((value, key) => {
      if (EOptionAttributes[key] && value) {
        attributesList.push({
          value,
          name: key,
          id: uuid(),
        });
      }
    });

    decoder.children.forEach((child) => {
      if (EOptionParameters[child.nodeName]) {
        if (child.value) {
          parametersList.push({
            value: child.value,
            name: child.nodeName,
            id: uuid(),
          });
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
      <DecoderTemplate
        key={decoder.id}
        id={decoder.id}
        index={index}
        name={decoder.attributes.get('name') ?? ''}
        deleteDecoder={deleteDecoder}
        updateDecoder={updateDecoder}
        addDecoder={addDecoder}
        deleteButtonShown={decoders.length > 1}
        childrenList={parametersList}
        attributesList={attributesList}
        checkers={checkers}
      />
    );
  });

  return <EuiFlexGroup direction={'column'}>{renderTemplateDecoders}</EuiFlexGroup>;
};

export default XMLConstructor;
