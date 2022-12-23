import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { getAllParticipants } from "../../Utils/fetchData";

import { connect } from "react-redux";

//Style
import "../../../../css/Split/participant_table.css";
import { FaPen } from "react-icons/fa";
import { ALL, CLEAR, CHOOSE_USER, BOUGHT_BY, USED_BY } from "../../constants";

export default function ProductTable({ data, updateField }) {
  const [updatedBought, setUpdatedBought] = useState(data.product.bought);
  const [updatedUsed, setUpdatedUsed] = useState(data.product.used);
  const [updatedPrice, setUpdatedPrice] = useState(
    data.product.price ? data.product.price : ""
  );
  function updater(field, id) {
    switch (field) {
      case BOUGHT_BY:
        setUpdatedBought(id);
        break;
      case USED_BY:
        updateUsed(id);
        break;
    }
    updateField(field, id); // updates state outside.
  }
  const headers = ["Price", "Bought By", "Used By"].map((str, ind) => {
    return <th key={ind}>{str}</th>;
  });
  const allUsersOptions = transformToOption(data.allParticipants);
  const boughtByOptions = transformToOption(
    [{ id: CHOOSE_USER, name: "Choose User" }],
    allUsersOptions
  );
  const usedByOptions = transformToOption(
    [
      { id: ALL, name: "All" },
      { id: CLEAR, name: "Clear" },
    ],
    allUsersOptions
  );

  function updateUsed(id) {
    if (id == ALL) {
      setUpdatedUsed(data.allParticipants.map((user) => user.id));
    } else if (id == CLEAR) {
      setUpdatedUsed([]);
    } else {
      id = parseInt(id);
      const index = updatedUsed.indexOf(id);
      if (index > -1) {
        setUpdatedUsed(updatedUsed.filter((_, i) => i != index));
      } else {
        setUpdatedUsed(updatedUsed.concat([id]));
      }
    }
  }

  function transformToOption(arrOfUser, arrToConcat) {
    const optionOfInput = arrOfUser.map((user) => (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    ));
    if (arrToConcat) {
      return optionOfInput.concat(arrToConcat);
    }
    return optionOfInput;
  }

  const body = (
    <tr key="0">
      <td key="0">
        <Form.Control
          style={{ textDecoration: "underline" }}
          type="number"
          placeholder="Price"
          value={updatedPrice}
          onChange={(e) => {
            setUpdatedPrice(e.target.value);
          }}
        />
      </td>
      <td key="1">
        <Form.Select
          value={updatedBought}
          onChange={(e) => {
            updater(BOUGHT_BY, e.target.value);
          }}
        >
          {boughtByOptions}
        </Form.Select>
      </td>
      <td key="3">
        <Form.Control
          as="select"
          multiple
          value={updatedUsed}
          onChange={(e) => {
            updater(USED_BY, e.target.value);
          }}
        >
          {usedByOptions}
        </Form.Control>
      </td>
    </tr>
  );
  return (
    <div id="participants_form">
      <Table striped bordered hover responsive>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{body}</tbody>
      </Table>
    </div>
  );
}
