import "../../styles/password.css";
import logo from "../../assets/bucle-feliz.webp";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { newUserPassword } from "../../services/authService";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState({
    email: "",
    new_password: "",
    new_password_confirm: "",
  });
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const handleChangePassword = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (!newPassword.new_password) {
      setError("Ingresa su nueva contraseña por favor.");
      if (newPassword.new_password !== newPassword.new_password_confirm) {
        setError("Las contraseñas no coinciden.");
      }
      return;
    }
    try {
      const emailKey = localStorage.getItem("email");
      const { new_password } = newPassword;
      await newUserPassword(new_password, emailKey);
      alert("Contraseña cambiada con éxito.");
      localStorage.removeItem("email");
      Navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className="password-container">
      <article className="container-logo">
        <img src={logo} alt="Logo Loop" className="logo-loop" />
      </article>
      <div className="container">
        <form className="form">
          <div className="form_front">
            <h1 className="form_details">Loop</h1>
            <label className="password">escribe tu nueva contraseña</label>
            <input
              name="new_password"
              type="password"
              className="input"
              onChange={handleChangePassword}
              placeholder="Nueva contraseña"
            />
            <input
              name="new_password"
              type="password"
              className="input"
              placeholder="Corfirmar contraseña"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="button"
              className="btn"
              onClick={handleSubmitPassword}
            >
              Cambiar contraseña
            </button>
            <Link htmlFor="signup_toggle" to="/" className="password">
              Volver al inicio de sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
