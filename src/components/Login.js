import React from "react";

function Login({ setUserName, userName }) {
  function handleUserNameChange(e) {
    e.preventDefault();
    setUserName(e.target.value);
  }

  return (
    <div style={{ paddingTop: "1rem" }}>
      <form>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          placeholder="enter username here"
          value={userName}
          onChange={handleUserNameChange}
        />
      </form>
      <h1>{userName}</h1>
    </div>
  );
}

export default Login;
