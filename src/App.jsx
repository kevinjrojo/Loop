import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/pages/Login.jsx";
import Home from "./Components/pages/Home.jsx";
import Register from "./Components/pages/Register.jsx";
import Password from "./Components/pages/Password.jsx";
import Profile from "./Components/pages/Profile.jsx";
import Notifications from "./Components/pages/Notifications.jsx";
import Friends from "./Components/pages/Friends.jsx";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router basename="/Loop">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/friends" element={<Friends />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
