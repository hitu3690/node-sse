import React, { useCallback, useMemo, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UnifiedRadioButton, UnifiedRadioButtonProps } from "./radioButton";
import searchSvg from "../../../assets/search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/UnifiedRadionButton",
  component: UnifiedRadioButton,
} as ComponentMeta<typeof UnifiedRadioButton>;

export const UnifiedRadioButtons = (args: UnifiedRadioButtonProps) => {
  const [value, set_value] = useState("a");
  return (
    <>
      <UnifiedRadioButton
        {...args}
        value={"a"}
        isChecked={value === "a"}
        isDefaultChecked={true}
        onChange={(e) => set_value(e.target.value)}
      >
        選択a
      </UnifiedRadioButton>
      <UnifiedRadioButton
        {...args}
        value={"b"}
        isChecked={value === "b"}
        isDefaultChecked={false}
        onChange={(e) => set_value(e.target.value)}
      >
        選択b
      </UnifiedRadioButton>
      <UnifiedRadioButton {...args} isChecked={true}>
        <img src={searchSvg} />
      </UnifiedRadioButton>
      <UnifiedRadioButton {...args} isChecked={true}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </UnifiedRadioButton>
    </>
  );
};
