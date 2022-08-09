import React, { useState } from "react";
import ImageInputs from "./ImageInputs";
import Avatar from "./Avatar";

function Body({ postFetch, userName, patchFetch }) {
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
      <ImageInputs
        avatar={avatar}
        setAvatar={setAvatar}
        postFetch={postFetch}
        patchFetch={patchFetch}
        userName={userName}
      />
      <Avatar avatar={avatar} />
    </div>
  );
}

export default Body;
