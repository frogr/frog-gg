import React from "react";
import { Button } from "react-bootstrap";

const Splash = () => {
  return [
    <div className="fr0g__title">
      <h1>fr0g.gg</h1>
    </div>,
    <div className="fr0g__text--p">
      <p>
        fr0g.gg is a social league of legends analytics website that allows
        players to view trends in their performance statistics, and makes it
        very easy to share those trends and milestones with others. it also
        allows users to get analytical insight to their own strengths and
        weaknesses, and provides a lot of tools and functionality to improve at
        the game.
      </p>
    </div>,
    <div className="fr0g__button--signup">
      <Button> Sign up for Closed Beta! </Button>
    </div>
  ];
};

export default Splash;
