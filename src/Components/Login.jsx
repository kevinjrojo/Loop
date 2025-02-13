import logo from "../assets/bucle-feliz.webp";
import "../styles/login.css";
export const Login = () => {
  return (
    <div className="login-conteiner">
      <article className="conteiner-logo">
        <img src={logo} alt="" className="logo-loop" />
      </article>
      <nav className="form-login-conteiner">
        <input type="checkbox" id="signup-toggle" />
        <form className="form-login">
          <div className="form-front">
            <h2 className="form-title">Loop</h2>

            <input
              type="text"
              placeholder="Usuario o correo electrónico"
              className="form-input"
              required
            />

            <input
              type="email"
              placeholder="Contraseña"
              className="form-input"
              required
            />
            <input
              type="submit"
              value="Ingresar"
              className="form-btn-submit"
              required
            />
            <span className="switch">
              ¿Todavia no te registraste?
              <label className="signup-tog" htmlFor="signup-toggle">
                Regístrate
              </label>
            </span>
          </div>
        </form>
      </nav>
    </div>
  );
};
