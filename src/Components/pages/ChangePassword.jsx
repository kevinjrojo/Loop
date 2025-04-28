import "../../styles/password.css";
import logo from "../../assets/bucle-feliz.webp";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { newUserPassword } from "../../services/authService";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState({
    email: "",
    new_password: "",
    new_password_confirm: "",
  });
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfim, setShowPasswordConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangePassword = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();

    if (!newPassword.new_password || !newPassword.new_password_confirm)
      return setError("completa todos los campos.");
    if (newPassword.new_password !== newPassword.new_password_confirm)
      return setError("Las contraseñas no coinciden.");

    if (newPassword.new_password && newPassword.new_password_confirm) {
      setLoading(!loading);
      try {
        const emailKey = localStorage.getItem("email");
        const { new_password } = newPassword;
        await newUserPassword(new_password, emailKey);
        alert("Contraseña cambiada con éxito.");
        localStorage.removeItem("email");
        Navigate("/");
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.log(err);
      }
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const togglePasswordConfirm = () => {
    setShowPasswordConfirm((prev) => !prev);
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
            <label className="password">escribe tu nueva contraseña</label>
            <div className="input-password-container">
              <input
                name="new_password"
                type={showPassword ? "text" : "password"}
                className="input"
                onChange={handleChangePassword}
                placeholder="Nueva contraseña"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="btn-eye"
              >
                {showPassword ? (
                  <FaEye color="white" />
                ) : (
                  <FaEyeSlash color="white" />
                )}
              </button>
            </div>

            <div className="input-password-container">
              <input
                name="new_password_confirm"
                type={showPasswordConfim ? "text" : "password"}
                className="input"
                onChange={handleChangePassword}
                placeholder="Confimar contraseña"
              />
              <button
                type="button"
                onClick={togglePasswordConfirm}
                className="btn-eye"
              >
                {showPasswordConfim ? (
                  <FaEye color="white" />
                ) : (
                  <FaEyeSlash color="white" />
                )}
              </button>
            </div>
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
