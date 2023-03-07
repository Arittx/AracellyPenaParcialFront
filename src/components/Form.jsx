import React, { useRef } from "react";
import { useState } from "react";
import Card from "./Card";

const Form = () => {
  const formRef = useRef(null);
  const [user, setUser] = useState({
    nombre: "",
    color: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      user.nombre &&
      user.color &&
      user.color.length <= 6 &&
      user.nombre.length > 3
    ) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
    formRef.current.reset();
  };

  return (
    <>
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          onChange={(event) =>
            setUser({ ...user, nombre: event.target.value.trimStart() })
          }
          placeholder="Ingresa tu nombre"
        />
        <input
          type="text"
          onChange={(event) => setUser({ ...user, color: event.target.value })}
          placeholder="Ingresa tu color favorito (formato HEX)"
        />

        <button type="submit"> Enviar </button>
      </form>

      {err && <span>Por favor chequea que la informacion sea correcta</span>}

      {show && <Card nombre={user.nombre} color={user.color} />}
    </>
  );
};

export default Form;
