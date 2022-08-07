import React from "react";

function ImageInputs() {
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "1rem",
        }}
      >
        <label>
          Head:
          <input type="text" />
        </label>

        <label>
          Torso:
          <input type="text" />
        </label>

        <label>
          Left Arm:
          <input type="text" />
        </label>

        <label>
          Right Arm:
          <input type="text" />
        </label>

        <label>
          Left Leg:
          <input type="text" />
        </label>

        <label>
          Right Leg:
          <input type="text" />
        </label>
        <input style={{ alignSelf: "center" }} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ImageInputs;
