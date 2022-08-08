import React from "react";

function Avatar({ avatar }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ height: "50px", width: "50px" }}
        src={avatar.head}
        alt="Head Goes Here"
      />
      <img
        style={{ height: "50px", width: "50px" }}
        src={avatar.torso}
        alt="Torso Goes Here"
      />
      <img
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(50px, -60px)",
        }}
        src={avatar.left_arm}
        alt="Left Arm Goes Here"
      />
      <img
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(-50px, -100px)",
        }}
        src={avatar.right_arm}
        alt="Right Arm Goes Here"
      />
      <img
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(30px, -100px)",
        }}
        src={avatar.left_leg}
        alt="Left Leg Goes Here"
      />
      <img
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(-25px, -150px)",
        }}
        src={avatar.right_leg}
        alt="Right Leg Goes Here"
      />
    </div>
  );
}

export default Avatar;
