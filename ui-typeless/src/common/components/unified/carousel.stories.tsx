import { ComponentMeta } from "@storybook/react";

import { UnifiedCarousel, UnifiedCarouselProps } from "./carousel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/UnifiedCarousel",
  component: UnifiedCarousel,
} as ComponentMeta<typeof UnifiedCarousel>;

export const UnifiedCarousels = (args: UnifiedCarouselProps) => {
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
      <UnifiedCarousel
        title={"Carousel"}
        items={slideShowItems}
      ></UnifiedCarousel>
    </>
  );
};
