import "../styles/profile.css";

import friends from "../assets/friends.webp";
import home from "../assets/home.webp";
import notifications from "../assets/notifications.webp";
import profile from "../assets/profile.webp";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Este es tu perfil</h1>
      <nav className="container-nav-list-profile">
        <Link to="/home" className="browser-loop">
          Inicio
          <img src={home} alt="home" className="icon-home" />
        </Link>
        <li className="browser-loop">Notificaciones</li>
        <img src={notifications} alt="notifications" className="icon-home" />
        <li className="browser-loop">Perfil</li>
        <img src={profile} alt="profile" className="icon-home" />
        <li className="browser-loop">Amigos</li>
        <img src={friends} alt="friends" className="icon-home" />
      </nav>
    </div>
  );
};

export default Profile;
