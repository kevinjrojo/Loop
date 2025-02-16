import "../styles/registre.css";

export const Registre = ({ loginRegistre, usuarioLogin }) => {
  return (
    <div className={loginRegistre}>
      <h1 className="form-title-registre">Loop</h1>
      <input
        type="text"
        className="form-input"
        placeholder="Nombre y apellido"
        required
      />
      <input
        type="text"
        className="form-input"
        placeholder="Nombre de usuario"
        required
      />
      <input
        type="text"
        className="form-input"
        placeholder="Contraseña"
        required
      />
      <input
        type="text"
        className="form-input"
        placeholder="Confirmar contraseña"
        required
      />
      <button className="form-btn-submit">Regístrate</button>
      <span className="switch-registre">
        ¿Ya tienes una cuenta?
        <label className="signup-tog-registre" onClick={usuarioLogin}>
          Iniciar sesión
        </label>
      </span>
    </div>
  );
};
