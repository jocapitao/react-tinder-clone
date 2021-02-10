import React, { FunctionComponent } from "react";
import IconButton from "@material-ui/core/IconButton";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import "./HeaderIcon.css";

type HeaderIconProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  fontSize?: "small" | "large" | "inherit" | "default" | undefined;
};

const HeaderIcon: FunctionComponent<HeaderIconProps> = ({ Icon, fontSize }) => {
  return (
    <IconButton>
      <Icon fontSize={fontSize} className="header__icon" />
    </IconButton>
  );
};

HeaderIcon.defaultProps = {
  fontSize: "large",
};

export default HeaderIcon;
