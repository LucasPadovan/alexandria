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
  deleteThisMediaContainer() {
    MediaContainers.remove(this.props.media_container._id);
  }

  render() {
    return (
      <ListGroupItem>
        <Grid>
          <Row>
            <Col xs={2} md={2}>
              <ButtonGroup>
                <Button bsStyle="danger" onClick={this.deleteThisMediaContainer.bind(this)}>
                  <Glyphicon glyph="remove" />
                </Button>
              </ButtonGroup>
            </Col>
            <Col xs={10} md={10}>
              <h4 className="l-pad-left-1">
                {this.props.mediaContainer.container_type} - {this.props.mediaContainer.code}
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
  // This component gets the anime to display through a React prop.
  // We can use propTypes to indicate it is required
  mediaContainer: PropTypes.object.isRequired,
};
