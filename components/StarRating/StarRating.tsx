import { useState } from "react";
import styles from './StarRating.module.scss'

type StarRatingProps = {
  rating: number,
  setRating: Function
}

const MAX_STARS = 3

export default function StarRating ({rating, setRating}: StarRatingProps) {
  const [hover, setHover] = useState(0);
  return (
    <div className={styles.starRating}>
      {[...Array(MAX_STARS)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={styles.star}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
