import "../../styles/password.css";
import logo from "../../assets/bucle-feliz.webp";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  // const [verifyCode, setVerifyCode] = useState({
  // code: "",
  // });
  //   const [error, setError] = useState("");
  // const handleVerify = (e) => {
  //   setVerifyCode({ code: e.target.value });
  // };
  // const handleSubmit = async () => {
  //   if (!verifyCode.code) {
  //     setError("Por favor, introduce un código de verificación.");
  //     return;
  //   }
  //   try {
  //     const { code } = verifyCode;
  //     await verifyPaasswordCode(code);
  //     console.log(
  //       "Codigo de verificación enviado);
  //     useNavegate("/change-password");
  //   } catch (err) {
  //     setError("correo no valido");
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
            <label className="password">escribe tu nueva contraseña</label>
            <input
              type="password"
              className="input"
              required
              placeholder="Nueva contraseña"
            />
            <input
              type="password"
              className="input"
              required
              placeholder="Corfirmar contraseña"
            />
            <button type="button" className="btn">
              Cambiar contraseña
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

export default ChangePassword;
