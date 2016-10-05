import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
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
import { Medias } from '/imports/api/medias.js';


class MediaList extends React.Component {
  renderMedias() {
    return (
      this.props.medias.map((media) => (
        <Media key={media._id} media={media} currentUser={this.props.currentUser} />
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

export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
        medias: Medias.find({}, { sort: { name: 1 } }).fetch()
    }

}, MediaList);
