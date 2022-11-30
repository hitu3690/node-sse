import React, { useCallback, useMemo, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UnifiedCheckBox, UnifiedCheckBoxProps } from "./checkBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/UnifiedCheckBox",
  component: UnifiedCheckBox,
} as ComponentMeta<typeof UnifiedCheckBox>;

export const UnifiedCheckBoxes = (args: UnifiedCheckBoxProps) => {
  return (
    <>
      <UnifiedCheckBox {...args} />
      <UnifiedCheckBox {...args} indeterminate={true}>
        Indeterminate
      </UnifiedCheckBox>
      <UnifiedCheckBox {...args} title={"Hello"}>
        Title
      </UnifiedCheckBox>
    </>
  );
};

export const IndeterminateCheckBox = (args: UnifiedCheckBoxProps) => {
  const [state1, set_state1] = useState(true)
  const [state2, set_state2] = useState(true)
  const [stateAll, set_stateAll] = useState(true)
  const isIndeterminate = useMemo(() => {
    return !(state1 && state2)
  }, [state1, state2])

  return (
    <>
      <UnifiedCheckBox
        {...args}
        onChange={() => {
          set_state1(!state1)
          set_state2(!state2)
          set_stateAll(!stateAll)
        }}
        isChecked={stateAll}
        indeterminate={isIndeterminate}
      >
        すべて
      </UnifiedCheckBox>
      <UnifiedCheckBox {...args} onChange={() => set_state1(!state1)} isChecked={state1}>
        切削
      </UnifiedCheckBox>
      <UnifiedCheckBox {...args} onChange={() => set_state2(!state2)} isChecked={state2}>
        板金
      </UnifiedCheckBox>
    </>
  );
};