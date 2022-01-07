import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import {Container, CssBaseline} from "@mui/material";


// import App from "./tutorial-1/App";
// import App from "./tutorial-2/App";
// import App from "./tutorial-3/App";
// import App from "./tutorial-5/App";
import App from "./tutorial-6/App";

ReactDOM.render(
  <React.StrictMode>
    <Container >
      <App />
      <CssBaseline/>
    </Container>
  </React.StrictMode>,
  document.getElementById("root"),
);
