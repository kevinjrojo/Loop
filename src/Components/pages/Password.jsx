import "../../styles/password.css";
import logo from "../../assets/bucle-feliz.webp";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendEmail } from "../../services/authService";

const Password = () => {
  const [recoverPassword, setRecoverPassword] = useState({
    receiver_email: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecoverPassword({ receiver_email: e.target.value });
  };
  const handleSubmit = async () => {
    if (!recoverPassword.receiver_email) {
      setError("Por favor, introduce un correo electrónico.");
      return;
    }
    try {
      const { receiver_email } = recoverPassword;
      await sendEmail(receiver_email);
      console.log(
        "Correo de recuperación enviado a:",
        recoverPassword.receiver_email
      );
      sessionStorage.setItem("email", receiver_email);
      navigate("/recover-password");
    } catch (err) {
      setError("correo no valido");
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

            <p className="password">
              Introduce el correo electrónico asociados <br /> a tu cuenta para
              cambiar tu contraseña.
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              onChange={handleChange}
              type="email"
              required
              className="input"
              placeholder="Correo electrónico"
            />
            <Link className="btn" onClick={handleSubmit}>
              Enviar
            </Link>
            <Link htmlFor="signup_toggle" to="/" className="password">
              Volver al inicio de sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Password;
