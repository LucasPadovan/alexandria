import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
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
import MediaContainer from './MediaContainer.jsx';

/**
 * APIs section
 */
import { MediaContainers } from '../../../api/media_containers.js';


class MediaContainerList extends React.Component {
  renderMediaContainers() {
    return (
      this.props.mediaContainers.map((mediaContainer) => (
        <MediaContainer key={mediaContainer._id} mediaContainer={mediaContainer} currentUser={this.props.currentUser} />
      ))
    )
  }


  render() {
    return (
      <div>
        <ListGroup>
          { this.renderMediaContainers() }
        </ListGroup>
      </div>
    );
  }
}


export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
        mediaContainers: MediaContainers.find({}, { sort: { name: 1 } }).fetch()
    }

}, MediaContainerList);
