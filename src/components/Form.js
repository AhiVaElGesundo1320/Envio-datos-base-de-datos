import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import "./form.css";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [isSent, setisSent] = useState(true);

  const handleFirstName = (e) => {
    setNombre(e.target.value);
  };

  const handleLastName = (e) => {
    setApellido(e.target.value);
  };

  const handleSubmitForm = () => {
    let data = { FirstName: nombre, LastName: apellido };

    console.log(data);
    const pedidosRef = collection(db, "formulario");

    addDoc(pedidosRef, data);
  };

  return (
    <div className="main">
      {isSent === true ? (
        <div>
          <form onSubmit={handleSubmitForm}>
            <div className="text-3xl font-bold underline input-div">
              <label>Nombre:</label>
              <input
                onChange={handleFirstName}
                value={nombre}
                type="text"
                placeholder="nombre"
                required
              />
            </div>
            <div className="input-div">
              <label>Apellido:</label>
              <input
                onChange={handleLastName}
                value={apellido}
                type="text"
                placeholder="apellido"
                required
              />
            </div>
            <div>
              <button
                onClick={() => {
                  setisSent(false);                  
                }}
                type="submit"
              >
                Enviar 
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <h1>Enviado {nombre} {apellido}</h1>    
          <button
            onClick={() => {
              setisSent(true);
              setNombre('')
              setApellido('')
            }}
          >
            Volver
          </button>
        </>
      )}
    </div>
  );
};

export default Form;
