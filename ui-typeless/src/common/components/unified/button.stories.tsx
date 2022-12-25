import { ComponentMeta } from "@storybook/react";

import {
  ButtonHeight,
  ButtonKindProps,
  IconPosition,
  UnifiedButton,
} from "./button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import searchSvg from "../../../assets/search.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/UnifiedButton",
  component: UnifiedButton,
} as ComponentMeta<typeof UnifiedButton>;

export const OnlyTextButtons = (args: ButtonKindProps) => (
  <>
    <UnifiedButton
      {...args}
      buttonHeight={ButtonHeight.Large}
      onClick={() => {}}
    >
      Large
    </UnifiedButton>
    <br />
    <UnifiedButton {...args} onClick={() => {}}>
      Middle
    </UnifiedButton>
    <br />
    <UnifiedButton
      {...args}
      buttonHeight={ButtonHeight.Small}
      onClick={() => {}}
    >
      Smalll
    </UnifiedButton>
  </>
);

export const IconButtons = (args: ButtonKindProps) => (
  <>
    <UnifiedButton
      fontAwesome={faArrowRight}
      onClick={() => {}}
    ></UnifiedButton>
    <br />
    <UnifiedButton src={searchSvg} onClick={() => {}}></UnifiedButton>
    <br />
    <UnifiedButton
      fontAwesome={faArrowRight}
      isLoading={true}
      onClick={() => {}}
    ></UnifiedButton>
    <br />
    <UnifiedButton
      src={searchSvg}
      isDisabled={true}
      onClick={() => {}}
    ></UnifiedButton>
  </>
);

export const IconAndTextButtons = (args: ButtonKindProps) => (
  <>
    <UnifiedButton fontAwesome={faArrowRight} onClick={() => {}}>
      FontAwesome-アイコン左
    </UnifiedButton>
    <br />
    <UnifiedButton
      src={searchSvg}
      displayIconPosition={IconPosition.Right}
      onClick={() => {}}
    >
      OriginalIcon-アイコン右
    </UnifiedButton>
    <br />
    <UnifiedButton
      fontAwesome={faArrowRight}
      isDisabled={true}
      onClick={() => {}}
    >
      FontAwesome-アイコン左
    </UnifiedButton>
    <br />
    <UnifiedButton
      src={searchSvg}
      displayIconPosition={IconPosition.Right}
      isLoading={true}
      onClick={() => {}}
    >
      OriginalIcon-アイコン右
    </UnifiedButton>
  </>
);
