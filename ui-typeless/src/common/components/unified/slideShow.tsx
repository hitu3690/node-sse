import classNames from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/unified/slideShow.module.scss";

export interface UnifiedSlideShowProps {
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

export const UnifiedSlideShow: React.FunctionComponent<
  UnifiedSlideShowProps
> = (props) => {
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
    <div className={classNames(styles.unifiedSlideShow, props.className)}>
      <h1>{props.title}</h1>
      <ul className={styles.slick}>
        <div
          className={styles.slickPrev}
          onClick={() =>
            setDisplayIndex(
              displayIndex === 0 ? props.items.length - 1 : displayIndex - 1
            )
          }
        ></div>
        {props.items.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundImage: `url(${item.img})`,
            }}
            className={displayIndex === index ? styles.currentShow : ""}
          ></li>
        ))}
        <div
          className={styles.slickNext}
          onClick={() =>
            setDisplayIndex(
              props.items.length - 1 === displayIndex ? 0 : displayIndex + 1
            )
          }
        ></div>
      </ul>
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
