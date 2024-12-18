import { useState } from "react";
import { useEffect } from "react";
import "../estilos/imagen_spinner.css"; // Centrado de la imagen del spinner
import "../estilos/imagen_destino.css"; // Centrado de las imágenes del destino

// import json_destinos from "../datos/destinos.json";
// const URL_SERVICIO_DESTINOS = "http://localhost:3008/destinos";

const Destinos = ({ nombre, categoria }) => {
  const [destinos, setDestinos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado del spinner (mostrar / ocultar)

  if (typeof nombre === "undefined") {
    nombre = ""; // Si no tenemos un nombre válido, lo convertimos a cadena vacía
  }

  if (typeof categoria === "undefined") {
    categoria = ""; // Si no tenemos un nombre válido, lo convertimos a cadena vacía
  }

  useEffect(() => {
    // fetch(URL_SERVICIO_DESTINOS)
    fetch(import.meta.env.VITE_URL_SERVICIO_DESTINOS + "/destinos")
      .then((respuesta) => respuesta.json())
      .then((respuestaDestinos) => {
        setDestinos(respuestaDestinos);
      })
      .catch((error) => {
        console.error("Error al obtener destinos: " + error);
      })
      .finally(() => setLoading(false));
  }, []);

  let destinosEncontrados = 0;
  return (
    <>
      {loading ? (
        <div className="imagen-spinner">
          <img
            src="images/loading.gif"
            alt="Cargando..."
            style={{ alignself: "center" }}
          />
        </div>
      ) : (
        <div style={{ padding: "10px" }}>
          {destinos.map((destino) => {
            if (
              (nombre === "" && categoria === "") ||
              (nombre === "" &&
                destino.categoria.toLowerCase() === categoria) ||
              (destino.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !=
                -1 &&
                categoria === "") ||
              (destino.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !=
                -1 &&
                destino.categoria.toLowerCase() === categoria.toLowerCase())
            ) {
              destinosEncontrados++;
              return (
                <>
                  <div key={destino.id} id={destino.id}>
                    <h1 id="nombre">
                      Nombre: <b>{destino.nombre}</b>
                    </h1>
                    <h2 id="descripcion">Descripción: {destino.descripcion}</h2>
                    <h3 id="categoria">
                      Categoría: <b>{destino.categoria}</b>
                    </h3>
                    <p id="referencia">Ubicación: {destino.referencia}</p>
                    <p id="direccion">{destino.direccion}</p>
                    <a
                      id="enlace_google_maps"
                      href={destino.enlace_google_maps}
                      target="_blank"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Ver en Google Maps
                    </a>
                    <br></br>
                    <br></br>
                    {destino.imagenes.map((imagen) => {
                      return (
                        <img
                          className="imagen-destino"
                          key={imagen}
                          src={imagen}
                          alt="Imagen de referencia"
                        ></img>
                      );
                    })}
                    <br></br>
                    <p id="horarios">Horario: {destino.horarios}</p>

                    <a
                      id="url"
                      href={destino.url}
                      target="_blank"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Sitio Web
                    </a>

                    <br />
                    <br />
                    <hr />
                    <br />
                  </div>
                </>
              );
            }
          })}
          Total destinos encontrados: {destinosEncontrados}
          <br></br>
          <br></br>
        </div>
      )}
    </>
  );
};

export default Destinos;
