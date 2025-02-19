export const Password = ({ recoverPassword }) => {
  return (
    <div className={recoverPassword}>
      <h1 className="form-title-registre">Loop</h1>
      <input
        type="password"
        className="form-input"
        placeholder="Nombre y apellido"
        required
      />
    </div>
  );
};
