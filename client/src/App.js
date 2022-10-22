// client/src/App.js
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PensionContainer from "./components/pensionContainer";
import CustomContainer from "./components/customContainer";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "./components/topBar";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <Provider store={store}>
      <TopBar />
      <Routes>
        <Route
          path='/'
          element={<PensionContainer />}
          style={{ minHeight: "100%" }}
        />
        <Route
          path='/custom'
          element={<CustomContainer />}
          style={{ minHeight: "100%" }}
        />
      </Routes>
    </Provider>
  );
}

export default App;
