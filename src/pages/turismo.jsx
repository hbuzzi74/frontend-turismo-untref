import React, { useState } from "react";
import Destinos from "../components/Destinos";

const turismo = () => {
  const [nombreQuery, setNombreQuery] = useState("");
  const [categoriaQuery, setCategoriaQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setNombreQuery(event.target[0].value);
    setCategoriaQuery(event.target[1].value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-950 to-sky-900 px-3  text-sky-100">
      {/* <div className="px-3"> */}
      <br></br>
      <h1 className="text-5xl flex justify-center font-['Open_Sans']">
        General La Madrid
      </h1>
      <h2 className="text-2xl flex justify-center italic">
        Un oasis de tranquilidad en la Provincia de Buenos Aires{" "}
      </h2>
      <br></br>

      <form action="" onSubmit={handleSearch}>
        <div className="flex justify-center">
          <input
            type="text"
            name="nombre"
            placeholder="lugares.."
            className="bg-gray-200 text-gray-800 px-2 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-300 w-2/5"
          />
          <select
            type="select"
            name="categoria"
            className="mr-4 relative w-2/5 h-[40px] text-slate-500 justify-between font-bold text-lg rounded-lg selection:text-blue-100 tracking-wider border-4 border-transparent active:border-black duration-300 active:text-black"
          >
            <option value="">Todas</option>
            <option value="hospedaje">Hospedaje</option>
            <option value="paseos">Paseos</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 bg-green-500 p-1 w-[110px] font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white "
          >
            {" "}
            Buscar{" "}
          </button>
        </div>
        <br></br>
      </form>
      <Destinos nombre={nombreQuery} categoria={categoriaQuery} />
    </div>
  );
};

export default turismo;
