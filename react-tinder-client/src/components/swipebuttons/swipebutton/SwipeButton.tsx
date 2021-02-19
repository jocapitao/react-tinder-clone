import React, { FunctionComponent } from "react";
import IconButton from "@material-ui/core/IconButton";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import "./SwipeButton.css";

type SwipeButtonProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  fontSize?: "small" | "large" | "inherit" | "default" | undefined;
  className?: string;
};

const SwipeButton: FunctionComponent<SwipeButtonProps> = (props) => {
  const { Icon, fontSize, className } = props;
  return (
    <IconButton>
      <Icon fontSize={fontSize} className={`swipe_button ${className}`} />
    </IconButton>
  );
};

SwipeButton.defaultProps = {
  fontSize: "large",
  className: "",
};

export default SwipeButton;
