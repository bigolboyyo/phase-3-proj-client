import React from "react";

function Header() {
  return (
    <div
      style={{
        padding: "1rem",
        background: "#296BB8",
        color: "white",
      }}
    >
      <h1>Avatar Creator</h1>
      <p
        style={{ fonStyle: "italic", fontSize: "10px", paddingBottom: "1rem" }}
      >
        Submit png files of different body parts to create a custom avatar!
      </p>
    </div>
  );
}

export default Header;
