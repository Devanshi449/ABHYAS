import React, { useState } from "react";
import NavigationBar from "../Global/NavigationBar";
import Dropdowns from "../Contribute/Dropdowns";
import QCard from "../Question/QCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import ShowDropDowns from "../ShowDropDowns/ShowDropDowns";
import axios from "axios";

function Qbank() {
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

  // fetchQuestionList();
  console.log(Quesionlist);

  return (
    <div>
      <NavigationBar />
    <ShowDropDowns setSubject={setSubject} subject={subject}/>
      
      <div className="d-flex justify-content-center mt-3">
        <Button onClick={fetchQuestionList} variant="primary">
          Submit
        </Button>
      </div>
      <div>
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
                  accord={true}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Qbank;