import { Link, useNavigate } from "react-router-dom";
import "../../styles/register.css";
import { useState } from "react";
import logo from "../../assets/bucle-feliz.webp";
import { registerUser } from "../../services/authService";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [userData, setUserData] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfim, setShowPasswordConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!userData.password || !userData.confirmPassword)
      return setError("Completa todos los campos.");
    if (userData.password !== userData.confirmPassword)
      return setError("Las contraseñas no coinciden");

    if (Object.values(userData).some((value) => !value))
      return setError("Completa todos los campos.");

    if (Object.values(userData).some((value) => value)) {
      setLoading(!loading);
      try {
        const { full_name, username, email, password, confirmPassword } =
          userData;

        await registerUser(
          full_name,
          username,
          email,
          password,
          confirmPassword
        );
        setLoading(!loading);
        navigate("/confirm-register");
      } catch (err) {
        setError(err.message);
        setLoading(false);
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
    <div className="register-container">
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
              Completa el con tus datos <br /> para poder registrarte.
            </p>
            <input
              type="text"
              name="full_name"
              minLength={3}
              maxLength={10}
              placeholder="Nombre completo"
              value={userData.full_name}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="username"
              minLength={3}
              maxLength={10}
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

            <div className="input-password-container">
              <input
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                value={userData.password}
                name="password"
                minLength={3}
                maxLength={10}
                placeholder="Contraseña"
                required
                className="input"
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
                type={showPasswordConfim ? "text" : "password"}
                onChange={handleChange}
                value={userData.confirmPassword}
                name="confirmPassword"
                minLength={3}
                maxLength={10}
                placeholder="Confirmar contraseña"
                required
                className="input"
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
