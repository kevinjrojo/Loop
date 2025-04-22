import "../../styles/password.css";
import logo from "../../assets/bucle-feliz.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState({
    new_password: "",
    user_email: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!newPassword.new_password) {
      setError("Ingresa su nueva contraseña por favor.");
      console.log("error en el campo de contraseña");
      return;
    }
    try {
      const emailKey = sessionStorage.getItem("email");
      const { new_password } = newPassword;
      await registerUser(new_password, emailKey);
      console.log("contraseña cambiada a:", new_password, emailKey);
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
              onChange={handleChange}
              placeholder="Nueva contraseña"
            />
            <input
              name="new_password"
              type="password"
              className="input"
              placeholder="Corfirmar contraseña"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="button" className="btn" onClick={handleSubmit}>
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
