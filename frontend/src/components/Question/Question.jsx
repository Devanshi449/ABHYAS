import React from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import QCard from "./QCard"

function Question() {
    return (
        <div>
            <QCard Q="abc" op0 = "op0" op1="op1" op2="op2" op3="op3" ans="a" />
        </div>
    );
}

export default Question;