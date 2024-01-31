import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <a onClick={() => navigate("/view")}>Logo</a>
        <a>Home</a>
        <a>Services</a>
        <a>Gallery</a>
        <a>Contact Us</a>
      </nav>
    </header>
  );
};

export default HeaderComponent;
