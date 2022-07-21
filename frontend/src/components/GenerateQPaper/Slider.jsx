import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import { Form, Col, Row } from "react-bootstrap";

const SliderWithColumnLayoutLabel = (props) => {

    const [ value, setValue ] = React.useState(50);
  
    return (
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
          {props.label}:
          </Form.Label>
          <Col sm="6">
            <RangeSlider
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Col>
        </Form.Group>
      </Form>
    );
  
  };

export default SliderWithColumnLayoutLabel;