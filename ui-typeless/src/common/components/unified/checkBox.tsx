import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "../../styles/unified/checkBox.module.scss";

export interface UnifiedCheckBoxProps {
  className?: string;
  isChecked: boolean;
  indeterminate?: boolean;
  title?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isReadonly?: boolean;
}

export const UnifiedCheckBox: React.FunctionComponent<UnifiedCheckBoxProps> = (
  props
) => {
  /** Ref操作（Indeterminate操作） */
  const checkBoxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (props.indeterminate !== undefined && checkBoxRef.current) {
      checkBoxRef.current.indeterminate = props.indeterminate;
    }
  }, [props.indeterminate]);

  /** イベントハンドリング */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event);
  };
  return (
    <div className={classNames(styles.unifiedCheckBox, props.className)}>
      <label
        className={classNames(
          {
            [styles.disabled]: props.isDisabled,
          },
          {
            [styles.readOnly]: props.isReadonly,
          }
        )}
        title={props.title}
      >
        <input
          className={styles.check}
          type="checkbox"
          ref={checkBoxRef}
          onChange={onChange}
          checked={props.isChecked}
          disabled={props.isDisabled}
        />
        <span>{props.children}</span>
      </label>
    </div>
  );
};
