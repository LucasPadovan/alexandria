import React from 'react';

// Components imports
import { Navigation } from '../components/navigation.jsx';

export const App = ( { children } ) => (
  <div>
    <Navigation />
    { children }
  </div>
)
