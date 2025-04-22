import logo from "../../assets/bucle-feliz.webp";
import "../../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) return setError("Completa todos los campos.");

    try {
      await loginUser(username, password);
      setLoading(!loading);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <nav className={loading ? "login-container" : "loading"}>
        <svg
          viewBox="0 0 16 16"
          height={48}
          width={48}
          className="windows-loading-spinner"
        >
          <circle r="7px" cy="8px" cx="8px" />
        </svg>
      </nav>
      <main className={loading ? " loading" : "login-container"}>
        <article className="container-logo">
          <img src={logo} alt="Logo Loop" className="logo-loop" />
        </article>
        <div className="container">
          <form className="form">
            <div className="form_front">
              <h1 className="form_details">Loop</h1>
              {error && <p style={{ color: "red" }}>{error}</p>}
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
              <div className="switch">
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
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
