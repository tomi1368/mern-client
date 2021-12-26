import React, { useState } from "react";
import axios from "axios";
import "./styles/delete-user.css"
import { useNavigate } from "react-router-dom";
const DeleteUser = ({ modifyUsers }) => {
  let [email, setEmail] = useState("");

  const chgEmail = (e) => {
    setEmail(e.target.value);
    useNavigate("/")
  };
  const dltUser = (e) => {
    {
      e.preventDefault();
    }
    axios
      .delete("https://crud-tomas.herokuapp.com/api/users", {
          data:{
              email
          }
      })
      .then((res) => modifyUsers(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
    <h2>Delete User</h2>
    <form className="form">
      <input onChange={(e) => chgEmail(e)} type="text" placeholder="Deleted by name..." value={email} />
      <input onClick={(e) => dltUser(e)} type="submit" value="Delete" />
    </form>
    </>
  );
};

export default DeleteUser;
