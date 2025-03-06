import "../styles/home.css";
import logo from "../assets/bucle-feliz.webp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirige al login si no hay token
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://user-manager-mi2a.onrender.com/user/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener datos del usuario");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        console.error(err);
        setError("Error al cargar datos del usuario");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token
    navigate("/login"); // Redirigir al login
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container-home">
      <header className="container-header-history"></header>
      <nav className="container-nav-list">
        <img src={logo} alt="logo-loop" className="home-logo" />
        <li className="browser-loop">Inicio</li>
        <li className="browser-loop">Perfil</li>
        <li className="browser-loop">Notificaciones</li>
        <li className="browser-loop" onClick={handleLogout}>
          Cerrar sesion
        </li>
      </nav>
      <main className="container-main">
        <h1>Bienvenido, {user?.username}!</h1>
      </main>
      <article className="container-article"></article>
      <footer className="container-footer"></footer>
    </div>
  );
};

export default Home;
