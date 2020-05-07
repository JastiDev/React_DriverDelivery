import React, { useState, useEffect } from "react";

export const UserList = (props) => {
  const [newUser, setNewUser] = useState({ name: "" });
  const [arrUser, setArrUser] = useState([]);

  useEffect(() => {
    console.log("didmount");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser.name === "") return;

    setArrUser((arr) => [...arr, newUser]);

    setNewUser({ name: "" });
  };

  const onChangeName = (event) => {
    let name = event.target.value;
    setNewUser({ name });
  };

  const tryRemove = (_i) => {
    // if (window.confirm("Remove this user?")) {
    setArrUser((arr) => [
      ...arr.slice(0, _i),
      ...arr.slice(_i + 1, arr.length),
    ]);
    // }
  };

  return (
    <div style={props.style}>
      <h2>{props.tag}</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={newUser.name}
            onChange={onChangeName}
          />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            <i className="fa fa-plus" />
          </button>
        </form>
      </div>

      <div
        style={{
          marginTop: "50px",
          width: "80%",
          height: "100%",
          overflowY: "auto",
        }}
      >
        {arrUser.map((user, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "row" }}>
            <button className="btn btn-danger" onClick={(e) => tryRemove(i)}>
              <i className="fa fa-close" />
            </button>
            <button
              className="btn btn-success"
              style={{ margin: "5px", flex: 1 }}
            >
              {user.name}
              <i
                className="fa fa-sign-in"
                style={{ float: "right", margin: "auto" }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
