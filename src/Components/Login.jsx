import logo from "../assets/bucle-feliz.webp";
import "../styles/login.css";
import { Password } from "./Password";
import { Register } from "./Register";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginRegister, setLoginRegister] = useState("form-register");
  const usuarioLogin = () => {
    setLoginRegister(
      loginRegister === "form-register" ? "form-back-register" : "form-register"
    );
  };
  const [recoverPassword, setRecoverPassword] = useState("form-password");
  const userPassword = () => {
    setRecoverPassword(
      recoverPassword === "form-password"
        ? "form-back-password"
        : "form-password"
    );
  };

  const [formData, setFormData] = useState({username: "", password: ""});
  const [fetchData, setFetchData] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  
  const navigate = useNavigate();

  useEffect( () => {
    if (fetchData) {
      const data = new URLSearchParams();
      data.append("username", formData.username);
      data.append("password", formData.password);

      console.log("INICIANDO FETCH")
      fetch("https://user-manager-mi2a.onrender.com/login",
        {
          method: "POST",
          headers: {"Content-Type" : "application/x-www-form-urlencoded"},
          body: data.toString()
        }
      )
      .then(response => {
        console.log("RESOLVIENDO RESPONSE")

        if (!response.ok) {
          //Manejar error en respuesta
        }
        return response.json();
      })
      .then(data => {
        console.log("RESOLVIENDO DATA")

        const newToken = data.access_token;
        setToken(newToken);
        alert(newToken); //Muestra el token cuando lo recibe //BORRAR EN PRODUCCION
        setFetchData(false)

      });
    }
  }, [fetchData]);

  useEffect ( () => {
    if(token) {
      console.log("GUARDANDO TOKEN EN LOCAL STORAGE")
      localStorage.setItem("access_token", token)
      console.log("REDIRIGIENDO A HOME")
      navigate("/home")
    }
  }, [token])
  
  const handleFormData = (e) =>  {
    setError(null)
    e.preventDefault()
    const {username, password} = e.target.elements;
    setFormData({username: username.value, password: password.value})
    setFetchData(true)
  };

  return (
    <div className="login-conteiner">
      <article className="conteiner-logo">
        <img src={logo} alt="" className="logo-loop" />
      </article>
      <nav className="form-login-conteiner">
        <input type="checkbox" id="signup-toggle" />
        <form className="form-login" onSubmit={handleFormData}>
          <div className="form-front">
            <h1 className="form-title">Loop</h1>

            <input
              name="username"
              type="text"
              placeholder="Usuario"
              className="form-input"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username : e.target.value})}
            />

            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              className="form-input"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password : e.target.value})}
            />
            <input
              type="submit"
              value="Ingresar"
              className="form-btn-submit"
            />
            {/*  <span className="switch-login-password">
              ¿Olvidaste tu contraseña?
            </span>*/}
            <span className="switch-login">
              ¿No tienes una cuenta?
              <label className="signup-tog-login" onClick={usuarioLogin}>
                Regístrate
              </label>
            </span>
            <label className="switch-login-password" onClick={userPassword}>
              ¿Olvidaste tu contraseña?
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </form>

        <Register loginRegister={loginRegister} usuarioLogin={usuarioLogin} />
        <Password
          recoverPassword={recoverPassword}
          userPassword={userPassword}
        />
      </nav>
    </div>
  );
};
export default Login;
