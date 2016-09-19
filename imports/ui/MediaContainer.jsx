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

/**
 * Security section
 */
import { Permissions } from '../startup/permissions.js';

// MediaContainer component
export default class MediaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      batchState: 'hide'
    };
  }

  delete() {
    MediaContainers.remove(this.props.mediaContainer._id);
  }

  showBatchs() {
    let newState = this.state.batchState ? '' : 'hide';

    this.setState({
      batchState: newState
    });
  }

  renderBatchs() {
    let filteredBatchs = Batchs.find(
      { mediaContainerId: this.props.mediaContainer._id },
      { sort: { route: 1 } }
    ).fetch();

    return filteredBatchs.map((batch) => (
      <Batch key={batch._id} batch={batch} origin='mediaContainer' currentUser={this.props.currentUser} />
    ));
  }

  /**
   * Security methods
   */
  userCanEdit() {
    return this.props.currentUser && Permissions.manage.includes(this.props.currentUser.username);
  }

  render() {
    return (
      <ListGroupItem>
        <Row>
          <Col xs={12} md={12}>
            <h4>
              <ButtonGroup>
                {this.userCanEdit() &&
                  <Button bsStyle="danger" onClick={this.delete.bind(this)}>
                    <Glyphicon glyph="remove" />
                  </Button>
                }
                <Button onClick={this.showBatchs.bind(this)}>
                  <Glyphicon glyph="arrow-down" />
                </Button>
              </ButtonGroup>
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
        <Row className={ this.state.batchState }>
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
