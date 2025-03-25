import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useState } from "react";
import logo from "../assets/bucle-feliz.webp";
import { registerUser } from "../services/authService";

const Register = () => {
  const [userData, setUserData] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (userData.password !== userData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      const { full_name, username, email, password, confirmPassword } =
        userData;

      await registerUser(full_name, username, email, password, confirmPassword);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <article className="container-logo">
        <img src={logo} alt="Logo Loop" className="logo-loop" />
      </article>
      <div className="container">
        <form className="form">
          <div className="form_front">
            <h1 className="form_details">Loop</h1>
            {error && (
              <p className="error" style={{ color: "red" }}>
                {error}
              </p>
            )}
            <p className="password">
              Completa el con tus datos para poder registrarte.
            </p>
            <input
              type="text"
              name="full_name"
              placeholder="Nombre completo"
              value={userData.full_name}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={userData.username}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={userData.email}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={userData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" onClick={handleSubmit} className="btn">
              Registrarte
            </button>
            <p className="switch">
              ¿Ya tienes una cuenta?
              <Link className="signup_tog" htmlFor="signup_toggle" to="/">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
