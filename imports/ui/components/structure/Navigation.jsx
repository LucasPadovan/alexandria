import React from 'react';
import { IndexLink, Link } from 'react-router';

/**
 * React-bootstrap section
 */
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';
import {
  IndexLinkContainer,
  LinkContainer
} from 'react-router-bootstrap';


// ActiveClassName puede no necesitarse
export const Navigation = () => (
  <div>
    <Navbar.Collapse>
      <Nav bsStyle="tabs" justified activeKey={2}>
        <IndexLinkContainer to="/">
          <NavItem eventKey={1}>Índice</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/mediacontainers">
          <NavItem eventKey={2}>Carpetas</NavItem>
        </LinkContainer>
        <LinkContainer to="/batchs">
          <NavItem eventKey={3}>Batchs</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </div>
);
