import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function CreateQ(props) {
  const [questionStatement, setQuestionStatement] = useState("");
  const [option0, setOption0] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  function valueHandler(setter) {
    return (e) => {
      setter(e.target.value);
    };
  }

  function answerIdx() {
    if (document.querySelector("#option1").checked) return 0;
    if (document.querySelector("#option2").checked) return 1;
    if (document.querySelector("#option3").checked) return 2;
    return 3;
  }
  return (
    <Form>
      <Form.Group as={Col} className="mb-3" controlId="formHorizontalQ">
        <Form.Label column sm={2}>
          Question:
        </Form.Label>
        <Col sm={12}>

          <Form.Control type="text" placeholder="Question Statement" required />

        </Col>
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formHorizontalOption">
        <Form.Label column sm={2}>
          Options:
        </Form.Label>

        <Form.Group as={Col} className="mb-3 optionForm">

          <Form.Check type="radio" name="options" id="option1" className="optionBox" required />
          <Col sm={10}>
            <Form.Control type="text" placeholder="Option 1" required />

          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 optionForm">
          <Form.Check
            type="radio"
            name="options"
            id="option2"
            className="optionBox"
          />
          <Col sm={10}>

            <Form.Control type="text" placeholder="Option 2" required />

          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 optionForm">
          <Form.Check
            type="radio"
            name="options"
            id="option3"
            className="optionBox"
          />
          <Col sm={10}>

            <Form.Control type="text" placeholder="Option 3" required />

          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 optionForm">
          <Form.Check
            type="radio"
            name="options"
            id="option4"
            className="optionBox"
          />
          <Col sm={10}>

            <Form.Control type="text" placeholder="Option 4" required />


          </Col>
        </Form.Group>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <div className="addQbutt">
            <Button
              type="button"
              onClick={async () => {
                const postJSON = {
                  unitId: props.unit,
                  options: [option0, option1, option2, option3],
                  questionStatement,
                  answer: answerIdx(),
                };
                console.log(postJSON);
                try {
                  console.log(
                    await axios.post(
                      "http://localhost:5000/api/question/",
                      postJSON
                    )
                  );
                } catch (error) {}
              }}
            >
              Submit
            </Button>
          </div>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CreateQ;