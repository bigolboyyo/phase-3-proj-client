import React from "react";
import ImageInputs from "./ImageInputs";
import Avatar from "./Avatar";
import AllAvatars from "./AllAvatars";

function Body({
  postFetch,
  userName,
  patchFetch,
  deleteFetch,
  avatar,
  setAvatar,
  getFetch,
  allAvatars,
  setAllAvatars,
  url,
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
      <AllAvatars
        getFetch={getFetch}
        setAllAvatars={setAllAvatars}
        allAvatars={allAvatars}
        setAvatar={setAvatar}
        url={url}
        avatar={avatar}
      />
    </div>
  );
}

export default Body;
