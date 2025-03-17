import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useState } from "react";
import logo from "../assets/bucle-feliz.webp";

const Register = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    userName: "",
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
      const response = await fetch("https://user-manager-mi2a.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: userData.fullName,
          username: userData.userName,
          email: userData.email,
          password: userData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en el registro");
      }

      navigate("/"); // Redirige al login después del registro exitoso
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
            <h1 className="form_details">Register</h1>
            {error && (
              <p className="error" style={{ color: "red" }}>
                {error}
              </p>
            )}
            <input
              type="text"
              name="fullName"
              placeholder="Nombre completo"
              value={userData.fullName}
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
            <button type="submit" className="btn">
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
