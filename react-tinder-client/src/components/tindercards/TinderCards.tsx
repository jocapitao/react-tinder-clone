import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "../../api/axios";

import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/tinder/cards");
      setPeople(data);
    })();
  }, []);

  const swiped = (dir: Direction, name: string) => {};

  const outOfFrame = (name: string) => {};

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map(({ _id, name, imageUrl }) => (
          <div className="swipe" key={_id}>
            <TinderCard
              preventSwipe={["up", "down"]}
              onSwipe={(dir: Direction) => swiped(dir, name)}
              onCardLeftScreen={() => outOfFrame(name)}
            >
              <div style={{ backgroundImage: `url(${imageUrl})` }} className="card">
                <h3>{name}</h3>
              </div>
            </TinderCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
