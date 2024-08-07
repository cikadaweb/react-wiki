import React, { useState, useEffect } from 'react';
import {
  EuiPanel,
  EuiFormRow,
  EuiFieldText,
  EuiSpacer,
  EuiFlexItem,
  EuiFlexGroup,
  EuiButtonIcon,
} from '@elastic/eui';
import uuid from 'uuid/v4';

import type { IParameter, IDecoderChildren } from '../../types';
import EDecoderParameters from '../../constants/DecoderParameters';

import { ParameterList } from '../ParameterList/ParameterList';
import changeFieldHandler from '../../utils/ChangeFieldHandler';
import createOptions from '../../utils/CreateOptions';

interface IDecoderTemplateProps {
  name: string;
  deleteDecoder: (id: string) => void;
  updateDecoder: (decoder: IDecoderChildren) => void;
  addDecoder: (decoder: IDecoderChildren, index: number) => void;
  childrenList: IParameter[];
  attributesList: IParameter[];
  deleteButtonShown: boolean;
  id: string;
  index: number;
  checkers: {
    decoderName: boolean;
  };
}

const DecoderTemplate = (props: IDecoderTemplateProps) => {
  const {
    name,
    deleteDecoder,
    updateDecoder,
    addDecoder,
    childrenList,
    attributesList,
    deleteButtonShown,
    id,
    index,
    checkers
  } = props;

  const [decoderChildrenList, setDecoderChildrenList] = useState(childrenList);
  const [decoderAttributesList, setDecoderAttributesList] = useState(attributesList);

  const [decoderName, setDecoderName] = useState(name);

  const onAddDecoderClick = () => {
    addDecoder(
      {
        id: uuid(),
        children: [],
        attributes: new Map(),
        value: '',
        nodeName: 'decoder',
      } as IDecoderChildren,
      index + 1
    );
  };
  const onDeleteDecoderClick = () => {
    deleteDecoder(id);
  };
  const createChildren = (child: IParameter) => {
    const children: IDecoderChildren[] = [];
    const attributes = new Map();

    return { nodeName: child.name, value: child.value, children, attributes, id: uuid() };
  };

  const getChildrenList = (childrenList: IParameter[]): IDecoderChildren[] => {
    const newChildren: IDecoderChildren[] = [];

    childrenList.forEach((children) => {
      if (children.name && children.value.trim()) {
        newChildren.push(createChildren(children));
      }
    });

    return newChildren;
  };

  const getAttributesList = (attributesList: IParameter[]) => {
    const attributesMap = new Map([
      ['name', decoderName],
    ]);

    attributesList.forEach((attribute) => {
      if (attribute.name && attribute.value) {
        attributesMap.set(attribute.name, attribute.value);
      }
    });

    return attributesMap;
  };
  const onCopyDecoderClick = () => {
    addDecoder(
      {
        id: uuid(),
        nodeName: 'decoder',
        value: '',
        children: getChildrenList(decoderChildrenList),
        attributes: getAttributesList(decoderAttributesList),
      },
      index + 1
    );
  };

  useEffect(() => {
    updateDecoder({
      id,
      children: getChildrenList(decoderChildrenList),
      attributes: getAttributesList(decoderAttributesList),
      value: '',
      nodeName: 'decoder',
    });
  }, [decoderName, decoderChildrenList, decoderAttributesList]);

  return (
    <>
      <EuiPanel style={{ backgroundColor: '#FAFBFD', boxShadow: 'none' }}>
        <EuiFlexItem
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}
          grow={false}
        >
          <EuiFormRow label="Добавить имя декодера">
            <EuiFieldText
              style={{ width: '400px' }}
              onChange={(e) => changeFieldHandler(e, setDecoderName)}
              value={decoderName}
              type="text"
              isInvalid={checkers.decoderName && !decoderName}
            />
          </EuiFormRow>
          <EuiFlexGroup
            responsive={false}
            gutterSize="s"
            alignItems="center"
            style={{ justifyContent: 'flex-end' }}
          >
            <EuiFlexItem grow={false}>
              <EuiButtonIcon iconType="eye" aria-label="Hide" />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonIcon onClick={onCopyDecoderClick} iconType="copy" aria-label="Copy" />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonIcon onClick={onAddDecoderClick} iconType="plusInCircle" aria-label="Add" />
            </EuiFlexItem>
            {deleteButtonShown ? (
              <EuiFlexItem grow={false}>
                <EuiButtonIcon
                  onClick={onDeleteDecoderClick}
                  iconType="trash"
                  color="danger"
                  aria-label="Delete"
                />
              </EuiFlexItem>
            ) : null}
          </EuiFlexGroup>
        </EuiFlexItem>
        <ParameterList
          parametersList={decoderChildrenList}
          setParametersList={setDecoderChildrenList}
          options={createOptions(EDecoderParameters)}
          parameterType="children"
        />
      </EuiPanel>
      <EuiSpacer size="l" />
    </>
  );
};

export default DecoderTemplate;
