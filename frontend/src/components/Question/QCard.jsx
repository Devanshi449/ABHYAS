import React from "react";
import "./QCard.css";
import { Accordion, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function QCard({
  Q = "abc",
  op0 = "op0",
  op1 = "op1",
  op2 = "op2",
  op3 = "op3",
  ans = "c",
  accord = false,
}) {
  return (
    <Card className="qCard">
      <Card.Body>
        <Card.Title className="q">{Q}</Card.Title>
        <Card.Text>a) {op0}</Card.Text>
        <Card.Text>b) {op1}</Card.Text>
        <Card.Text>c) {op2}</Card.Text>
        <Card.Text>d) {op3}</Card.Text>
        {accord ? (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Show answer</Accordion.Header>
              <Accordion.Body>Correct answer: ({ans})</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ) : (
          <Card.Text>Correct answer: ({ans})</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default QCard;
