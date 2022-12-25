import React from "react";
import classNames from "classnames";
import styles from "../../styles/unified/radioButton.module.scss";

export interface UnifiedRadioButtonProps {
  className?: string;
  isChecked: boolean;
  isDefaultChecked?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isReadonly?: boolean;
}

export const UnifiedRadioButton: React.FunctionComponent<
  UnifiedRadioButtonProps
> = (props) => {
  return (
    <div className={classNames(styles.unifinedRadioButton, props.className)}>
      <label
        className={classNames(
          {
            [styles.disabled]: props.isDisabled,
          },
          {
            [styles.readOnly]: props.isReadonly,
          }
        )}
      >
        <input
          type="radio"
          checked={props.isChecked}
          value={props.value}
          defaultChecked={props.isDefaultChecked}
          onChange={props.onChange}
          disabled={props.isDisabled || props.isReadonly}
        />
        <span>{props.children}</span>
      </label>
    </div>
  );
};
