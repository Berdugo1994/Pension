import React, { useState } from "react";

import Table from "react-bootstrap/Table";

//Utils
import { fetchProductData } from "../Utils/fetchData";

//style
import "../../../css/Split/products_table.css";
export default function ProductsTable({ showProduct, data }) {
  console.log("DATA IS: ", data)
  const dataRow2 = [
    <td
    onClick={() => {
      fetchProductData(1).then((product) => {
        showProduct(product);
      });
    }}
    key="1"
  >
    Banana
  </td>,
    <td key="2">1000</td>,
    <td key="3">Eden</td>,
    <td key="4">3</td>,
    <td key="5">Edo, Tal, ...</td>,
  ];
  const dataRow3 = [
    <td key="1">Meat</td>,
    <td key="2">2000</td>,
    <td key="3">Tal</td>,
    <td key="4">1</td>,
    <td key="5">Edo</td>,
  ];
  const summaryData = [dataRow2, dataRow3];
  const headers = ["#", "Product", "Price", "Bought by", "# Participants", "Used by"].map(
    (str, ind) => {
      return <th key={ind}>{str}</th>;
    }
  );

  function extractRow(ind) {
    return (
      <tr key={1 + ind}>
        <td key={0}>{ind + 1}</td>
        {summaryData[ind]}
      </tr>
    );
  }
  return (
    <div id="participants_form">
      <Table striped bordered hover responsive>
        <thead>
          <tr key={0}>{headers}</tr>
        </thead>
        <tbody>
          {extractRow(0)}
          {extractRow(1)}
        </tbody>
      </Table>
    </div>
  );
}
