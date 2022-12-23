import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../../styles/unified/carouselSlider.module.scss";

const TRANSOFORMING_DISPLAY_INDEX_TIME = 600;

export interface UnifiedCarouselSliderProps {
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

export const UnifiedCarouselSlider: React.FunctionComponent<
  UnifiedCarouselSliderProps
> = (props) => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const carouselSliderRef = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
    if (displayIndex === props.items.length) {
      setTimeout(() => {
        setDisplayIndex(() => 0);
      }, TRANSOFORMING_DISPLAY_INDEX_TIME);
    }
    if (displayIndex === -1) {
      setTimeout(() => {
        setDisplayIndex(() => props.items.length - 1);
      }, TRANSOFORMING_DISPLAY_INDEX_TIME);
    }
    carouselSliderRef.current!.style.transitionDuration = "0s";
  }, [displayIndex]);

  return (
    <div className={classNames(styles.unifiedCarouselSlider, props.className)}>
      <div className={styles.mainSlide}>
        <ul
          ref={carouselSliderRef}
          style={{
            width: `${(props.items.length + 3) * 100}%`,
            transform: `translate3d(-${(displayIndex + 1) * 449}px, 0px, 0px)`,
          }}
        >
          <li>
            <img src={props.items[props.items.length - 1].img} alt="" />
          </li>
          {props.items.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt="" />
            </li>
          ))}
          <li>
            <img src={props.items[0].img} alt="" />
          </li>
        </ul>
        <button
          className={styles.prev}
          onClick={() =>
            setDisplayIndex(() => {
              carouselSliderRef.current!.style.transitionDuration = "0.5s";
              return displayIndex - 1;
            })
          }
        ></button>
        <button
          className={styles.next}
          onClick={() =>
            setDisplayIndex(() => {
              carouselSliderRef.current!.style.transitionDuration = "0.5s";
              return displayIndex + 1;
            })
          }
        ></button>
      </div>
      <div className={styles.thumbnailSlides}>
        <div>
          <ul>
            {props.items.map((item, index) => (
              <li
                key={index}
                onClick={() =>
                  setDisplayIndex(() => {
                    carouselSliderRef.current!.style.transitionDuration =
                      "0.5s";
                    return index;
                  })
                }
              >
                <img src={item.img} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
