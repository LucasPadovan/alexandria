import React, { Component, PropTypes } from 'react';

import {
  Button,
  ButtonGroup,
  Col,
  Glyphicon,
  ListGroupItem,
  Row,
} from 'react-bootstrap';

/**
 * APIs section
 */
import { Batchs } from '/imports/api/batchs.js';
import { Medias } from '/imports/api/medias.js';

/**
 * Security section
 */
import { Permissions } from '/imports/startup/permissions.js';


class Batch extends Component {
  delete() {
    Batchs.remove(this.props.batch._id);
  }

  getMediaName() {
    const media = Medias.find(
      { _id: this.props.batch.mediaId }, {}
    ).fetch(),
          returnValue = media[0] ? media[0].name : 'Media no encontrado';

    return returnValue;
  }

  /**
   * Security methods
   */
  userCanEdit() {
    return this.props.currentUser && Permissions.manage.includes(this.props.currentUser.username);
  }

  render() {
    return (
      <ListGroupItem className="l-mar-left-1 l-mar-right-1">
        { this.userCanEdit() && (
          <Button bsStyle="danger" bsSize="xsmall" className="move-right-1 z-index-1" onClick={this.delete.bind(this)}>
            <Glyphicon glyph="remove" />
          </Button>
        )}
        <span>
          <Row>
            <Col xs={12} md={12}>
              <strong>Media:</strong> {this.getMediaName()}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Rango de episodios:</strong> {this.props.batch.size}
            </Col>
          </Row>
          { this.props.batch.quality && (
              <Row>
                <Col xs={12} md={12}>
                  <strong>Calidad:</strong> {this.props.batch.quality}
                </Col>
              </Row>
          )}
          { this.props.batch.fansub && (
            <Row>
              <Col xs={12} md={12}>
                <strong>Fansub:</strong> {this.props.batch.fansub}
              </Col>
            </Row>
          )}
          <Row>
            <Col xs={12} md={12}>
               <strong>Ubicacion:</strong> {this.props.batch.route}
            </Col>
          </Row>
        </span>
      </ListGroupItem>
    );
  }
}

Batch.propTypes = {
  batch: PropTypes.object.isRequired,
};

export default Batch;
