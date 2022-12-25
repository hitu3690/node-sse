import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "../../styles/unified/carousel.module.scss";

export interface UnifiedCarouselProps {
  className?: string;
  title?: string;
  items: {
    img: string;
    url?: string;
  }[];
  isInfinite?: boolean;
  slideTime?: number;
  children?: React.ReactNode;
}

export const UnifiedCarousel: React.FunctionComponent<UnifiedCarouselProps> = (
  props
) => {
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    if (props.isInfinite !== undefined && props.isInfinite) {
      const intervalId = setInterval(() => {
        setDisplayIndex((displayIndex) =>
          displayIndex === props.items.length - 1 ? 0 : displayIndex + 1
        );
      }, props.slideTime ?? 5000);
      return () => clearInterval(intervalId);
    }
  }, [displayIndex]);

  return (
    <div className={classNames(styles.unifiedCarousel, props.className)}>
      <h3>{props.title}</h3>
      <div className={styles.slick}>
        <div
          className={styles.slickPrev}
          style={{
            pointerEvents: props.items.length === 1 ? "none" : "initial",
          }}
          onClick={() =>
            setDisplayIndex(
              displayIndex === 0 ? props.items.length - 1 : displayIndex - 1
            )
          }
        ></div>
        <div
          style={{
            width: `calc(${props.items.length} * 100%)`,
            transform: `translateX(calc(-41vw + ${displayIndex * -60}vw))`,
          }}
          className={styles.sliderItems}
        >
          <li
            className={
              displayIndex === props.items.length - 1 ? styles.currentShow : ""
            }
            style={{ display: props.items.length === 1 ? "none" : "" }}
            onClick={() => setDisplayIndex(props.items.length - 1)}
          >
            <img src={props.items[props.items.length - 1].img} alt="" />
          </li>
          {props.items.map((item, index) => (
            <li
              key={index}
              className={displayIndex === index ? styles.currentShow : ""}
              style={{ display: props.items.length === 1 ? "none" : "" }}
              onClick={() => setDisplayIndex(index)}
            >
              <img src={item.img} alt="" />
            </li>
          ))}
          <li
            className={displayIndex === 0 ? styles.currentShow : ""}
            style={{
              transform: props.items.length === 1 ? "translateX(25%)" : "",
            }}
            onClick={() => setDisplayIndex(0)}
          >
            <img src={props.items[0].img} alt="" />
          </li>
        </div>
        <div
          className={styles.slickNext}
          style={{
            pointerEvents: props.items.length === 1 ? "none" : "initial",
          }}
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
