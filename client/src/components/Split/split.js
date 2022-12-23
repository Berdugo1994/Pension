import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ModalContainer from "./Modal/modalContainer";
import Button from "react-bootstrap/esm/Button";
import { getAllParticipants } from "./Utils/fetchData";

//Components
import ParticipantsTable from "./Components/participantsTable";
import ProductsTable from "./Components/productsTable";

//Utils
import { fetchUserData } from "./Utils/fetchData";
//Actions
import {
  setAllParticipants,
  setParticipantData,
  setParticipantProfile,
  setProductData,
} from "../../actions/split";

//css
import "../../css/Split/split.css";
import { NavLink } from "react-bootstrap";

import { USER, PRODUCT } from "./constants";

function Split({
  setAllParticipants,
  setParticipantProfile,
  setParticipantData,
  setProductData,
  data,
}) {
  const [showModal, setShowModal] = useState(false);
  const [kind, setKind] = useState();
  useEffect(() => {
    getAllParticipants().then((p) => {
      setAllParticipants(p);
    });
  }, []);

  //USER
  const showUser = (userId) => {
    fetchUserData(userId).then((user) => {
      setParticipantData(user);
      setShowModal(true);
      setKind(USER);
    });
  };

  const addUser = () => {
    setParticipantProfile({ name: "", amount: 1, payed: 0, remain: "--" });
    setShowModal(true);
    setKind(USER);
  };

  //PRODUCT
  const showProduct = (productData) => {
    setProductData(productData);
    setShowModal(true);
    setKind(PRODUCT);
  };

  const addProduct = () => {
    setProductData({
      name: "",
      price: null,
      bought: { id: -1, name: null },
      used: [],
      allParticipants: data.allParticipants,
    });
    setShowModal(true);
    setKind(PRODUCT);
  };

  return (
    <div id="split">
      <ParticipantsTable showUser={showUser} />
      <div style={{ textAlign: "center" }}>
        <Button
          variant="primary"
          onClick={() => addUser()}
          style={{ minWidth: "30%" }}
        >
          Add Participant
        </Button>
        <div>aa</div>
        <br />
        <ProductsTable showProduct={showProduct} data={data} />
        <Button
          variant="primary"
          onClick={() => addProduct()}
          style={{ minWidth: "30%" }}
        >
          Add Product
        </Button>
      </div>
      {showModal && (
        <ModalContainer kind={kind} showModal={setShowModal} data={data} />
      )}
    </div>
  );
}
Split.propTypes = {};
const mapStateToProps = (state) => ({
  data: state.split,
});
export default connect(mapStateToProps, {
  setParticipantProfile,
  setParticipantData,
  setProductData,
  setAllParticipants,
})(Split);
