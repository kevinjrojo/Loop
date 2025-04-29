import logo from "../../assets/bucle-feliz.webp";
import { Link } from "react-router-dom";

const ConfirmPassword = () => {
  const handleSubmit = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  return (
    <div>
      <div className="password-container">
        <article className="container-logo">
          <img src={logo} alt="Logo Loop" className="logo-loop" />
        </article>
        <div className="container">
          <form className="form">
            <div className="loading-container">
              <svg
                viewBox="0 0 16 16"
                height={48}
                width={48}
                className="windows-loading-spinner"
              >
                <circle r="7px" cy="8px" cx="8px" />
              </svg>
            </div>
            <div className="form_front">
              <h1 className="form_details">Loop</h1>

              <p className="password">
                Tu contraseña ha sido restablecida con éxito. Por favor, inicia
                sesión para continuar.
              </p>
              <Link className="btn" to={"/"} onClick={handleSubmit}>
                Iniciar sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
