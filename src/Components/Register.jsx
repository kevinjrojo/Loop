import "../styles/register.css";
import { useState } from "react";

export const Register = ({ loginRegister, usuarioLogin }) => {
  const [userData, setUserData] = useState({
    nombre: "",
    usuario: "",
    correo: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviado datos al backend", userData);

    // Enviar datos al backend
    const res = await fetch("http://localhost:3001/guardar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const result = await res.text();
    console.log(result);
  };

  return (
    <div className={loginRegister}>
      <h1 className="form-title-register">Loop</h1>
      <form className="form-register-conteiner" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          className="form-input-register"
          placeholder="Nombre y apellido"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="usuario"
          className="form-input-register"
          placeholder="Nombre de usuario"
          value={userData.usuario}
          onChange={handleChange}
        />
        <input
          type="email"
          name="correo"
          className="form-input-register"
          placeholder="Correo electrónico"
          value={userData.correo}
          onChange={handleChange}
        />
        <input
          type="password"
          name="contraseña"
          className="form-input-register"
          placeholder="Contraseña"
          value={userData.contraseña}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Registrarte"
          className="form-btn-submit-register"
        />
      </form>
      <span className="switch-register">
        ¿Ya tienes una cuenta?
        <label className="signup-tog-register" onClick={usuarioLogin}>
          Iniciar sesión
        </label>
      </span>
    </div>
  );
};
