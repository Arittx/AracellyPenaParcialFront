import React from "react";

const Card = ({ nombre, color }) => {
  return (
    <div className="card">
      <h3>Hola {nombre}</h3>
      <h3>Sabemos que tu color favorito es: </h3>
      <div
        style={{
          backgroundColor: color,
          width: "100%",
          textAlign: "center",
          color: "white",
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default Card;
