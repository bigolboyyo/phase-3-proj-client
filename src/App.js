import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";

const url = "http://localhost:9292";

function App() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  console.log(users);

  const getFetch = (endpoint, cb) => {
    fetch(`${url}/${endpoint}`)
      .then((r) => r.json())
      .then((dta) => cb(dta));
  };

  // CORS ISSUE? Unexpected end of input JSON??
  // dta still posts to server side but unable to console.log(dta)
  function postFetch(ep, cb, avatar) {
    fetch(`${url}/${ep}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(avatar),
    })
      .then((r) => r.json())
      .then((dta) => {
        //console.log(dta);
        cb(dta);
      });
  }

  function patchFetch(ep, cb, id) {
    fetch(`${url}/${ep}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        user_name: "NEW USER PATCH",
        avatar_name: "PATCH FETCH NAME",
      }),
    })
      .then((r) => r.json())
      .then((dta) => cb(dta));
  }

  function deleteFetch(ep, id) {
    fetch(`${url}/${ep}/${id}`, {
      method: "DELETE",
    });
    getFetch(ep, setUsers);
  }

  useEffect(() => {
    getFetch("avatars", setUsers);
  }, []);

  // console.log(users);

  return (
    <div className="App">
      <Header />
      <Login userName={userName} setUserName={setUserName} />
      <Body
        postFetch={postFetch}
        patchFetch={patchFetch}
        deleteFetch={deleteFetch}
        setUsers={setUsers}
        userName={userName}
      />
    </div>
  );
}

export default App;
