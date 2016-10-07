import React from 'react';
import { IndexLink, Link } from 'react-router';

import { Navigation } from './Navigation.jsx';
import AccountsUIWrapper from '../../AccountsUIWrapper.jsx';
/**
 * React-bootstrap section
 */
import { Grid } from 'react-bootstrap';


export const Header = () => (
  <header className="header">
    <div>
      <h1>
        La Biblioteca de Alexandría
        <small>Otaku</small>
      </h1>

      <div className="accounts-ui">
        <AccountsUIWrapper />
      </div>
    </div>
    <Grid>
      <Navigation />
    </Grid>
  </header>
);
