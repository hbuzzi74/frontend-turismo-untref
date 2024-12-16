import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 md:p-2 w-full flex justify-around items-center">
      <div className="flex flex-col items-center">
        <a
          href="https://www.instagram.com/prensalamadrid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-8 w-8 text-green-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <p>Instagram</p>
      </div>
      <div className="flex flex-col items-center">
        <a
          // href="mailto:turismo@lamadrid.gob.ar?Subject=Consulta%20sobre%20turismo"
          href="mailto:turismo@lamadrid.gob.ar"
          onClick={"alert('hola')"}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <svg
            className="h-8 w-8 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
        <p>Correo</p>
      </div>
      <div className="flex flex-col items-center">
        <a
          href="https://www.lamadrid.gob.ar/telefonos-utiles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
        <p>Teléfono</p>
      </div>
      <div className="flex flex-col items-center">
        <a
          href="https://www.facebook.com/profile.php?id=100066450880207"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-8 w-8 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <p>Facebook</p>
      </div>
    </footer>
  );
};

export default Footer;
