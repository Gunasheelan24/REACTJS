import React, { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";
import { useNavigate, Outlet } from "react-router-dom";
import Store from "../../context/createStore";

const Protected = () => {
  const { user } = useContext(Store);
  const navi = useNavigate();
  let Veryfi;
  let id;
  if (user !== null) {
    const token = user.jwt;
    if (user.jwt) {
      const tokenVerified = jwtDecode(token);
      Veryfi = `${tokenVerified.id}`;
      id = user.id;
    } else {
      navi("/ParisAirways/v1/loginPage");
    }
  } else {
    useEffect(() => {
      return navi("/ParisAirways/v1/loginPage");
    }, []);
  }
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Protected;
