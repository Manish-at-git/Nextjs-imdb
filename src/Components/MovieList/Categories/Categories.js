import React from "react";
import styles from "./Categories.module.css";
function Categories() {
  return (
    <div className={styles.MovieList_sideBar}>
      <div className={styles.Sidebar_header}>
        <h5>You Have Seen</h5>
        <span>
          <span className={styles.bold}>0</span>/250 (0%)
        </span>
        <div className={styles.Sidebar_check}>
          <input type="checkbox" />
          <label>Hide titles I've seen</label>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.category}>
        <h6>Top Rated Movies by Genre</h6>
        {[
          "Action",
          "Adventure",
          "Animation",
          "Biography",
          "Comedy",
          "Crime",
          "Drama",
          "Family",
          "Fantasy",
          "Film-Noir",
          "History",
          "Horror",
          "Music",
          "Musical",
          "Mystery",
          "Romance",
          "Sci-Fi",
          "Sport",
          "Thriller",
          "Western",
        ].map((item) => (
          <small className={styles.categoryList}>{item}</small>
        ))}
      </div>
    </div>
  );
}

export default Categories;
