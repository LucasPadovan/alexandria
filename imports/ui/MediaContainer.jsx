import React, { Component, PropTypes } from 'react';

import Batch from './Batch.jsx';

import { Batchs } from '../api/batchs.js';
import { MediaContainers } from '../api/media_containers.js';

import {
  Button,
  ButtonGroup,
  Col,
  Glyphicon,
  Grid,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap';

// MediaContainer component
export default class MediaContainer extends Component {
  delete() {
    MediaContainers.remove(this.props.mediaContainer._id);
  }

  renderBatchs() {
    let filteredBatchs = Batchs.find(
      { mediaContainerId: this.props.mediaContainer._id },
      { sort: { route: 1 } }
    ).fetch();

    return filteredBatchs.map((batch) => (
      <Batch key={batch._id} batch={batch} origin='mediaContainer'/>
    ));
  }

  render() {
    return (
      <ListGroupItem>
        <Row>
          <Col xs={12} md={12}>
            <h4>
              <Button bsStyle="danger" onClick={this.delete.bind(this)}>
                <Glyphicon glyph="remove" />
              </Button>
              <span className="l-pad-left-1">
                {this.props.mediaContainer.container_type} - {this.props.mediaContainer.code}
              </span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <strong>Capacidad:</strong> {this.props.mediaContainer.capacity}
            </Col>
        </Row>
        <Row>
          <ListGroup>
            {this.renderBatchs()}
          </ListGroup>
        </Row>
      </ListGroupItem>
    );
  }
}

MediaContainer.propTypes = {
  mediaContainer: PropTypes.object.isRequired,
};
