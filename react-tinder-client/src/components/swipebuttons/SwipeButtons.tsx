import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ReplayIcon from "@material-ui/icons/Replay";
import StarRateIcon from "@material-ui/icons/StarRate";

import SwipeButton from "./swipebutton/SwipeButton";
import "./SwipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className="swipe__buttons">
      <SwipeButton className="swipe__buttons__repeat" Icon={ReplayIcon} />
      <SwipeButton className="swipe__buttons__left" Icon={CloseIcon} />
      <SwipeButton className="swipe__buttons__star" Icon={StarRateIcon} />
      <SwipeButton className="swipe__buttons__right" Icon={FavoriteIcon} />
      <SwipeButton className="swipe__buttons__lightning" Icon={FlashOnIcon} />
    </div>
  );
};

export default SwipeButtons;
