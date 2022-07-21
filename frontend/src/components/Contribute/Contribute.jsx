import "./Contribute.css";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import Dropdowns from "./Dropdowns";
import CreateQ from "./CreateQ";
import NavigationBar from "../Global/NavigationBar";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowDropDowns from "../ShowDropDowns/ShowDropDowns";

function Contribute() {
  const [subject, setSubject] = useState("");
  const [unit, setUnit] = useState("");
  return (
    <div>
      <NavigationBar />
      <div className="allContriComp">
        <Title />
        <ShowDropDowns unitDisplay={true} setSubject={setSubject} subject={subject}/>
        <Card className="Qsection">
          <CreateQ unit={unit} setUnit={setUnit}/>
          {console.log(unit)}
        </Card>
      </div>
    </div>
  );
}

export default Contribute;
