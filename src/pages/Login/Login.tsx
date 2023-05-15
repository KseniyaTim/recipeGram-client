import { FC, useState } from "react";
import { LOGIN_FIELDS } from "../../consts/loginFields";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PROFILE_ROUTE, REGISTER_ROUTE } from "../../consts/routeConsts";

const Login: FC = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (value: string, property: string) => {
    setUserLogin((prev) => {
      return { ...prev, [property]: value };
    });
  };

  const loginUser = (user: {}) => {
    axios
      .post("http://localhost:5000/user/login", user)
      .then(({ data }) => {
        const { userId } = data;
        localStorage.setItem("userIdToken", userId);
        console.log("Login successful!");
        return "";
      })
      .then(() => {
        history.push(PROFILE_ROUTE);
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  };

  return (
    <div>
      {LOGIN_FIELDS.map((field, index) => (
        <div key={index}>
          <TextField
            id="outlined-basic"
            label={field.label}
            variant="outlined"
            onChange={(e) => {
              handleChange(e.target.value, field.property);
            }}
          />
        </div>
      ))}
      <div>
        <Button
          variant="contained"
          onClick={() => {
            loginUser(userLogin);
          }}
        >
          Login
        </Button>
      </div>
      <div onClick={() => {history.push(REGISTER_ROUTE)}}>Don't have an account yet? join now</div>
    </div>
  );
};

export default Login;
