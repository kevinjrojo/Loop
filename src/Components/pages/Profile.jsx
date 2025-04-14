import "../../styles/profile.css";
import logo from "../../assets/bucle-feliz.webp";
import friends from "../../assets/friends.webp";
import home from "../../assets/home.webp";
import notifications from "../../assets/notifications.webp";
import profile from "../../assets/profile.webp";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container-profile">
      <header className="container-header-profile">
        <div className="container-name-profile">
          <img src={home} alt="" className="img-profile" />
          <h2 className="name-profile-user">Username</h2>
        </div>
        <article className="container-infomations-user">
          <ul className="number-information-user">145</ul>
          <ul className="number-information-user">4</ul>
          <ul className="number-information-user">20</ul>
        </article>
        <article className="container-infomations-user">
          <ul className="text-infomations-user">Seguidores</ul>
          <ul className="text-infomations-user">Publicaiones</ul>
          <ul className="text-infomations-user">Seguidos</ul>
        </article>
      </header>
      <nav className="container-nav-list-profile">
        <img src={logo} alt="logo-loop" className="home-logo" />
        <Link to="/home" className="browser-loop-link">
          <li className="browser-loop"> Inicio</li>
          <img src={home} alt="home" className="icon-loop" />
        </Link>
        <Link to="/notifications" className="browser-loop-link">
          <li className="browser-loop">Notificaciones</li>
          <img src={notifications} alt="notifications" className="icon-loop" />
        </Link>
        <Link to="/profile" className="browser-loop-link">
          <li className="browser-loop">Perfil</li>
          <img src={profile} alt="profile" className="icon-loop" />
        </Link>
        <Link to="/friends" className="browser-loop-link">
          <li className="browser-loop">Amigos</li>
          <img src={friends} alt="friends" className="icon-loop" />
        </Link>
      </nav>
      <main className="container-main-profile"></main>
    </div>
  );
};

export default Profile;
