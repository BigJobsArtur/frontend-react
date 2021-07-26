import React from "react";
import "./Header.scss";

import LogoMoovin from "../../assets/img/logo_moovin.svg";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <img src={LogoMoovin} alt="Logo da Moovin" />
      </nav>
    </header>
  );
};

export default Header;
