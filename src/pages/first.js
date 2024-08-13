import React from "react";
import Link from "@docusaurus/Link";

export default function MyReactPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
        padding: "20px",
        height: "50vh",
        fontSize: "20px",
      }}
    >
      <h1>My First React page</h1>
      <p>This is an Example of React page</p>
      <p>
        Please click on the <Link to="/docs/intro">Tutorial ⏱️</Link> menu
      </p>
    </div>
  );
}
