import { Col, Row,Input} from "reactstrap";
import React, { useState } from 'react';
import Soundoff from '../assets/sound--off.svg';
import Soundon from '../assets/sound--on.svg';

function Headopt() {
  const [state, setState] = useState(true);
  return (
    <div>
      <Row>
        <Col sm="9">
            
        </Col>
        <Col sm="3">  
        <Input
          type="switch"
          checked={state}
          onClick={() => {
            setState(!state);
          }}
        />
        <img
            alt="logo"
            src={state ? Soundon : Soundoff}
            style={{
             height: 40,
             width: 40,
            }}
        />
        </Col>
      </Row>
    </div>
  );
}

export default Headopt;
