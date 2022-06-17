import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Home Page</h1>
      <button onClick={() => console.log("js is running")}>
        console log some term
      </button>
    </div>
  );
};

export { HomePage };
