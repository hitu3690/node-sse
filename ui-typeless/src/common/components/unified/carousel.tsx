import classNames from "classnames";
import { useState } from "react";
import styles from "../../styles/unified/carousel.module.scss";

export interface UnifiedCarouselProps {
  className?: string;
  title?: string;
  items: {
    img: string;
    url?: string;
  }[];
  children?: React.ReactNode;
}

export const UnifiedCarousel: React.FunctionComponent<UnifiedCarouselProps> = (
  props
) => {
  const [displayIndex, setDisplayIndex] = useState(0);

  return (
    <div className={classNames(styles.unifiedCarousel, props.className)}>
      <h3>{props.title}</h3>
      <div className={styles.slick}>
        <div
          className={styles.slickPrev}
          onClick={() =>
            setDisplayIndex(
              displayIndex === 0 ? props.items.length - 1 : displayIndex - 1
            )
          }
        ></div>
        <ul
          style={{
            transform: `translate3d(-${(displayIndex + 1) * 9}%, 0 , 0)`,
          }}
        >
          <li
            className={
              displayIndex === props.items.length - 1 ? styles.currentShow : ""
            }
          >
            <img src={props.items[props.items.length - 1].img} />
          </li>
          {props.items.map((item, index) => (
            <li
              key={index}
              className={displayIndex === index ? styles.currentShow : ""}
            >
              <img src={item.img} />
            </li>
          ))}
          <li className={displayIndex === 0 ? styles.currentShow : ""}>
            <img src={props.items[0].img} />
          </li>
        </ul>
        <div
          className={styles.slickNext}
          onClick={() =>
            setDisplayIndex(
              props.items.length - 1 === displayIndex ? 0 : displayIndex + 1
            )
          }
        ></div>
      </div>
      <ul className={styles.slickDots}>
        {props.items.map((_, index) => (
          <li key={index}>
            <button
              className={
                displayIndex === index ? styles.currentShow : styles.notShow
              }
              onClick={() => setDisplayIndex(index)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};
