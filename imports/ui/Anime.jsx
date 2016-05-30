import React, { Component, PropTypes } from 'react';

import { Animes } from '../api/animes.js';

import {
  Button,
  ButtonGroup,
  ListGroupItem,
} from 'react-bootstrap';

// Anime component - represents a single todo item
export default class Anime extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Animes.update(this.props.anime._id, {
      $set: { checked: !this.props.anime.checked },
    });
  }

  deleteThisAnime() {
    Animes.remove(this.props.anime._id);
  }

  render() {
    // Give animes a different className when they are checked off,
    // so that we can style them nicely in CSS
    const animeClassName = this.props.anime.checked ? 'checked' : '';

    return (
      <ListGroupItem className={animeClassName}>
        <ButtonGroup>
          <Button bsStyle="danger" onClick={this.deleteThisAnime.bind(this)}>
            &times;
          </Button>
          <Button onClick={this.toggleChecked.bind(this)}>
            Visto
          </Button>
        </ButtonGroup>
        <span className="l-pad-left-1">
          <strong>{this.props.anime.username}</strong>: {this.props.anime.text}
        </span>

      </ListGroupItem>
    );
  }
}

Anime.propTypes = {
  // This component gets the anime to display through a React prop.
  // We can use propTypes to indicate it is required
  anime: PropTypes.object.isRequired,
};
