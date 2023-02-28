export enum InputValidationEnum {
  Zenkaku, // 全角文字
  Hiragana, // 全額ひらがな
  Katakana, // 全角カタカナ
  Alphanumeric, // 半角英数字
  Numeric, // 半角数字
  Alphabetic, // 半角英字
  UpperAlphabetic, // 半角英字（大文字のみ）
  LowerAlphabetic, // 半角英字（小文字のみ）
  InputNumber, // 半角数字、小数点、マイナス
}

export const InputValidation = (type: InputValidationEnum, value: string) => {
  switch (type) {
    case InputValidationEnum.Zenkaku:
      return value.match(/^[^\x20-\x7e]+$/) ? true : false;
    case InputValidationEnum.Hiragana:
      return value.match(/^[\u3041-\u3096]+$/) ? true : false;
    case InputValidationEnum.Katakana:
      return value.match(/^[\u30a1-\u30f6]+$/) ? true : false;
    case InputValidationEnum.Alphanumeric:
      return value.match(/^[0-9a-zA-Z]+$/) ? true : false;
    case InputValidationEnum.Numeric:
      return value.match(/^[0-9]+$/) ? true : false;
    case InputValidationEnum.Alphabetic:
      return value.match(/^[a-zA-Z]+$/) ? true : false;
    case InputValidationEnum.UpperAlphabetic:
      return value.match(/^[A-Z]+$/) ? true : false;
    case InputValidationEnum.LowerAlphabetic:
      return value.match(/^[a-z]+$/) ? true : false;
    case InputValidationEnum.InputNumber:
      return value.match(/^[0-9.-]+$/) ? true : false;
    default:
      return false;
  }
};
