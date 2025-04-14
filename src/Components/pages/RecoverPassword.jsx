import "../../styles/password.css";
import logo from "../../assets/bucle-feliz.webp";
import { Link } from "react-router-dom";
import InputsPassword from "../InputsPassword";

const RecoverPassword = () => {
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
              Te enviamos un codigo de verificacion a <br /> tu correo,copia y
              pega el codigo debajo.
            </p>
            <nav className="container-input-recover-password">
              <InputsPassword />
            </nav>

            <Link className="btn" to="/change-password">
              Enviar validación
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

export default RecoverPassword;
