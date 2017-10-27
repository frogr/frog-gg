import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Splash.css";

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
    </div>,
    <div className="fr0g__footer-splash">
      <div className="fr0g__footer-info">
        <p>
          fr0g.gg is not endorsed, sponsored, maintained, or otherwise
          affiliated with riot games.
          <span>
            data is based on the League of Legends North America server.
          </span>
        </p>
      </div>
      <div className="fr0g__footer-contact" />
      <p>contact me</p>
      <p>twitter</p>
    </div>
  ];
};

export default Splash;
