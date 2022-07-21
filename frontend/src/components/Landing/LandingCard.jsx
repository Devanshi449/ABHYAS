import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function LandingCard({ imgSource = "", title = "", link = "/" }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Card style={{ width: "20rem" }}>
        <Card.Img style={{ height: "15rem" }} variant="top" src={imgSource}></Card.Img>
        <Card.Body style={{fontSize:"23px"}} className="text-center"><b>{title}</b></Card.Body>
      </Card>
    </Link>
  );  
}

export default LandingCard;
