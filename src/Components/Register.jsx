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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", userData);
    alert("Datos guardados! ingrese sesion.");
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
        <button className="form-btn-submit-register">Regístrate</button>
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
