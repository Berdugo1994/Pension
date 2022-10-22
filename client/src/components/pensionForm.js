import React, { useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "../css/form_container.css";
import DatePicker from "react-date-picker";
import { fetchPensionValues } from "../utils/utils";
import ToolTip from "./toolTip";

function PensionForm({ setPensionData, setEmploymentAction }) {
  const [salary, setSalary] = useState();
  const [employerSev, setEmployerSev] = useState(0);
  const [employerGem, setEmployerGem] = useState(0);
  const [employeeGem, setEmployeeGem] = useState(0);
  const [date, setDate] = useState(new Date(2022, 0, 1));
  const [employment, setEmployment] = useState("1");

  function formHandler(event) {
    event.preventDefault();
    if (
      isNaN(salary) ||
      isNaN(employerSev) ||
      isNaN(employerGem) ||
      isNaN(employeeGem)
    ) {
      console.log("Bad input");
      return;
    }
    fetchPensionValues(
      date.getMonth() + 1 + "-" + date.getFullYear(),
      salary,
      employerSev,
      employerGem,
      employeeGem
    ).then((data) => setPensionData(data));
  }

  return (
    <Form id='form_container' onSubmit={formHandler}>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridSelect'>
          <Form.Label>Employment</Form.Label>
          <Form.Select
            aria-label='Default select example'
            onChange={(e) => {
              setEmployment(e.target.value);
              setEmploymentAction(e.target.value);
              setEmployerGem(0);
              setEmployerSev(0);
            }}
          >
            <option value='1'>employee</option>
            <option value='2'>Independent</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId='formGridSalary'>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type='number'
            placeholder='Total Salary'
            onChange={(event) => {
              setSalary(parseInt(event.target.value));
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridEmployer'>
          <Form.Label>Employer</Form.Label>
          <InputGroup>
            <Form.Control
              disabled={employment == "2"}
              value={employerSev}
              type='number'
              step='0.01'
              placeholder='Severance'
              onChange={(event) => {
                setEmployerSev(parseFloat(event.target.value));
              }}
            />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
          <InputGroup>
            <Form.Control
              disabled={employment == "2"}
              value={employerGem}
              type='number'
              step='0.01'
              placeholder='Gemel'
              onChange={(event) => {
                setEmployerGem(parseFloat(event.target.value));
              }}
            />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} controlId='formGridEmployee'>
          <Form.Label>Employee</Form.Label>
          <InputGroup>
            <Form.Control
              value={employeeGem}
              type='number'
              step='0.01'
              placeholder='Gemel'
              onChange={(event) => {
                setEmployeeGem(parseFloat(event.target.value));
              }}
            />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} controlId='formGridDateSend'>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Label>Since</Form.Label>
            <ToolTip
              context={
                "This page visualize<br/> 'HOW MUCH MONEY COULD I HAVE NOW, IF I WAS SET ASIDE PENSION SINCE DATE = X<br/> (Assuming your pension bag is 100% dow jones stock shares)"
              }
            />
          </div>
          <div>
            <DatePicker
              onChange={setDate}
              value={date}
              defaultView={"year"}
              maxDate={new Date()}
              minDate={new Date(1972, 0, 1)}
              maxDetail={"year"}
            />
          </div>
          <div className='d-grid gap-2' style={{ marginTop: "2px" }}>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default PensionForm;
