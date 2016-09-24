import React from 'react';
import { Link } from 'react-router';

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


// <IndexLink to="/">
//   <NavItem eventKey={1}>Indice</NavItem>
// </IndexLink>

export const Navigation = () => (
  <div>
    <Navbar.Collapse>
      <Nav bsStyle="tabs" justified activeKey={2}>
        <LinkContainer to="/medias">
          <NavItem eventKey={1}>Medias</NavItem>
        </LinkContainer>
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
