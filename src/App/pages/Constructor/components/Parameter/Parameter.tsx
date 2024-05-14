import {
  EuiButtonIcon,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiSelect,
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
    <EuiFlexItem
      key={id}
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: "16px 0",
      }}
      grow={false}
    >
      <EuiFormRow
        style={{ marginRight: "10px" }}
        label="Дополнительный параметр"
      >
        <EuiSelect
          style={{ width: "400px" }}
          hasNoInitialSelection
          disabled={!isEdit}
          options={options}
          value={name}
          onChange={(e) => onParameterChange(e, id)}
        />
      </EuiFormRow>
      <EuiFormRow label="Значение" style={{ marginTop: "0" }}>
        {values.length > 0 ? (
          <EuiSelect
            style={{ width: "400px" }}
            hasNoInitialSelection
            disabled={!isEdit}
            options={values}
            value={value}
            onChange={(e) => onParameterValueChange(e, id)}
          />
        ) : (
          <EuiFieldText
            className={!name || !value ? "parameter-empty" : ""}
            value={value}
            disabled={!isEdit}
            onChange={(e) => onParameterValueChange(e, id)}
            style={{ width: "400px" }}
            type="text"
          />
        )}
      </EuiFormRow>
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
            iconSize="s"
            aria-label="Hide"
          />
        </EuiFlexItem>
        {isAddButtonShown && (
          <EuiButtonIcon
            iconSize="s"
            onClick={onAddParameterClick}
            iconType="plusInCircle"
            aria-label="Add"
          />
        )}
        {isDeleteButtonShown && (
          <EuiButtonIcon
            iconSize="s"
            onClick={() => onDeleteParameterClick(id)}
            iconType="trash"
            color="danger"
            aria-label="Delete"
          />
        )}
      </EuiFlexGroup>
    </EuiFlexItem>
  );
};

export default Parameter;
