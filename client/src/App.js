// client/src/App.js
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PensionContainer from "./components/pensionContainer";
import "bootstrap/dist/css/bootstrap.css";

//MUI components

function App() {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <Provider store={store}>
      <PensionContainer style={{ minHeight: "100%" }} />
    </Provider>
  );
}

export default App;
