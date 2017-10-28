import React from "react";
import { Modal, Button } from "react-bootstrap";

const Questions = () => {
  return [
    <div className="fr0g__questions">
      <form action="#">
        <input placeholder="Full name" /> <br />
        <input placeholder="League of Legends IGN" /> <br />
        <input placeholder="Age" /> <br />
        <input placeholder="Rank" /> <br />
        <input placeholder="Email" /> <br />
        <br />
        <Button> Sign up for closed Beta! </Button>
      </form>
    </div>
  ];
};

export default Questions;
