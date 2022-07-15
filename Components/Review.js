import React from "react";
import styles from "../styles/Reviews.module.css";


const Review = (props) => {

  return (
    <>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
              <img
                className={styles.reviewImage}
                id="image"
                src={props.src?.slice(1, props.src?.length)}
                alt="Avatar"
              />
            </div>
            <div>
              <h2 className={styles.reviewName} id="name">
                {props.name}
              </h2>
              <p className={styles.reviewText} id="text">
                {props.content}
              </p>
            </div>
          
        </div>
    </>
  );
};

export default Review;
