import React from 'react';
import { IndexLink, Link } from 'react-router';

import { Navigation } from './Navigation.jsx';
import AccountsUIWrapper from '../../AccountsUIWrapper.jsx';

export const Header = () => (
  <header className="header">
    <div>
      <h1>
        La Biblioteca de Alexandría
        <small>Otaku</small>
      </h1>

      <span className="pull-right">
        <AccountsUIWrapper />
      </span>
    </div>

    <Navigation />
  </header>
);
