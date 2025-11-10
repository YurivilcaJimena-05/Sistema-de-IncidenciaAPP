import React from 'react';
import LoginForm from './LoginForm';
import loginImage from '../assets/image-incidencia-login.png'; // asegúrate de que la ruta sea correcta

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* Sección izquierda – Login */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[#F77D48] px-6 py-12">
        
        {/* Título visible solo en móvil */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center lg:hidden">
          Sistema de incidencias técnicas
        </h2>

        <LoginForm />

        <p className="text-xs text-white mt-6 text-center">
          Facultad de Ingeniería
        </p>
      </div>

      {/* Sección derecha – Imagen (solo visible en pantallas grandes) */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-[#FFFFFF] flex-col justify-end items-center h-screen relative">
        {/* Imagen */}
        <img
          src={loginImage}
          alt="Imagen alusiva al sistema"
          className="max-w-[100%] max-h-[100%] object-contain"
        />

        {/* Título encima de la imagen */}
        <h2 className="absolute top-16 text-5xl font-extrabold text-[#607CF4] text-center w-full tracking-wide">
          Sistema de incidencias técnicas
        </h2>
      </div>
    </div>
  );
}
