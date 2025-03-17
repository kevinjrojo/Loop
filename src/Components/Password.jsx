import "../styles/password.css";
import logo from "../assets/bucle-feliz.webp";
import { Link } from "react-router-dom";
const Password = () => {
  return (
    <div className="login-container">
      <article className="container-logo">
        <img src={logo} alt="Logo Loop" className="logo-loop" />
      </article>
      <div className="container">
        <form className="form">
          <div className="form_front">
            <h1 className="form_details">Password</h1>
            <p className="switch">
              Introduce el correo electrónico asociados a tu <br /> cuenta para
              cambiar tu contraseña.
            </p>
            <input
              type="email"
              required
              className="input"
              placeholder="Correo electrónico"
            />
            <button type="button" className="btn">
              Enviar validación
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
export default Password;
