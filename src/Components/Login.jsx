import logo from "../assets/bucle-feliz.webp";
import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { Link } from "react-router-dom";

const Login = () => {
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
    <div className="login-container">
      <article className="container-logo">
        <img src={logo} alt="Logo Loop" className="logo-loop" />
      </article>
      <div className="container">
        <form className="form">
          <div className="form_front">
            <h1 className="form_details">Login</h1>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
            <button type="button" className="btn" onClick={handleLogin}>
              Login
            </button>
            <p className="switch">
              ¿No tienes una cuenta?
              <Link
                className="signup_tog"
                htmlFor="signup_toggle"
                to="/register"
              >
                Regístrate
              </Link>
              <br />
              <br />
              <p className="switch">
                <Link
                  htmlFor="signup_toggle"
                  to="/password"
                  className="password"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </p>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
