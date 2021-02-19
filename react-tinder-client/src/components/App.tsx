import React from "react";

import Header from "./header/Header";
import SwipeButtons from "./swipebuttons/SwipeButtons";
import TinderCards from "./tindercards/TinderCards";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default App;
