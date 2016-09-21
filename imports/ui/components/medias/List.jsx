import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

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
  constructor(props) {
    super(props);

    this.medias = Medias.find({}, { sort: { name: 1 } }).fetch();
  }

  componentWillMount() {
    // this.medias = Medias.find({}, { sort: { name: 1 } }).fetch();
    // debugger;
  }

  renderMedias() {
    let filteredMedias = Medias.find({}, { sort: { name: 1 } });

    return filteredMedias.map((media) => (
      <Media key={media._id} media={media} currentUser={this.props.currentUser} />
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
