import React, { useState } from "react";

export default function LoginForm() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // 

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (correo.trim() === "") {
      setErrorCorreo("Completa tu correo electrónico");
      valid = false;
    } else {
      setErrorCorreo("");
    }

    if (password.trim() === "") {
      setErrorPassword("Completa tu contraseña");
      valid = false;
    } else {
      setErrorPassword("");
    }

    if (valid) {
      // ✅ Mostrar modal de inicio de sesión exitoso
      setShowSuccess(true);
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
      <h2 className="text-2xl font-bold text-center text-[#607CF4] mb-6">
        Iniciar Sesión
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Campo correo */}
        <div className="mb-4">
          <label
            htmlFor="correo"
            className="block text-sm font-medium text-[#607CF4] mb-1"
          >
            Correo electrónico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className={`w-full px-4 py-2 border ${
              errorCorreo ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#607CF4]`}
          />
          {errorCorreo && (
            <p className="text-red-500 text-sm mt-1">{errorCorreo}</p>
          )}
        </div>

        {/* Campo contraseña */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#607CF4] mb-1"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 border ${
              errorPassword ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#607CF4]`}
          />
          {errorPassword && (
            <p className="text-red-500 text-sm mt-1">{errorPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-500 hover:bg-[#4E5268] text-white font-semibold py-2 rounded-md transition-colors"
        >
          Ingresar
        </button>
      </form>

      {/* Botón "¿Olvidaste tu contraseña?" */}
      <div className="text-right mt-4">
        <button
          type="button"
          className="text-sm text-[#607CF4] hover:underline"
          onClick={() => setShowModal(true)}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      {/* --- Modal de recuperar contraseña --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-11/12 max-w-sm animate-fade-in">
            <h3 className="text-lg font-semibold text-[#607CF4] mb-2 text-center">
              Recuperar contraseña
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Ingresa tu correo y te enviaremos las instrucciones para
              restablecer tu contraseña.
            </p>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  alert("Aún no se ha implementado esta función.");
                }}
                className="text-sm px-4 py-2 rounded-md bg-[#607CF4] text-white hover:bg-[#4a64e0] transition-colors"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de ingreso al sistema */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-11/12 max-w-sm text-center animate-fade-in">
            <h3 className="text-lg font-semibold text-green-600 mb-3">
              ¡Inicio de sesión exitoso!
            </h3>
            <p className="text-gray-600 mb-4">
              Bienvenido al sistema. Redirigiendo...
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-sm px-4 py-2 rounded-md bg-[#607CF4] text-white hover:bg-[#4a64e0] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}