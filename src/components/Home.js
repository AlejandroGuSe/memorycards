import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/Game">
        <Button color="primary">
          Link
        </Button>
      </Link>
    </div>
  );
};
export default Home;
