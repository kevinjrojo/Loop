import "../styles/password.css";
export const Password = ({ recoverPassword, userPassword }) => {
  return (
    <div className={recoverPassword}>
      <h1 className="form-title-password">Loop</h1>
      <form className="form-password-conteiner">
        <span className="form-password-text">
          Introduce el correo electrónico asociados a tu cuenta para cambiar tu
          contraseña.
        </span>
        <input
          type="email"
          name="email"
          className="form-input-password"
          placeholder="Correo electrónico"
          required
        />
        <input
          type="submit"
          value="Enviar validacíon"
          className="form-btn-submit-password"
        />
        <label className="switch-password" onClick={userPassword}>
          Volver al inicio de sesión
        </label>
      </form>
    </div>
  );
};
