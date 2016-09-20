import React from 'react';

// Components imports
import { Header } from '../components/header.jsx';

export const App = ( { children } ) => (
  <div>
    <Header />

    { children }
  </div>
)
