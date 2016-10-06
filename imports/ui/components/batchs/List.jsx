import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {
  ListGroup
} from 'react-bootstrap';

/**
 * Components section
 */
import Batch from './Batch.jsx';

/**
 * APIs section
 */
import { Batchs } from '/imports/api/batchs.js';

// <Batch key={batch._id} batch={batch} currentUser={this.props.currentUser} />
class BatchList extends React.Component {
  renderBatchs() {
    return (
      this.props.batchs.map((batch) => (
        ''
      ))
    )
  }

  render() {
    return (
      <div>
        <ListGroup>
          { this.renderBatchs() }
        </ListGroup>
      </div>
    );
  }
}


export default createContainer(({props}) => {
    return {
        currentUser: Meteor.user(),
        batchs: Batchs.find({}, { sort: { name: 1 } }).fetch()
    }
}, Batchs);
