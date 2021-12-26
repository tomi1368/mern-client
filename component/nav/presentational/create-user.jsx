import axios from "axios";
import React, { useState } from "react";
import("./styles/create-user.css");
import { useNavigate } from "react-router-dom";
const initialUser = { nombre: "", email: "", password: "" };
const CreateUser = ({ modifyUsers }) => {
  const [usuario, setUsuario] = useState(initialUser);
  let { nombre, email, password } = usuario;
  const chngUser = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const addUser = (e) => {
    e.preventDefault();
    axios
      .post("https://crud-tomas.herokuapp.com/api/users", usuario)
      .then((res) => {
        modifyUsers(res.data);
        useNavigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>Create User</h2>
      <form className="form">
        <input
          onChange={(e) => chngUser(e)}
          type="text"
          name="nombre"
          value={nombre}
          placeholder="Your name..."
        />
        <input
          onChange={(e) => chngUser(e)}
          type="text"
          name="email"
          placeholder="Your email..."
          value={email}
        />
        <input
          onChange={(e) => chngUser(e)}
          type="password"
          name="password"
          placeholder="Your password..."
          value={password}
        />
        <input onClick={(e) => addUser(e)} type="submit" />
      </form>
    </>
  );
};

export default CreateUser;
