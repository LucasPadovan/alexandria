import React from 'react';
import { IndexLink, Link } from 'react-router';

import { Navigation } from '../components/navigation.jsx';


export const Header = () => (
  <header className="header">
    <h1>
      La Biblioteca de Alexandría
      <small>Otaku</small>
    </h1>

    <Navigation />
  </header>
);
