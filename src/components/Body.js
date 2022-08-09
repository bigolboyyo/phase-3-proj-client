import React from "react";
import ImageInputs from "./ImageInputs";
import Avatar from "./Avatar";

function Body({
  postFetch,
  userName,
  patchFetch,
  deleteFetch,
  avatar,
  setAvatar,
}) {
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
        deleteFetch={deleteFetch}
        userName={userName}
      />
      <Avatar avatar={avatar} />
    </div>
  );
}

export default Body;
