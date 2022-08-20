import React, { useState } from "react";

function AllAvatars({
  getFetch,
  allAvatars,
  setAllAvatars,
  setAvatar,
  avatar,
  url,
}) {
  const [refId, setRefId] = useState("");
  // Use the passed in avatar state to delete by it's ID?

  //   const getFetchById = (ep, id, cb) => {
  //     fetch(`${url}/${ep}/${id}`)
  //       .then((r) => r.json())
  //       .then((dta) => cb(dta));
  //   };

  function handleAllAvatarsClick(e) {
    e.preventDefault();
    getFetch("avatars", setAllAvatars);
    //console.log(allAvatars);
  }

  async function handleAvNameClick(e) {
    let val = e.target.innerText;
    //debugger;
    //console.log(val);
    e.preventDefault();
    await getFetch("avatars", setRefId);
    await setAvatar(refId.find((av) => av.avatar_name === val));
    setRefId("");
    //getFetchById("avatars", 1, setAvatar);
  }

  return (
    <div>
      <button onClick={handleAllAvatarsClick}>All Avatars</button>
      {allAvatars.map((av, i) => {
        return (
          <h1 onClick={(e) => handleAvNameClick(e)} key={i}>
            {av.avatar_name}
          </h1>
        );
      })}
    </div>
  );
}

export default AllAvatars;
