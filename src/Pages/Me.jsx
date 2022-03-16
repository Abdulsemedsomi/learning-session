import React from "react";
import Nav from "../Components/Nav";
import Form from "../Components/Form";

export default function Me() {
  return (
    <div className="main-container">
      <Nav />
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1>:) Page</h1>
        <Form />
      </div>
    </div>
  );
}
