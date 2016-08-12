import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
    <li><IndexLink to="/mediacontainers" activeClassName="active">Carpetas</IndexLink></li>
    <li><IndexLink to="/batchs" activeClassName="active">Batchs</IndexLink></li>
  </ul>
);
