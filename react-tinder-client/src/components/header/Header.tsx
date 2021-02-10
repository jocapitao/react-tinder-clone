import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

import HeaderIcon from "./headericon/HeaderIcon";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <HeaderIcon Icon={PersonIcon} />
      <img
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png?
        __cf_chl_jschl_tk__=413f5bcb1d11b724e5f9891f6050fd6e8b73cc72-1612953129-0-
        ASVfjbQCX8iCQ9unepGZJiyferU6m7XIm3XATxQ766-YzSTFPY74s6MmfLBa_f4g-E6BR-zsnx
        lJ8VHz3bS2C12N33IQ65Zyl09rxcH_5GfL7jstjbbXTXvfKfcLpMJLTfUNDV8tVjIidzPxLXlc
        4n-1rYSIhO-gftOqmrUrJsvEaYEf-ouDR9G2c6AsnBPuRbVDBmSVkmhnydBG-1zo7zApRip2ed
        aAi4DD185xS5v_PkVKcEJaYgENGGmF5v7GE23PxPYLuoJ_dNxQ301vLri02oq6n_Xd7jp1cFH8
        guoP5cX_La95-0DwsPT9R_0vQGlFUg27H9OKADzpgf3n4HmbjpOBR1Kjk9gRfheM3fk_JItK5e
        aJzdrZGnCxXuYn081tG7zgtou1K74u6Wyhe0eRIQsPII_FtNQpIdzxuhSq"
        alt=""
        className="header__logo"
      />
      <HeaderIcon Icon={ForumIcon} />
    </div>
  );
};

export default Header;
