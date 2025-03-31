import { Link } from "react-router-dom";
import logo from "../assets/bucle-feliz.webp";
import friends from "../assets/friends.webp";
import home from "../assets/home.webp";
import notifications from "../assets/notifications.webp";
import profile from "../assets/profile.webp";
import "../styles/notifications.css";

const Notifications = () => {
  return (
    <div className="container-notifications">
      <header className="container-header-notifications">
        <h1 style={{ color: "white" }}>Estas son tus notificaiones</h1>
      </header>
      <nav className="container-nav-list-notifications">
        <img src={logo} alt="logo-loop" className="home-logo" />
        <Link to="/home" className="browser-loop-link">
          <li className="browser-loop"> Inicio</li>
          <img src={home} alt="home" className="icon-home" />
        </Link>
        <Link to="/notifications" className="browser-loop-link">
          <li className="browser-loop">Notificaciones</li>
          <img src={notifications} alt="notifications" className="icon-home" />
        </Link>
        <Link to="/profile" className="browser-loop-link">
          <li className="browser-loop">Perfil</li>
          <img src={profile} alt="profile" className="icon-home" />
        </Link>
        <Link to="/friends" className="browser-loop-link">
          <li className="browser-loop">Amigos</li>
          <img src={friends} alt="friends" className="icon-home" />
        </Link>
      </nav>
      <main className="container-main-notifications">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
        distinctio sint voluptatibus est, illo tempora praesentium suscipit
        vero, assumenda repellendus expedita debitis, laudantium nisi dolorum
        culpa. Nesciunt et earum ducimus
      </main>
    </div>
  );
};

export default Notifications;
