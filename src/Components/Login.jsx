import logo from "../assets/bucle-feliz.webp";
import "../styles/login.css";
import { Password } from "./Password";
import { Register } from "./Register";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null); // Limpia errores previos

    if (!user || !password) {
      setTildeError("*");
      setError("Por favor, completa todos los campos.");

      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("username", user);
      formData.append("password", password);

      const response = await fetch(
        "https://user-manager-mi2a.onrender.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Usuario o contraseña incorrectos");
      }

      const data = await response.json();
      {
        /**console.log(data);  */
      }

      const token = data.access_token;
      {
        /* console.log("Token obtenido:", token); * */
      }

      localStorage.setItem("token", token);

      const userResponse = await fetch(
        "https://user-manager-mi2a.onrender.com/user/me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!userResponse.ok) {
        throw new Error("Error al obtener datos del usuario");
      }

      const userData = await userResponse.json();
      {
        /** console.log("Datos del usuario:", userData);  */
      }

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
        <input type="checkbox" id="signup-toggle" />
        <form className="form-login">
          <div className="form-front">
            <h1 className="form-title">Loop</h1>

            <input
              type="text"
              placeholder="Usuario"
              className="form-input"
              value={user}
              onChange={(e) => setUser(e.target.value)}
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
