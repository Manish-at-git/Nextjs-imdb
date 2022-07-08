import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus as Plus } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.css";

import { useSelector } from "react-redux";

function Cards(props) {
  const signedIn = useSelector((state) => state.registeredUser);
  let localStorageList = JSON.parse(localStorage.getItem(signedIn)) || [];

  const navigate = useNavigate();

  const watchlist = (user) => {
    // console.log(signedIn);
    if (!(signedIn.toString().trim() === "")) {
      let duplicate = false;
      localStorageList.forEach((item) => {
        if (item.id === user.id) {
          duplicate = true;
          // console.log("dupliocate");
          // console.log(duplicate);
        }
      });

      if (duplicate === false) {
        localStorageList.push(user);
        localStorage.setItem(signedIn, JSON.stringify(localStorageList));
      }
    } else {
      navigate("/register");
    }
  };
  return (
    <div className={styles.AppCard}>
      <Card className={styles.Cards}>
        <Card.Img
          variant="top"
          src={props.item.image}
          className={styles.card_img}
        />
        <span
          className={styles.add_bookmark_span}
          onClick={() => watchlist(props.item)}
        >
          <FontAwesomeIcon
            icon={Plus}
            size="lg"
            className={styles.add_bookmark}
          />
        </span>

        <Card.Body className={styles.card_body}>
          <Card.Text className={(styles.cardText, styles.rating)}>
            <span className={styles.icons}>
              <FontAwesomeIcon
                icon={solidStar}
                className={styles.icons_rating}
              />
              7.2
            </span>
            <span className={(styles.icons, styles.thin)}>
              <FontAwesomeIcon icon={thinStar} className={icons_rating_thin} />
            </span>
          </Card.Text>
          <Card.Title className={(styles.cardText, styles.title)}>
            {props.item.title}
          </Card.Title>
          <Card.Text className={(styles.cardText, styles.watch_options)}>
            <FontAwesomeIcon
              icon={Plus}
              style={{ paddingRight: "8px", backgroundColor: "transparent" }}
            />
            Watchlist
          </Card.Text>
          <Card.Text className={(styles.cardText, styles.trailer)}>
            <span className={styles.trailer_text}>
              <FontAwesomeIcon
                icon={faPlay}
                className={styles.trailer_text_icon}
              />{" "}
              Trailer
            </span>
            <span className={styles.trailer_icon}>
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Cards;
