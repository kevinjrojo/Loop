const API_URL = "https://user-manager-mi2a.onrender.com";

export const loginUser = async (username, password) => {
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  });

  if (!response.ok) throw new Error("Usuario o contraseña incorrectos");

  const data = await response.json();

  localStorage.setItem("token", data.access_token);

  return data.access_token;
};

export const getUserData = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");

  const response = await fetch(`${API_URL}/user/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Error al obtener datos del usuario");

  return response.json();
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
