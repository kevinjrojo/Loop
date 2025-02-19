import "../styles/register.css";

export const Register = ({ loginRegister, usuarioLogin }) => {
  return (
    <div className={loginRegister}>
      <h1 className="form-title-register">Loop</h1>
      <form className="form-register-conteiner">
        <input
          type="text"
          className="form-input-register"
          placeholder="Nombre y apellido"
          required
        />
        <input
          type="text"
          className="form-input-register"
          placeholder="Nombre de usuario"
        />
        <input
          type="email"
          className="form-input-register"
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          className="form-input-register"
          placeholder="Contraseña"
          required
        />
        <button className="form-btn-submit-register">Regístrate</button>
      </form>
      <span className="switch-register">
        ¿Ya tienes una cuenta?
        <label className="signup-tog-register" onClick={usuarioLogin}>
          Iniciar sesión
        </label>
      </span>
    </div>
  );
};
