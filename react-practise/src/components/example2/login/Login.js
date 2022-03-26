import React, { useState } from "react";
import Button from "../ui/Button";

const Login = () => {
  const [islogin, setIsLogin] = useState(true);

  const setlogin = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
    {islogin && <div>Rahul</div>} 
    {!islogin && <div>Abhishek</div>} 
      <Button click={setlogin} />
    </>
  );
};

export default Login;
