import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import styles from "../../styles/unified/button.module.scss";

//# interface & type & enum
export interface UnifiedButtonProps {
  className?: string;
  isLoading?: boolean;
  buttonHeight?: ButtonHeight;
  onClick: React.MouseEventHandler;
  children?: React.ReactNode;
  isDisabled?: boolean;
}

export type OnlyTextProps = {
  fontAwesome?: never;
  src?: never;
  displayIconPosition?: never;
  children?: React.ReactNode;
};
export type FontAwesomeProps = {
  fontAwesome?: never;
  src: string;
  displayIconPosition?: IconPosition;
  children?: React.ReactNode;
};
export type OriginalIconProps = {
  fontAwesome: IconDefinition;
  src?: never;
  displayIconPosition?: IconPosition;
  children?: React.ReactNode;
};
export type ButtonKindProps =
  | OnlyTextProps
  | FontAwesomeProps
  | OriginalIconProps;

export const ButtonHeight = {
  Large: 44,
  Middle: 36,
  Small: 26,
};
export type ButtonHeight = typeof ButtonHeight[keyof typeof ButtonHeight];

export const IconPosition = {
  Left: 0,
  Right: 1,
};
export type IconPosition = typeof IconPosition[keyof typeof IconPosition];
//# region end

//# ユーザー定義型ガード
const isFontAwesomeButtonGuard = (
  props: ButtonKindProps
): props is FontAwesomeProps =>
  "fontAwesome" in props && props.src === undefined;
const isOriginalIconButtonGuard = (
  props: ButtonKindProps
): props is OriginalIconProps =>
  "src" in props && props.fontAwesome === undefined;
//# region end

//# サブコンポーネント
const IconText: React.FunctionComponent<{
  displayIconPosition?: IconPosition;
  icon: React.ReactNode;
  children?: React.ReactNode;
}> = (props) =>
  props.displayIconPosition === IconPosition.Right ? (
    <>
      {props.children !== undefined ? <span>{props.children}</span> : <></>}
      {props.icon}
    </>
  ) : (
    <>
      {props.icon}
      {props.children !== undefined ? <span>{props.children}</span> : <></>}
    </>
  );

const UnifinedBaseButton: React.FunctionComponent<UnifiedButtonProps> = (
  props
) => {
  return (
    <div
      className={props.className}
      style={{
        height: `${
          props.buttonHeight !== undefined
            ? props.buttonHeight
            : ButtonHeight.Middle
        }px`,
      }}
    >
      <button
        onClick={props.onClick}
        disabled={props.isDisabled}
        className={classNames(
          styles.unifinedButton,
          { [styles.loading]: props.isLoading },
          { [styles.disabled]: props.isDisabled }
        )}
      >
        {props.isLoading !== undefined && props.isLoading ? (
          <FontAwesomeIcon icon={faSpinner} className={styles.loadingIcon} />
        ) : (
          <></>
        )}
        {props.children}
      </button>
    </div>
  );
};

const UnifinedButtonContent: React.FunctionComponent<
  OnlyTextProps | FontAwesomeProps | OriginalIconProps
> = (props) => {
  if (isFontAwesomeButtonGuard(props)) {
    console.log("====================", isFontAwesomeButtonGuard(props));

    return (
      <IconText {...props} icon={<FontAwesomeIcon icon={props.fontAwesome} />}>
        {props.children}
      </IconText>
    );
  } else if (isOriginalIconButtonGuard(props)) {
    return (
      <IconText {...props} icon={<img src={props.src} />}>
        {props.children}
      </IconText>
    );
  } else {
    return <span>{props.children}</span>;
  }
};
//# region end

export const UnifiedButton: React.FunctionComponent<
  UnifiedButtonProps & (OnlyTextProps | FontAwesomeProps | OriginalIconProps)
> = (props) => {
  return (
    <UnifinedBaseButton
      className={props.className}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      onClick={props.onClick}
      buttonHeight={props.buttonHeight}
    >
      <UnifinedButtonContent {...props}>{props.children}</UnifinedButtonContent>
    </UnifinedBaseButton>
  );
};
