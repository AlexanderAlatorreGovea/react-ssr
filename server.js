import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./src/App";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("*", (req, res) => {
  const container = ReactDomServer.renderToString(
    <StaticRouter
        
    >
      <App />
    </StaticRouter>
  );
  res.send("this is my working app");
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
