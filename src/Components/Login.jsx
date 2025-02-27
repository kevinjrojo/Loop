import logo from "../assets/bucle-feliz.webp";
import "../styles/login.css";
import { Password } from "./Password";
import { Register } from "./Register";
import { useState } from "react";

export const Login = () => {
  const [loginRegister, setLoginRegister] = useState("form-register");
  const usuarioLogin = () => {
    setLoginRegister(
      loginRegister === "form-register" ? "form-back-register" : "form-register"
    );
  };

  const [recoverPassword, setRecoverPassword] = useState("form-password");
  const userPassword = () => {
    setRecoverPassword(
      recoverPassword === "form-password"
        ? "form-back-password"
        : "form-password"
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
              type="password"
              placeholder="Contraseña"
              className="form-input"
              required
            />
            <input type="submit" value="Ingresar" className="form-btn-submit" />
            {/*  <span className="switch-login-password">
              ¿Olvidaste tu contraseña?
            </span>*/}
            <span className="switch-login">
              ¿No tienes una cuenta?
              <label className="signup-tog-login" onClick={usuarioLogin}>
                Regístrate
              </label>
            </span>
            <label className="switch-login-password" onClick={userPassword}>
              ¿Olvidaste tu contraseña?
            </label>
          </div>
        </form>
        <Register loginRegister={loginRegister} usuarioLogin={usuarioLogin} />
        <Password
          recoverPassword={recoverPassword}
          userPassword={userPassword}
        />
      </nav>
    </div>
  );
};
