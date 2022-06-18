import "babel-polyfill";
import bodyParser from "body-parser";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import { Helmet } from "react-helmet";

import { StaticRouter } from "react-router-dom/server.js";
import { App } from "./src/App";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const APP = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        <title>React SSR</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div id="root">
        ${APP}
        </div>
        <script type="text/javascript" src="client_bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
