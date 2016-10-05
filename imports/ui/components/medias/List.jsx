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


class MediaList extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: '',
      medias: [],
    };
  }

  componentDidMount() {
    this.setState({
      currentUser: Meteor.user(),
      medias: Medias.find({}, { sort: { name: 1 } }).fetch(),
    })
  }

  renderMedias() {
    return (
      this.state.medias.map((media) => (
        <Media key={media._id} media={media} currentUser={this.state.currentUser} />
      ))
    )
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

export default MediaList;
