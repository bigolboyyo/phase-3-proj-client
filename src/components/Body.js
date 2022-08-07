import React from "react";
import ImageInputs from "./ImageInputs";
import Avatar from "./Avatar";

function Body({ postFetch, patchFetch, deleteFetch, setUsers }) {
  return (
    <div
      style={{
        padding: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <ImageInputs />
      <Avatar />
      <button
        onClick={(e) => {
          e.preventDefault();
          postFetch("users", setUsers);
        }}
      >
        POST
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          patchFetch("users", setUsers, 2);
        }}
      >
        PATCH
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          deleteFetch("users", 2);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Body;
