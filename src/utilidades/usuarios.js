/*
Este módulo provee las funciones para permitir a un usuario autenticarse como usuario registrado en el sitio.
Establece un flag persistente (guardado en el almacenamiento local del navegador) indicando si el usuario se 
encuentra autenticado en el sitio.

Funciones según su utilidad:
1) Verificar si un usuario existe: existeUsuario() -> devuelve true o false
2) Crear un usuario: registrarUsuario() -> devuelve true si fue creado, de otra forma devuelve false
3) Recuperar del local storage los datos de un usuario: recuperarUsuario() -> devuelve los datos del usuario, o null si el usuario no fue encontrado
4) Verificar si un usuario tiene sesión iniciada: sesionIniciada() -> devuelve true si el usuario existe y tiene sesión iniciada, de otra forma devuelve false
5) Iniciar sesión de usuario: iniciarSesion() -> devuelve true si el usuario existe y la clave recibida es correcta, de otra forma devuelve false

*/

const REGISTRO_LOCAL = "datosUsuario"; // Nombre de la entrada en el local storage del navegador

// Retorna true si un usuario se encuentra registrado en el almacenamiento del navegador, de otra forma devuelve false
function existeUsuario(usuario) {
  let datosUsuario = recuperarUsuario();
  if (datosUsuario == null || datosUsuario.usuario != usuario) {
    return false; // Usuario no existe o no coincide con el argumento recibido
  }
  return true;
}

// Crea un usuario en el almacenamiento local del navegador
// La función devuelve true si el usuario fue creado y su sesión está iniciada, de otra forma devuelve false
function registrarUsuario(usuario, clave) {
  if (existeUsuario(usuario)) {
    return false; // El usuario ya existe y no puede ser creado
  }
  const datosUsuario = {
    usuario: usuario,
    clave: clave,
    sesionIniciada: true,
  };

  localStorage.setItem(REGISTRO_LOCAL, JSON.stringify(datosUsuario)); // Se crea el usuario, con el flag de sesión iniciada en true

  return true;
}

// Retorna los datos (usuario, clave y sesionIniciada) de un usuario dado.
// Si el usuario no existe, devuelve null.
function recuperarUsuario() {
  return JSON.parse(localStorage.getItem(REGISTRO_LOCAL));
}

// Devuelve true si un usuario existe y tiene sesion iniciada, de otra forma devuelve false
function sesionIniciada(usuario) {
  let datosUsuario = recuperarUsuario(usuario);
  if (datosUsuario == null || datosUsuario.usuario != usuario) {
    return false; // El usuario no existe
  }
  return datosUsuario.sesionIniciada; // Devolver el valor del flag de sesión iniciada
}

// Esta función verifica que el usuario y clave recibidos son válidos, y de ser así
// entonces enciende (true) el flag de usuario autenticado con sesión iniciada
function iniciarSesion(usuario, clave) {
  if (!existeUsuario(usuario)) {
    return false; // El usuario no se encuentra registrado
  }
  let datosUsuario = recuperarUsuario(usuario);
  if (datosUsuario.clave === clave) {
    // Verificar que la clave sea correcta
    return actualizarUsuario(usuario, clave, true); // Se cambia el flag de sesión iniciada a true
  }
  return false; // El usuario existe pero la clave no coincide
}

// Esta función verifica que el usuario y clave recibidos son válidos, y de ser así
// entonces apaga (false) el flag de usuario autenticado con sesión iniciada
function finalizarSesion(usuario) {
  if (!existeUsuario(usuario)) {
    // El usuario no se encuentra registrado
    return false;
  }
  let datosUsuario = recuperarUsuario(usuario);
  actualizarUsuario(usuario, datosUsuario.clave, false);
  return true;
}

// Esta función verifica si un usuario existe, y de ser así entonces modifica su clave y/o flag de sesión iniciada en el almacenamiento local del navegador
function actualizarUsuario(usuario, clave, sesionIniciada) {
  if (!existeUsuario(usuario)) {
    return false;
  }
  const datosUsuario = {
    usuario: usuario,
    clave: clave,
    sesionIniciada: sesionIniciada,
  };
  localStorage.setItem(REGISTRO_LOCAL, JSON.stringify(datosUsuario));
  return true;
}
