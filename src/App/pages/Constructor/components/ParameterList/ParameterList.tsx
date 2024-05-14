import React, { useEffect } from "react";
import uuid from "uuid/v4";

import type { Dispatch, SetStateAction, ChangeEvent } from "react";
import type { IOption, IParameter } from "../../types";

import Parameter from "../Parameter/Parameter";

interface IParametersListProps {
  parametersList: IParameter[];
  setParametersList: Dispatch<SetStateAction<IParameter[]>>;
  options: IOption[];
}

export const ParameterList = (props: IParametersListProps) => {
  const { parametersList, setParametersList, options } = props;

  const onParameterChange = (e: ChangeEvent<HTMLSelectElement>, id: string) => {
    setParametersList((prev) =>
      prev.map((parameter) => {
        return parameter.id === id
          ? { ...parameter, name: e.target.value, value: "" }
          : parameter;
      })
    );
  };

  const onParameterValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    id: string
  ) => {
    setParametersList((prev) =>
      prev.map((parameter) => {
        return parameter.id === id
          ? { ...parameter, value: e.target.value }
          : parameter;
      })
    );
  };

  const onAddParameterClick = () => {
    setParametersList((prev) => {
      return [
        ...prev,
        {
          value: "",
          name: "",
          id: uuid(),
        },
      ];
    });
  };

  const onDeleteParameterClick = (id: string) => {
    const newParameters = [...parametersList].filter(
      (parameter) => parameter.id !== id
    );
    setParametersList(newParameters);
  };

  useEffect(() => {
    if (parametersList.length < 1) {
      onAddParameterClick();
    }
  }, []);

  const parameters = parametersList.map((parameter, index) => {
    return (
      <Parameter
        key={parameter.id}
        id={parameter.id}
        value={parameter.value}
        name={parameter.name}
        onParameterChange={onParameterChange}
        onParameterValueChange={onParameterValueChange}
        onDeleteParameterClick={onDeleteParameterClick}
        onAddParameterClick={onAddParameterClick}
        isAddButtonShown={
          index + 1 === parametersList.length &&
          options.length > parametersList.length
        }
        isDeleteButtonShown={parametersList.length > 1}
        options={options}
      />
    );
  });

  return <>{parameters}</>;
};
