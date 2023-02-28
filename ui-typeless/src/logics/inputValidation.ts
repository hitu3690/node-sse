export enum InputValidationEnum {
  Zenkaku,
  Hiragana,
  Katakana,
  Alphanumeric,
  Numeric,
  Alphabetic,
  UpperAlphabetic,
  LowerAlphabetic,
  InputNumber,
}

export const InputValidation = (type: InputValidationEnum, value: string) => {
  switch (type) {
    case InputValidationEnum.InputNumber:
      return value.match(/^[0-9.-]+$/) ? true : false;
    default:
      return false;
  }
};
