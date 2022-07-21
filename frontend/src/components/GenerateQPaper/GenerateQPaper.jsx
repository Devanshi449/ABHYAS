import "./GenerateQPaper.css";
import React from "react";
import NavigationBar from "../Global/NavigationBar";
import Dropdowns from "../Contribute/Dropdowns";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "./Slider";
import Question from "../Question/Question";
import ShowDropDowns from "../ShowDropDowns/ShowDropDowns";
import { useState } from "react";
import Downloadb from "./DownloadButton";
import axios from "axios";
import QCard from "../Question/QCard";



function GenerateQPaper() {
  const [Quesionlist, setQuestionlist] = useState(
    ""
  );
const [subject, setSubject] = useState("");

  const fetchQuestionList = async () => {
    const postJSON = {
      subject: subject,
    };
    console.log(postJSON);
    try {
      setQuestionlist(
        await (
          await axios.post("http://localhost:5000/api/questions/", postJSON)
        ).data
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(Quesionlist);

  return (
    <div>
      <NavigationBar />
      <ShowDropDowns
        unitDisplay={false}
        setSubject={setSubject}
        subject={subject}
      />
      {/* <Downloadb /> */}
      <div className="mySlider">
        <Slider label="Questions" />
      </div>

      <div className="d-flex justify-content-center mt-3">
        <Button  onClick={fetchQuestionList} variant="primary">Generate</Button>
      </div>
      <div>
        {/* <Question />
        <Question />
        <Question /> */}
        {Quesionlist!=""
          ? Quesionlist.Questions.map((qObj) => {
              return (
                <QCard
                  Q={qObj.question}
                  op0={qObj.options[0]}
                  op1={qObj.options[1]}
                  op2={qObj.options[2]}
                  op3={qObj.options[3]}
                  ans={String.fromCharCode(97 + parseInt(qObj.answer))}
                />
              );
            })
          : null}
      </div>
      {/* <div>
        <Button variant="primary">
          Download
        </Button>
      </div> */}
    </div>
  );
}

export default GenerateQPaper;
