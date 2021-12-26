import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ChangeUser = () => {
  let [usuario, setUsuario] = useState({});
  let {nombre,email,password} = usuario

  const chngUser = (e)=>{
      setUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      })
  }
  const mdfUser = (e)=>{
    {e.preventDefault()}
    axios.put("http://localhost:4001/api/users/",usuario)
    .then(res=>useNavigate("/"))
    .catch(err=>console.log("hola2"))
  }
  return (
    <>
    <h2>Modify User</h2>
    <form className="form">
      <input
        onChange={(e) => chngUser(e)}
        type="text"
        name="nombre"
        value={nombre}
        placeholder="New Name..."
      />
      <input
        onChange={(e) => chngUser(e)}
        type="text"
        name="email"
        value={email}
        placeholder="New Email..."
      />
      <input
        onChange={(e) => chngUser(e)}
        type="text"
        name="password"
        value={password}
        placeholder="New Password..."
      />
      <input onClick={(e) => mdfUser(e)} type="submit" value="Modify"/>
    </form>
    </>
  );
  
};

export default ChangeUser