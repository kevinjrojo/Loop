import logo from "../assets/bucle-feliz.webp";
import "../styles/login.css";
import { Registre } from "./Registre";
import { useState } from "react";

export const Login = () => {
  const [loginRegistre, setLoginRegistre] = useState("form-registre");
  const usuarioLogin = () => {
    setLoginRegistre(
      loginRegistre === "form-registre" ? "form-back-registre" : "form-registre"
    );
  };

  return (
    <div className="login-conteiner">
      <article className="conteiner-logo">
        <img src={logo} alt="" className="logo-loop" />
      </article>
      <nav className="form-login-conteiner">
        <input type="checkbox" id="signup-toggle" />
        <form className="form-login">
          <div className="form-front">
            <h1 className="form-title">Loop</h1>
            <input
              type="text"
              placeholder="Usuario o correo electrónico"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Contraseña"
              className="form-input"
              required
            />
            <input
              type="submit"
              value="Ingresar"
              className="form-btn-submit"
              required
            />
            <span className="switch-login">
              ¿Todavia no te registraste?
              <label className="signup-tog-login" onClick={usuarioLogin}>
                Regístrate
              </label>
            </span>
          </div>
          <Registre loginRegistre={loginRegistre} usuarioLogin={usuarioLogin} />
        </form>
      </nav>
    </div>
  );
};
