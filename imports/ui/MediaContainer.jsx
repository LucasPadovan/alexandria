import React, { Component, PropTypes } from 'react';

import { MediaContainers } from '../api/media_containers.js';

import {
  Button,
  ButtonGroup,
  Col,
  Glyphicon,
  Grid,
  ListGroupItem,
  Row,
} from 'react-bootstrap';

// MediaContainer component
export default class MediaContainer extends Component {
  delete() {
    MediaContainers.remove(this.props.media_container._id);
  }

  render() {
    return (
      <ListGroupItem>
        <Grid>
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
              <strong>Capacidad</strong> {this.props.mediaContainer.capacity}
              </Col>
            </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Agregado por:</strong> {this.props.mediaContainer.username}
            </Col>
          </Row>
        </Grid>
      </ListGroupItem>
    );
  }
}

MediaContainer.propTypes = {
  mediaContainer: PropTypes.object.isRequired,
};
