import React, { useState } from "react";
import ImageInputs from "./ImageInputs";
import Avatar from "./Avatar";

function Body({ postFetch }) {
  const [avatar, setAvatar] = useState({});

  return (
    <div
      style={{
        padding: "1rem 2rem 2rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <ImageInputs setAvatar={setAvatar} postFetch={postFetch} />
      <Avatar avatar={avatar} />
    </div>
  );
}

export default Body;
