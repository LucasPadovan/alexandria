import React, { Component, PropTypes } from 'react';

import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

import { Animes } from '../api/animes.js';

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
      <li className={animeClassName}>
        <FlatButton label="&times;" onClick={this.deleteThisAnime.bind(this)} />
        <Checkbox
          readOnly
          checked={this.props.anime.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        <span className="text">
          <strong>{this.props.anime.username}</strong>: {this.props.anime.text}
        </span>

      </li>
    );
  }
}

Anime.propTypes = {
  // This component gets the anime to display through a React prop.
  // We can use propTypes to indicate it is required
  anime: PropTypes.object.isRequired,
};
