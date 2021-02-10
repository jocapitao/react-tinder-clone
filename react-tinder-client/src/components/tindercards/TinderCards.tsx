import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import "./TinderCards.css";

const Persons: PersonType[] = [
  {
    id: "0001",
    name: "Elon Musk",
    url:
      "http://t3.gstatic.com/images?q=tbn:ANd9GcSVVyE9C3wjVRHtaS9IHCiCJpqSEraahwjlDyt-KgxSh5xEdsVQXUUE7B8vpRQ-",
  },
  {
    id: "0002",
    name: "Jeff Bezos",
    url:
      "https://ichef.bbci.co.uk/news/2048/cpsprodpb/167EA/production/_116783129_hi065491102.jpg",
  },
];

const TinderCards = () => {
  const [people, setPeople] = useState<PersonType[]>(Persons);

  const swiped = (dir: any, name: string) => {};

  const outOfFrame = (name: string) => {};

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map(({ id, name, url }) => (
          <div className="swipe" key={id}>
            <TinderCard
              preventSwipe={["up", "down"]}
              onSwipe={(dir: any) => swiped(dir, name)}
              onCardLeftScreen={() => outOfFrame(name)}
            >
              <div style={{ backgroundImage: `url(${url})` }} className="card">
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
