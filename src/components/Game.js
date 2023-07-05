import { Col, Row, CardImg } from "reactstrap";
import moon from '../assets/moon.svg';
import start from '../assets/star.svg';
import sun from '../assets/sun.svg';
import comet from '../assets/comet.svg';
import Headopt from "./Headopt";


function Game() {
  return (
    <>
      <Headopt />  
      <Row>
        <Col sm="3">
          <CardImg
            src={moon}
            style={{
              width: "15rem",
              height: "15rem",
            }}
          />
        </Col>
        <Col sm="3">
          <CardImg
            src={start}
            style={{
              width: "15rem",
              height: "15rem",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="3">
          <CardImg
            src={sun}
            style={{
              width: "15rem",
              height: "15rem",
            }}
          />
        </Col>
        <Col sm="3">
          <CardImg
            src={comet}
            style={{
              width: "15rem",
              height: "15rem",
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default Game;
