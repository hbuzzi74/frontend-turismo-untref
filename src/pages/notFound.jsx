import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginTop: "4rem",
          fontWeight: "bold",
        }}
      >
        {" "}
        404 - Pagina no encontrada
      </div>
      <Link
        to="/"
        style={{
          textAlign: "center",
          fontSize: "1rem",
          marginTop: "4rem",
          color: "#696969",
          display: "block",
        }}
      >
        Volver a inicio
      </Link>
    </>
  );
};

export default NotFound;
