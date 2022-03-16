import { color } from "@mui/system";
import React, { useState } from "react";
import Button from "../Components/Button";
import Nav from "./../Components/Nav";

export default function Home() {
  const [count, setCount] = useState(0);

  const btnProperty = {
    label: count,
    theme: {
      backgroundColor: "blue",
    },
    onclick: handleClick,
  };

  function handleClick() {
    setCount(++btnProperty.label);
  }
  return (
    <div className="main-container">
      <Nav />
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1>Home Page</h1>
        <Button passProperty={btnProperty} />
      </div>
    </div>
  );
}
