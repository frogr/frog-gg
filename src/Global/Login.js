import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Col
} from "react-bootstrap";

export const Login = () => {
  return (
    <Form horizontal className="fr0g__form">
      <FormGroup controlId="emailInput">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="email" id="fr0g__form-input" />
        </Col>
      </FormGroup>

      <FormGroup controlId="passwordInput">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl
            type="password"
            placeholder="password"
            id="fr0g__form-input"
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">log in</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};
