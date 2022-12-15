import React from 'react';
import {useNavigate} from "react-router-dom";

const RegisterButton = () => {
  const navigation = useNavigate();
  return (
    <>
        <button className="btn btn-light" type="submit" onClick={() => navigation("/register")}>Зареєструватись</button>
    </>
  );
}

export default RegisterButton;
