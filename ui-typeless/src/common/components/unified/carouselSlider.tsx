import classNames from "classnames";
import { useState } from "react";
import styles from "../../styles/unified/carouselSlider.module.scss";

export interface UnifiedCarouselSliderProps {
  className?: string;
  title?: string;
  items: {
    img: string;
    url?: string;
  }[];
  children?: React.ReactNode;
}

export const UnifiedCarouselSlider: React.FunctionComponent<
  UnifiedCarouselSliderProps
> = (props) => {
  const [displayIndex, setDisplayIndex] = useState(0);

  return (
    <div className={classNames(styles.unifiedCarouselSlider, props.className)}>
      <div className={styles.slideWrapMain}>
        <div className={styles.slide}>
          <img src={props.items[displayIndex].img} alt="" />
        </div>
      </div>
      <div
        className={styles.slideWrap}
        style={{
          width: `calc(${props.items.length} * 100%)`,
        }}
      >
        {props.items.map((item, index) => (
          <div className={styles.slide}>
            <img key={index} src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
