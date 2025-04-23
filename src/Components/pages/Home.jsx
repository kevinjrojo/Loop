import "../../styles/home.css";
import logo from "../../assets/bucle-feliz.webp";
import friends from "../../assets/friends.webp";
import home from "../../assets/home.webp";
import notifications from "../../assets/notifications.webp";
import profile from "../../assets/profile.webp";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData, logoutUser } from "../.././services/authService";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const [cancelHistory, setCancelHistory] = useState(false);

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

  const [imageUrl, setImageUrl] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImageUrl(newImageUrl);
      setIsUploaded(true);
      setCancelHistory(true);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleCancelHistory = () => {
    setImageUrl(null);
    setIsUploaded(false);
    setCancelHistory(false);
  };

  if (!user) return <p style={{ color: "white" }}>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container-home">
      <header className="container-header-history">
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <button onClick={handleButtonClick} className="history-btn-header">
          +
        </button>
        {isUploaded && (
          <div
            className={
              cancelHistory ? "cotainer-history-img-loop" : "cancelHistory"
            }
          >
            <article className="overlay">
              <img src={imageUrl} alt="Uploaded" className="history-img-loop" />
              <section className="container-button-histoty-img">
                <button
                  className="btn-history-loop"
                  onClick={handleCancelHistory}
                >
                  ❌
                </button>
                <button className="btn-history-loop">✔️</button>
              </section>
            </article>
          </div>
        )}
      </header>
      <nav className="container-nav-list">
        <img src={logo} alt="logo-loop" className="home-logo" />
        <Link to="/home" className="browser-loop-link">
          <li className="browser-loop">Inicio</li>
          <img src={home} alt="home" className="icon-loop" />
        </Link>
        <Link to="/notifications" className="browser-loop-link">
          <img src={notifications} alt="home" className="icon-loop" />
          <li className="browser-loop">Notificaciones</li>
        </Link>
        <Link to="/profile" className="browser-loop-link">
          <img src={profile} alt="home" className="icon-loop" />
          <li className="browser-loop">Perfil</li>
        </Link>
        <Link to="/Friends" className="browser-loop-link">
          <img
            src={friends}
            alt="home"
            className="icon-loop"
            onClick={handleLogout}
          />
          <li className="browser-loop" onClick={handleLogout}>
            Amigos
          </li>
        </Link>
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
