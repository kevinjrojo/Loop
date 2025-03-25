import "../styles/home.css";
import logo from "../assets/bucle-feliz.webp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData, logoutUser } from "../services/authService";
import { useState } from "react";
import Header from "./header";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserData();

        setUser(userData.data);
      } catch (err) {
        setError(err.message);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  if (!user) return <p className="loader"></p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container-home">
      <header className="container-header-history">
        <Header />
      </header>
      <nav className="container-nav-list">
        <img src={logo} alt="logo-loop" className="home-logo" />
        <li className="browser-loop">Inicio</li>
        <li className="browser-loop">Perfil</li>
        <li className="browser-loop">Notificaciones</li>
        <li className="browser-loop-close" onClick={handleLogout}>
          Cerrar sesion
        </li>
      </nav>
      <main className="container-main">
        <h1>Bienvenido {user?.username || "Usuario"}!</h1>
      </main>
      <article className="container-article"></article>
      <footer className="container-footer"></footer>
    </div>
  );
};

export default Home;
