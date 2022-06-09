import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import img from "./img.png";
import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus as Plus } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import "./Card.css";
function Cards() {
  return (
    <div className="App">
      <Card className="Cards" style={{ backgroundColor: "#1a1a1a" }}>
        <Card.Img variant="top" src={img} className="card-img" />
        <span className="add-bookmark-span">
          <FontAwesomeIcon icon={Plus} size="lg" className="add-bookmark" />
        </span>

        <Card.Body className="card-body">
          <Card.Text className="cardText rating">
            <span className="icons">
              <FontAwesomeIcon icon={solidStar} className="icons-rating" />
              7.5
            </span>
            <span className="icons thin">
              <FontAwesomeIcon icon={thinStar} className="icons-rating-thin" />
            </span>
          </Card.Text>
          <Card.Title className="cardText title">Obi-van Kenobi</Card.Title>
          <Card.Text className="cardText watch-options">
            <FontAwesomeIcon
              icon={Plus}
              style={{ paddingRight: "8px", backgroundColor: "transparent" }}
            />
            Watchlist
          </Card.Text>
          <Card.Text className="cardText trailer">
            <span className="trailer-text">
              <FontAwesomeIcon icon={faPlay} className="trailer-text-icon" />{" "}
              Trailer
            </span>
            <span className="trailer-icon">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Cards;
