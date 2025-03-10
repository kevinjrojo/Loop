import logo from "../assets/bucle-feliz.webp";
import "../styles/login.css";
import { Password } from "./Password";
import { Register } from "./Register";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    if (!username || !password) return setError("Completa todos los campos.");

    try {
      await loginUser(username, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="login-conteiner">
      <article className="conteiner-logo">
        <img src={logo} alt="" className="logo-loop" />
      </article>
      <nav className="form-login-conteiner">
        <form className="form-login">
          <div className="form-front">
            <h1 className="form-title">Loop</h1>
            <input
              type="text"
              placeholder="Usuario"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="button"
              value="Ingresar"
              className="form-btn-submit"
              onClick={handleLogin}
            />
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
            {error && <p style={{ color: "red" }}>{error}</p>}
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
export default Login;
