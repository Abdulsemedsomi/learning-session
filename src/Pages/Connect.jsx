import React, { useState } from "react";
import Button from "../Components/Button";
import Nav from "../Components/Nav";

export default function Connect() {
  const [count, setCount] = useState("Dont tech me again");

  const btnProperty = {
    label: count,
    theme: {
      backgroundColor: "Yellow",
    },
    onclick: aggressive,
  };

  const angry = "😭";

  function aggressive() {
    setCount((btnProperty.label = btnProperty.label + angry));
  }
  return (
    <div className="main-container">
      <Nav />
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1>Connect Page</h1>
        <Button passProperty={btnProperty} />
      </div>
    </div>
  );
}
