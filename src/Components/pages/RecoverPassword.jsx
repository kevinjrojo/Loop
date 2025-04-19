import "../../styles/password.css";
import logo from "../../assets/bucle-feliz.webp";
import { Link } from "react-router-dom";
import { sendEmail, verifyPaasswordCode } from "../../services/authService";
import { useRef, useState } from "react";

const RecoverPassword = () => {
  const [verifyCode, setVerifyCode] = useState({
    code: "",
    user_email: "",
  });
  const inputs = useRef([]);
  const [error, setError] = useState("");

  const handleInput = (e, index) => {
    if (e.key !== "Backspace" && index < 4)
      return inputs.current[index + 1]?.focus();
    if (e.key === "Backspace" && index > 0) {
      inputs.current[index - 1]?.focus();
      return (inputs.current[index].value = "");
    }
    if (index === 4) {
      const password = inputs.current.map((input) => input.value).join("");
      setVerifyCode({ ...verifyCode, code: password });
    }
  };

  const { code } = verifyCode;
  const { user_email } = sendEmail;
  console.log("Codigo de verificacion enviado a:", user_email, code);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verifyCode.code) {
      setError("Por favor, introduce un código de verificación.");
      return;
    }
    try {
      const { code } = verifyCode;
      const { user_email } = sendEmail;
      await verifyPaasswordCode(code, user_email);
      console.log("Codigo de verificacion enviado a:", code, user_email);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  // const handleCodeReceived = async (emailKey, sendEmail) => {
  //   setVerifyCode({ ...verifyCode, code: emailKey, user_email: sendEmail });
  //   try {
  //     const { code } = verifyCode;
  //     const { user_email } = verifyCode;
  //     await verifyPaasswordCode(code, user_email);
  //     console.log("Codigo de verificacion enviado a:", emailKey, sendEmail);
  //   } catch (err) {
  //     setError(err.message);
  //     console.log(err);
  //   }
  // };

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
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  ref={(i) => {
                    inputs.current[index] = i;
                  }}
                  type="text"
                  required
                  className="input-password"
                  maxLength={1}
                  onKeyUp={(e) => {
                    handleInput(e, index);
                  }}
                />
              ))}
            </nav>
            {error && (
              <p className="error" style={{ color: "red" }}>
                {error}
              </p>
            )}
            <Link className="btn" onClick={handleSubmit}>
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
