import axios from "axios";

interface User {
  email: string;
  password: string;
}

export const Register = (user: User) => {
  const { email, password } = user;
  if (email && password) {
    axios
      .post("http://localhost:8000/api/v1/users/register", {
        email,
        password,
      })
      .then((res) => {
        console.log("Registration successful:", res.data);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  } else {
    alert("Invalid user");
  }
};
