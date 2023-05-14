import React, { FC, useState } from "react";
import { IProfile } from "../Profile/IProfile";
import { REGISTER_FIELDS } from "../../consts/registerFields";
import { Button, TextField } from "@mui/material";
import "./Register.css";
const Register: FC<IProfile> = () => {

    const [userInfo, setUserInfo] = useState<IProfile>({} as IProfile)

    const handleChange = (value: string, property: string) => {

    }

  return (
    <div className="registerWrapper">
      {REGISTER_FIELDS.map((field, index) => (
        <div className="singleField">
          <TextField
            key={index}
            id="outlined-basic"
            label={field.label}
            variant="outlined"
          />
        </div>
      ))}
      <div className="registerButton">
        <Button variant="contained">Register</Button>
      </div>
    </div>
  );
};

export default Register;
