import React, { useState } from "react";

function ImageInputs({ postFetch, setAvatar, userName }) {
  const [avName, setAvName] = useState("");
  const [head, setHead] = useState("");
  const [torso, setTorso] = useState("");
  const [leftArm, setLeftArm] = useState("");
  const [rightArm, setRightArm] = useState("");
  const [leftLeg, setLeftLeg] = useState("");
  const [rightLeg, setRightLeg] = useState("");

  function handleAvNameChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setAvName(e.target.value);
  }

  function handleHeadChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setHead(e.target.value);
  }

  function handleTorsoChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setTorso(e.target.value);
  }

  function handleLeftArmChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setLeftArm(e.target.value);
  }

  function handleRightArmChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setRightArm(e.target.value);
  }

  function handleLeftLegChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setLeftLeg(e.target.value);
  }

  function handleRightLegChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setRightLeg(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const avatar_rb = {
      user_name: userName,
      avatar_name: avName,
      head: head,
      torso: torso,
      left_arm: leftArm,
      right_arm: rightArm,
      left_leg: leftLeg,
      right_leg: rightLeg,
    };
    const user_rb = {
      user_name: userName,
      avatar_name: avName,
    };
    console.log(avatar_rb);
    setAvatar(avatar_rb);
    postFetch("avatars", setAvatar, avatar_rb);
    postFetch("users", undefined, user_rb);
    setAvName("");
    setHead("");
    setTorso("");
    setLeftArm("");
    setRightArm("");
    setLeftLeg("");
    setRightLeg("");
  }

  // console.log(avatar);

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          Avatar Name:
          <input
            type="text"
            name="avname"
            placeholder="Enter Your Avatar's Name!"
            onChange={handleAvNameChange}
            value={avName}
          />
        </label>

        <label>
          Head:
          <input
            type="text"
            name="head"
            placeholder="Head.png"
            onChange={handleHeadChange}
            value={head}
          />
        </label>

        <label>
          Torso:
          <input
            type="text"
            name="torso"
            placeholder="Torso.png"
            onChange={handleTorsoChange}
            value={torso}
          />
        </label>

        <label>
          Left Arm:
          <input
            type="text"
            name="leftArm"
            placeholder="LeftArm.png"
            onChange={handleLeftArmChange}
            value={leftArm}
          />
        </label>

        <label>
          Right Arm:
          <input
            type="text"
            name="rightarm"
            placeholder="RightArm.png"
            onChange={handleRightArmChange}
            value={rightArm}
          />
        </label>

        <label>
          Left Leg:
          <input
            type="text"
            name="leftleg"
            placeholder="LeftLeg.png"
            onChange={handleLeftLegChange}
            value={leftLeg}
          />
        </label>

        <label>
          Right Leg:
          <input
            type="text"
            name="rightleg"
            placeholder="RightLeg.png"
            onChange={handleRightLegChange}
            value={rightLeg}
          />
        </label>
        <input style={{ alignSelf: "center" }} type="submit" />
      </form>
    </div>
  );
}

export default ImageInputs;
