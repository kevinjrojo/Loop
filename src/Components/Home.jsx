import "../styles/home.css";
import logo from "../assets/bucle-feliz.webp";
import friends from "../assets/friends.webp";
import home from "../assets/home.webp";
import notifications from "../assets/notifications.webp";
import profile from "../assets/profile.webp";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  if (!user) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container-home">
      <header className="container-header-history">
        <Header />
      </header>
      <nav className="container-nav-list">
        <img src={logo} alt="logo-loop" className="home-logo" />
        <li className="browser-loop">Inicio</li>
        <img src={home} alt="home" className="icon-home" />
        <li className="browser-loop">Notificaciones</li>
        <img src={notifications} alt="home" className="icon-home" />
        <Link to="/profile">
          <li className="browser-loop">Perfil</li>

          <img src={profile} alt="home" className="icon-home" />
        </Link>

        <li className="browser-loop" onClick={handleLogout}>
          Amigos
        </li>
        <img
          src={friends}
          alt="home"
          className="icon-home"
          onClick={handleLogout}
        />
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
