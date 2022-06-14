import React from "react";
import { render } from "react-dom";
import App from "./App";

getFacts().then((facts) =>
  render(<App facts={facts} />, document.getElementById("root"))
);
