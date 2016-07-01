import React, { Component, PropTypes } from 'react';

import { Medias } from '../api/medias.js';
import { Batchs } from '../api/batchs.js';
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

// Media component
export default class Batch extends Component {
  delete() {
    Batchs.remove(this.props.batch._id);
  }

  // Emergency method until update is available
  setFirstFolder() {
    Batchs.update(this.props.batch._id, {
      $set: { mediaContainerId: '12P7e8x2YjmzMFQJjS' }
    })
  }

  getMediaName() {
    const media = Medias.find(
      { _id: this.props.batch.mediaId }, {}
    ).fetch(),
          returnValue = media[0] ? media[0].name : 'Media no encontrado';

    return returnValue;
  }

  getMediaContainerName(){
    const mediaContainer = MediaContainers.find(
      { _id: this.props.batch.mediaContainerId }, {}
    ).fetch();
    let returnValue = 'Carpeta no encontrado';

    if (!!mediaContainer[0]) {
      returnValue = mediaContainer[0].container_type + ' - ' + mediaContainer[0].code;
    }

    return returnValue;
  }

  selectiveRender(comesFromMedia) {
    let returnFunction;

    if (comesFromMedia) {
      returnFunction = this.renderForMedia();
    } else {
      returnFunction = this.renderForMediaContainer();
    }

    return returnFunction;
  }

  renderForMedia() {
    let batch = (<span>
                  <Row>
                    <Col xs={12} md={12}>
                      <strong>Rango de episodios:</strong> {this.props.batch.size}
                    </Col>
                  </Row>
                  {this.props.batch.quality && (
                      <Row>
                        <Col xs={12} md={12}>
                          <strong>Calidad:</strong> {this.props.batch.quality}
                        </Col>
                      </Row>
                  )}
                  {this.props.batch.fansub && (
                    <Row>
                      <Col xs={12} md={12}>
                        <strong>Fansub:</strong> {this.props.batch.fansub}
                      </Col>
                    </Row>
                  )}
                  <Row>
                    <Col xs={12} md={12}>
                      <strong>Carpeta:</strong> {this.getMediaContainerName()}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                       <strong>Ubicacion:</strong> {this.props.batch.route}
                    </Col>
                  </Row>
                </span>);

    return batch;
  }

  renderForMediaContainer() {
    let batch = (<span>
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
                </span>);

    return batch;
  }

  render() {
    return (
      <ListGroupItem className="l-mar-left-1 l-mar-right-1">
        <Button bsStyle="danger" bsSize="xsmall" className="move-right-1 z-index-1" onClick={this.delete.bind(this)}>
          <Glyphicon glyph="remove" />
        </Button>
        {this.selectiveRender(this.props.origin == 'media')}
      </ListGroupItem>
    );
  }
}

Batch.propTypes = {
  batch: PropTypes.object.isRequired,
};
