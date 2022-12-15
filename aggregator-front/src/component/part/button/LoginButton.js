import React from 'react';
import {useNavigate} from "react-router-dom";

const LoginButton = () => {
  const navigation = useNavigate();
  return (
    <>
        <button className="btn btn-light" type="submit" onClick={() => navigation("/login")}>Увійти</button>
    </>
  );
}

export default LoginButton;
