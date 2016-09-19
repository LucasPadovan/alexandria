import React from 'react';

// Components imports
import { Navigation } from '../components/navigation.jsx';

export const App = ( { children } ) => (
  <div>
    <header>
      <h1>La Biblioteca de Alexandría</h1>
      <h2>Otaku</h2>
    </header>

    { children }
    <Navigation />
  </div>
)
