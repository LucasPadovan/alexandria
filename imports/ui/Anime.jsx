import React, { Component, PropTypes } from 'react';

import { Animes } from '../api/animes.js';

import {
  Button,
  ButtonGroup,
  Col,
  Glyphicon,
  Grid,
  ListGroupItem,
  Row,
} from 'react-bootstrap';

// Anime component - represents a single todo item
export default class Anime extends Component {
  toggleChecked() {
    Animes.update(this.props.anime._id, {
      $set: { checked: !this.props.anime.checked },
    });
  }

  deleteThisAnime() {
    Animes.remove(this.props.anime._id);
  }

  render() {
    const animeClassName = this.props.anime.checked ? 'checked' : '';

    return (
      <ListGroupItem className={animeClassName}>
        <Grid>
          <Row>
            <Col xs={2} md={2}>
              <ButtonGroup>
                <Button bsStyle="danger" onClick={this.deleteThisAnime.bind(this)}>
                  <Glyphicon glyph="remove" />
                </Button>
                <Button onClick={this.toggleChecked.bind(this)}>
                  <Glyphicon glyph="ok" />
                </Button>
              </ButtonGroup>
            </Col>
            <Col xs={10} md={10}>
              <h4 className="l-pad-left-1">
                {this.props.anime.name}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Agregado por:</strong> {this.props.anime.username}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Inicio emisión:</strong> {this.props.anime.date}
            </Col>
          </Row>
        </Grid>
      </ListGroupItem>
    );
  }
}

Anime.propTypes = {
  // This component gets the anime to display through a React prop.
  // We can use propTypes to indicate it is required
  anime: PropTypes.object.isRequired,
};
