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
            <h2 className="form-title">Login</h2>
            <label for="nombre" className="form-title-name">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Escriba su nombre..."
              className="form-input"
              required
            />
            <label for="email" className="form-title-email">
              Email
            </label>
            <input
              type="email"
              placeholder="Correo@gmail.com"
              className="form-input"
              required
            />
            <input
              type="submit"
              value="continuar"
              className="form-btn-submit"
              required
            />
            <span className="switch">
              Todavia no te registraste?
              <label className="signup-tog" htmlFor="signup-toggle">
                Sign Up
              </label>
            </span>
          </div>
        </form>
      </nav>
    </div>
  );
};
