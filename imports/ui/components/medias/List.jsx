import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

/**
 * React-bootstrap section
 */
import {
  ListGroup
} from 'react-bootstrap';

/**
 * Components section
 */
import Media from './Media.jsx';

/**
 * APIs section
 */
import { Medias } from '../../../api/medias.js';


export class MediaList extends Component {
  componentDidMount() {
    this.setState({
      medias: Medias.find({}, { sort: { name: 1 } }).fetch(),
      currentUser: Meteor.user(),
    })
  }

  renderMedias() {
    let filteredMedias = this.state ? this.state.medias : [];

    return filteredMedias.map((media) => (
      <Media key={media._id} media={media} currentUser={this.state.currentUser} />
    ));
  }


  render() {
    return (
      <div>
        <ListGroup>
          { this.renderMedias() }
        </ListGroup>
      </div>
    );
  }
}
