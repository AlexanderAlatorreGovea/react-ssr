import "babel-polyfill";
import bodyParser from "body-parser";
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { App } from "./src/App";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("build"));

app.get("*", (req, res) => {
  const context = {};

  const APP = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  ); 

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div id="root">
        ${APP}
        </div>
        <script type="text/javascript" src="bundle.js"></script>
    </body>
    </html>
  `;
  
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
