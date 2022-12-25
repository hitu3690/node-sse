import { ComponentMeta } from "@storybook/react";

import { UnifiedSlideShow, UnifiedSlideShowProps } from "./slideShow";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/UnifiedSlideShow",
  component: UnifiedSlideShow,
} as ComponentMeta<typeof UnifiedSlideShow>;

export const UnifiedSlideShows = (args: UnifiedSlideShowProps) => {
  const slideShowItems = [
    {
      img: "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-7/img/img_01.jpg",
    },
    {
      img: "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-7/img/img_02.jpg",
    },
    {
      img: "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-7/img/img_03.jpg",
    },
    {
      img: "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-7/img/img_04.jpg",
    },
    {
      img: "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-7/img/img_05.jpg",
    },
    {
      img: "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-7/img/img_06.jpg",
    },
  ];
  return (
    <>
      <UnifiedSlideShow
        title={"SLIDE SHOW"}
        items={slideShowItems}
        isInfinite={true}
      ></UnifiedSlideShow>
    </>
  );
};
