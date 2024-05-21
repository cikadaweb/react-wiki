import {
  EuiButtonIcon,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiSelect,
  EuiButtonEmpty
} from "@elastic/eui";
import React, { ChangeEvent, useState, useEffect } from "react";
import type { IOption } from "../../types";
import parametersValue from "../../constants/parameters-value";

import "./Parameter.css";
interface IProps {
  id: string;
  name: string;
  value: string;
  onParameterChange: (ev: ChangeEvent<HTMLSelectElement>, id: string) => void;
  onParameterValueChange: (
    ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    id: string
  ) => void;
  onDeleteParameterClick: (id: string) => void;
  onAddParameterClick: () => void;
  isAddButtonShown: boolean;
  isDeleteButtonShown: boolean;
  options: IOption[];
  parameterType: 'attribute' | 'children';
}

const Parameter = (props: IProps) => {
  const {
    id,
    name,
    value,
    onParameterValueChange,
    onParameterChange,
    onDeleteParameterClick,
    onAddParameterClick,
    options,
    isAddButtonShown,
    isDeleteButtonShown,
    parameterType
  } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState([]);

  const changeIsEdit = () => {
    setIsEdit((prev) => !prev);
  };

  useEffect(() => {
    if (name && value) {
      changeIsEdit();
    }
  }, []);

  useEffect(() => {
    if (parametersValue[name]) {
      setValues(parametersValue[name].values);
    } else {
      setValues([]);
    }
  }, [name]);

  return (
      <>
        <EuiFlexGroup style={{marginBottom: '10px'}}>
          <EuiFlexItem style={{width: '90%'}}>
            <EuiFlexGroup
                key={id}
                gutterSize="none"
                direction="column"
            >
              <EuiFlexItem>
                <EuiFormRow
                    label={parameterType === 'attribute' ? 'Атрибут к тегу <rule>:' : 'Дочерний параметр:'}
                    fullWidth
                >
                  <EuiSelect
                      hasNoInitialSelection
                      disabled={!isEdit}
                      options={options}
                      value={name}
                      fullWidth
                      onChange={(e) => onParameterChange(e, id)}
                  />
                </EuiFormRow>
              </EuiFlexItem>

              <EuiFlexItem>
                <EuiFormRow label="Значение:" fullWidth>
                  {values.length > 0 ? (
                      <EuiSelect
                          hasNoInitialSelection
                          disabled={!isEdit}
                          options={values}
                          value={value}
                          onChange={(e) => onParameterValueChange(e, id)}
                          fullWidth
                      />
                  ) : (
                      <EuiFieldText
                          className={!name || !value ? "parameter-empty" : ""}
                          value={value}
                          disabled={!isEdit}
                          onChange={(e) => onParameterValueChange(e, id)}
                          fullWidth
                          type="text"
                      />
                  )}
                </EuiFormRow>
              </EuiFlexItem>

            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem grow={false} style={{width: '10%'}}>
            <EuiFlexGroup
                responsive={false}
                gutterSize="s"
                alignItems="center"
                style={{ justifyContent: "flex-start", marginLeft: "5px" }}
            >
              <EuiFlexItem grow={false}>
                <EuiButtonIcon
                    onClick={changeIsEdit}
                    iconType={isEdit ? "eye" : "eyeClosed"}
                    iconSize="m"
                    aria-label="Hide"
                />
              </EuiFlexItem>
              {isDeleteButtonShown && (
                  <EuiButtonIcon
                      iconSize="m"
                      onClick={() => onDeleteParameterClick(id)}
                      iconType="trash"
                      color="danger"
                      aria-label="Delete"
                  />
              )}
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            {isAddButtonShown && (
              <EuiButtonEmpty
                  onClick={onAddParameterClick}
                  iconType="createSingleMetricJob"
                  aria-label="Add"
              >{parameterType === 'attribute' ? 'Добавить атрибут' : 'Добавить дочерний элемент'}
              </EuiButtonEmpty>
            )}
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
  );
};

export default Parameter;
