import { useState } from 'react';
import emailjs from '@emailjs/browser';

const useFormulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !email || !mensaje) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    const templateParams = {
      nombre,
      apellido,
      email,
      mensaje,
    };

    emailjs
      .send(
        'service_aqg87ie',
        'template_cgtugak',
        templateParams,
        'vF2ioB9eHaC1MTPvn'
      )
      .then(
        (response) => {
          console.log('Correo enviado con éxito:', response);
          alert('¡Consulta enviada exitosamente, en breve te responderemos!');
          setNombre('');
          setApellido('');
          setEmail('');
          setMensaje('');
        },
        (err) => {
          console.error('Error al enviar correo:', err);
          setError('Ocurrió un error al enviar tu mensaje. Intenta nuevamente.');
        }
      );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister(e); 
    }
  };

  return {
    nombre,
    setNombre,
    apellido,
    setApellido,
    email,
    setEmail,
    mensaje,
    setMensaje,
    error,
    handleRegister,
    handleKeyPress,
  };
};

export default useFormulario;
