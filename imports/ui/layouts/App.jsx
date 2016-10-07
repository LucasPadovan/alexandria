import React from 'react';
/**
 * React-bootstrap section
 */
import {
  Col,
  Glyphicon,
  Grid,
  Row,
  Well,
} from 'react-bootstrap';

/**
 * Components section
 */
import { Header } from '../components/structure/Header.jsx';


export const App = ( { children } ) => (
  <div>
    <Header />

    <Grid>
      <Row>
        { children }
      </Row>
    </Grid>
  </div>
)
