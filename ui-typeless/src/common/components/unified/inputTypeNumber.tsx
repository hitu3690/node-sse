import classNames from "classnames";
import React, { useEffect, useState } from "react";
import {
  InputValidation,
  InputValidationEnum,
} from "../../../logics/inputValidation";
import styles from "../../styles/unified/inputTypeNumber.module.scss";
// todo: toggleIcon import

enum ToggleType {
  Upper,
  Lower,
}

enum FormHeight {
  Middle,
  Small,
}

const getDotPosition = (value: number) => {
  const strVal = String(value);
  return strVal.lastIndexOf(".") !== -1
    ? strVal.length - 1 - strVal.lastIndexOf(".")
    : 0;
};

const getHeight = (formHeight?: FormHeight) => {
  switch (formHeight) {
    case FormHeight.Small:
      return 26;
  }
};

const decimalCalculation = (num1: number, num2: number, type: ToggleType) => {
  const dotPosition1 = getDotPosition(num1);
  const dotPosition2 = getDotPosition(num2);

  if (dotPosition1 !== 0 || dotPosition2 !== 0) {
    const max = Math.max(dotPosition1, dotPosition2);
    const intValue1 = parseInt((num1.toFixed(max) + "").replace(".", ""));
    const intValue2 = parseInt((num2.toFixed(max) + "").replace(".", ""));
    const power = Math.pow(10, max);

    const calc =
      type === ToggleType.Upper ? intValue1 + intValue2 : intValue1 - intValue2;

    return Number((calc / power).toFixed(dotPosition2));
  }
  return type === ToggleType.Upper ? num1 + num2 : num1 - num2;
};

export interface InputTypeNumberProps {
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  isReadOnly?: boolean;
  formHeight?: FormHeight;
  max?: number;
  min?: number;
  step?: number;
  value: number;
  onChange: (n: number | undefined) => void;
  children?: React.ReactNode;
}

export const UnifiedInputTypeNumber: React.FunctionComponent<
  InputTypeNumberProps
> = (props) => {
  const [value, setValue] = useState("" + props.value);
  const step = props.step != null ? props.step : 1;

  useEffect(() => {
    setValue("" + props.value);
  }, [props.value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _value = e.target.value;

    if (
      _value !== "" &&
      InputValidation(InputValidationEnum.InputNumber, _value)
    ) {
      setValue(_value);

      if (
        (_value.indexOf(".") === -1 || _value.slice(-1) !== ".") &&
        (_value.indexOf("-") === -1 || _value.slice(-1) !== "-") &&
        !isNaN(+_value)
      ) {
        props.onChange(+_value);
      }
    }

    if (_value === "") {
      setValue(_value);
      props.onChange(undefined);
    }
  };

  const onChangeToggleUpper = () => {
    if (!isNaN(+value)) {
      const _value = decimalCalculation(+value, step, ToggleType.Upper);
      if (props.max === undefined || _value <= props.max) {
        setValue("" + _value);
        props.onChange(_value);
      }
    }
  };

  const onChangeToggleLower = () => {
    if (!isNaN(+value)) {
      const _value = decimalCalculation(+value, step, ToggleType.Lower);
      if (props.min === undefined || _value >= props.min) {
        setValue("" + _value);
        props.onChange(_value);
      }
    }
  };
  return (
    <div
      style={{
        height: `${getHeight(props.formHeight)}px`,
        display: props.isHidden ? "none" : "",
      }}
      className={classNames(styles.unifiedInputTypeNumber, props.className)}
    >
      <input
        type="text"
        value={value}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={onChange}
      />
      <button className={styles.upper} onClick={onChangeToggleUpper}>
        <img src={toggleIcon} alt="" />
      </button>
      <button className={styles.lower} onClick={onChangeToggleLower}>
        <img src={toggleIcon} alt="" />
      </button>
    </div>
  );
};
