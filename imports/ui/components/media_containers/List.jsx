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
import MediaContainer from './MediaContainer.jsx';

/**
 * APIs section
 */
import { MediaContainers } from '../../../api/media_containers.js';


class MediaContainerList extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: '',
      mediaContainers: [],
    };
  }

  componentDidMount() {
    this.setState({
      currentUser: Meteor.user(),
      mediaContainers: MediaContainers.find({}, { sort: { name: 1 } }).fetch(),
    })
  }

  renderMediaContainers() {
    return (
      this.state.mediaContainers.map((mediaContainer) => (
        <MediaContainer key={mediaContainer._id} mediaContainer={mediaContainer} currentUser={this.state.currentUser} />
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

export default MediaContainerList;
