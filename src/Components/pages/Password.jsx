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
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setRecoverPassword({ receiver_email: e.target.value });
  };
  const handleSubmit = async () => {
    if (!recoverPassword.receiver_email) {
      setError("Introduce un correo electrónico.");
      return;
    }
    if (recoverPassword.receiver_email) {
      setLoading(!loading);

      try {
        const { receiver_email } = recoverPassword;
        await sendEmail(receiver_email);
        console.log(
          "Correo de recuperación enviado a:",
          recoverPassword.receiver_email
        );
        localStorage.setItem("email", recoverPassword.receiver_email);
        navigate("/recover-password");
      } catch (err) {
        setError("correo no valido");
        setLoading(false);
      }
    }
  };

  return (
    <div className="password-container">
      <article className="container-logo">
        <img src={logo} alt="Logo Loop" className="logo-loop" />
      </article>
      <div className="container">
        <form className="form">
          <div className={loading ? "loading-container" : "loading"}>
            <svg
              viewBox="0 0 16 16"
              height={48}
              width={48}
              className="windows-loading-spinner"
            >
              <circle r="7px" cy="8px" cx="8px" />
            </svg>
          </div>
          <div className={loading ? "loading" : "form_front"}>
            <h1 className="form_details">Loop</h1>

            <p className="password">
              Introduce el correo electrónico asociados <br /> a tu cuenta para
              cambiar tu contraseña.
            </p>

            <input
              onChange={handleChange}
              type="email"
              required
              className="input"
              placeholder="Correo electrónico"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
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
