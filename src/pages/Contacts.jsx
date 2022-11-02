import React from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";

const Contacts = () => {
  const location = useLocation();
  
  return <>
    <Header path={location.pathname} />
    
  </>
}

export default Contacts;