const API_URL = "https://user-manager-mi2a.onrender.com";
const VITE_SENDER_EMAIL = import.meta.env.VITE_SENDER_EMAIL;
const VITE_PASSWORD_EMAIL = import.meta.env.VITE_PASSWORD_EMAIL;

//const CLOUDINARY_API_KEY = `cloudinary://${apiKey}:${apiSecret}@${cloudName}`;

//const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
//const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
//const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
export const registerUser = async (full_name, username, email, password) => {
  const formData = new URLSearchParams();
  formData.append("full_name", full_name);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);

  try {
    const response = await fetch(`${API_URL}/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          full_name: full_name,
          username: username,
          email: email,
          password: password,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error en el registro");
    }
  } catch (err) {
    setError(err.message);
    console.log(err);
    throw err;
  }
};
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

export const sendEmail = async (receiver_email) => {
  const formData = new URLSearchParams();
  formData.append("receiver_email", receiver_email);

  try {
    const response = await fetch(`${API_URL}/recovery-password/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        receiver_email: receiver_email,
        sender_email: VITE_SENDER_EMAIL,
        password_email: VITE_PASSWORD_EMAIL,
        email_template_html: null,
        custom_code: null,
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error en envio de correo");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const verifyPaasswordCode = async (code, user_email) => {
  try {
    const response = await fetch(`${API_URL}/recovery-password/verify-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: code,
        user_email: user_email,
      }),
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Error en la verificación del código");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const newUserPassword = async (new_password, email) => {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const response = await fetch(`${API_URL}/recovery-password/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: email,
        new_password: new_password,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Error al cambiar la contraseña");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
