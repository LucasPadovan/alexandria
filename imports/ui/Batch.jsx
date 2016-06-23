import React, { Component, PropTypes } from 'react';

import { Animes } from '../api/animes.js';
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

// Anime component
export default class Batch extends Component {
  delete() {
    Batchs.remove(this.props.batch._id);
  }

  getAnimeName() {
    const anime = Animes.find(
      { _id: this.props.batch.anime_id }, {}
    ).fetch(),
          returnValue = anime[0] ? anime[0].name : 'Anime no encontrado';

    return returnValue;
  }

  getMediaContainerName(){
    const mediaContainer = MediaContainers.find(
      { _id: this.props.batch.media_container_id }, {}
    ).fetch();
    let returnValue = 'Contenedor no encontrado';

    if (!!mediaContainer[0]) {
      returnValue = mediaContainer[0].container_type + ' - ' + mediaContainer[0].code;
    }

    return returnValue;
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
                <span className="l-pad-left-1">{this.getAnimeName()}</span>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Rango de episodios:</strong> {this.props.batch.size}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Calidad:</strong> {this.props.batch.quality}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Fansub:</strong> {this.props.batch.fansub}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Contenedor:</strong> {this.getMediaContainerName()}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <strong>Ubicación:</strong> {this.props.batch.route}
            </Col>
          </Row>
        </Grid>
      </ListGroupItem>
    );
  }
}

Batch.propTypes = {
  batch: PropTypes.object.isRequired,
};
