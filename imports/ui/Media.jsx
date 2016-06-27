import React, { Component, PropTypes } from 'react';

import Batch from './Batch.jsx';

import { Medias } from '../api/medias.js';
import { Batchs } from '../api/batchs.js';

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

// Media component
export default class Media extends Component {
  toggleChecked() {
    Medias.update(this.props.media._id, {
      $set: { checked: !this.props.media.checked },
    });
  }

  delete() {
    Medias.remove(this.props.media._id);
  }

  renderBatchs() {
    let filteredBatchs = Batchs.find(
      { mediaId: this.props.media._id },
      { sort: { size: 1 } }
    ).fetch();

    return filteredBatchs.map((batch) => (
      <Batch key={batch._id} batch={batch} origin='media'/>
    ));
  }

  render() {
    const mediaClassName = this.props.media.checked ? 'checked' : '';

    return (
      <ListGroupItem className={mediaClassName}>
        <Row>
          <Col xs={12} md={12}>
            <h4>
              <ButtonGroup>
                <Button bsStyle="danger" onClick={this.delete.bind(this)}>
                  <Glyphicon glyph="remove" />
                </Button>
                <Button onClick={this.toggleChecked.bind(this)}>
                  <Glyphicon glyph="ok" />
                </Button>
              </ButtonGroup>
              <span className="l-pad-left-1">{this.props.media.name}</span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <strong>Tipo:</strong> {this.props.media.mediaType}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <strong>Inicio emisión:</strong> {this.props.media.date}
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

Media.propTypes = {
  media: PropTypes.object.isRequired,
};
