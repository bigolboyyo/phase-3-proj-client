import React from "react";

const testHead =
  "https://media.istockphoto.com/vectors/color-illustration-of-frankenstein-head-vector-id841214240?k=6&m=841214240&s=170667a&w=0&h=I9o-lIbTr-vCawZuUb9N2uc4sNxg-4dNP5A_LcYLFs0=";
const testTorso =
  "https://static.turbosquid.com/Preview/2017/03/23__09_49_08/16.jpg7CD668A2-0C28-4DC5-B320-754D57DDFDE9Zoom.jpg";
const testLeftArm =
  "https://cdn.wikimg.net/en/strategywiki/images/3/3d/MS_Monster_Zakum's_Arm_7.png";
const testRightArm =
  "https://i.ebayimg.com/images/g/euwAAOSwe7BWxono/s-l400.jpg";
const testLeftLeg =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2220d492-7c10-4677-b199-cd8bd3e53157/d8pad9t-69edc44a-9e22-4fb6-98ba-b7a8d74e828d.png/v1/fill/w_600,h_944,q_80,strp/bonnie_s_left_leg_by_alien_psychopath_d8pad9t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQ0IiwicGF0aCI6IlwvZlwvMjIyMGQ0OTItN2MxMC00Njc3LWIxOTktY2Q4YmQzZTUzMTU3XC9kOHBhZDl0LTY5ZWRjNDRhLTllMjItNGZiNi05OGJhLWI3YThkNzRlODI4ZC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.oSdqhoWJCexzmAG5EFYUBURainlyAsEyvvThaCDnSKU";
const testRightLeg =
  "https://i.ebayimg.com/images/g/zygAAOSwYX9dYUyB/s-l300.jpg";

function Avatar() {
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
        src={testHead}
        alt="Head Goes Here"
      />
      <img
        style={{ height: "50px", width: "50px" }}
        src={testTorso}
        alt="Torso Goes Here"
      />
      <img
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(50px, -60px)",
        }}
        src={testLeftArm}
        alt="Left Arm Goes Here"
      />
      <img
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(-50px, -100px)",
        }}
        src={testRightArm}
        alt="Right Arm Goes Here"
      />
      <img
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(30px, -100px)",
        }}
        src={testLeftLeg}
        alt="Left Leg Goes Here"
      />
      <img
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(-25px, -150px)",
        }}
        src={testRightLeg}
        alt="Right Leg Goes Here"
      />
    </div>
  );
}

export default Avatar;
