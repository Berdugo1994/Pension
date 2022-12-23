import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

//Style
import "../../../../css/Split/participant_products.css";

export default function ParticipantProducts({ data, updateField }) {
  console.log("ReRendered", data);
  const [updatedAmount, setUpdatedAmount] = useState(data.profile.amount);
  const BoughtHeaders = ["Product", "Price", "Who Used?", "Edit"].map(
    (str, ind) => {
      return <th key={ind}>{str}</th>;
    }
  );
  const boughtBody = data.bought
    ? data.bought.map((item, i) => (
        <tr key={i}>
          <td key="0">{item.name}</td>
          <td key="1">{item.price}</td>
          <td key="2">
            {item.used_by.map((user) => (
              <div id="user_bought_row" key={user.id}>
                {user.name}
              </div>
            ))}
          </td>
          <td key="3">Click To Edit</td>
        </tr>
      ))
    : [];
  const usedHeaders = ["Product", "Price", "Who Bought?", "Edit"].map(
    (str, ind) => {
      return <th key={ind}>{str}</th>;
    }
  );

  const body = (
    <tr key="0">
      <td key="0">
        <Form.Select
          value={updatedAmount}
          onChange={(e) => {
            setUpdatedAmount(e.target.value); // For view
            updateField("amount", e.target.value);
          }}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </td>
      <td key="1">{data.profile["payed"]}</td>
      <td key="2">{data.profile["remain"]}</td>
      <td key="3">{data.profile["remain"]}</td>
    </tr>
  );
  return (
    <div id="participants_form">
      <h2 className="table-title">Bought</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>{BoughtHeaders}</tr>
        </thead>
        <tbody>{boughtBody}</tbody>
      </Table>
      <h2 className="table-title">Used</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>{usedHeaders}</tr>
        </thead>
        <tbody>{body}</tbody>
      </Table>
    </div>
  );
}
