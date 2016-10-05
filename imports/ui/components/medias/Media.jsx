import React, { Component, PropTypes } from 'react';
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
 * Components section
 */
import Batch from './Batch.jsx';

 /**
 * APIs section
 */
import { Medias } from '/imports/api/medias.js';
import { Batchs } from '/imports/api/batchs.js';

/**
 * Security section
 */
import { Permissions } from '/imports/startup/permissions.js';


export default class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      batchState: 'hide'
    };
  }

  showBatchs() {
    let newState = this.state.batchState ? '' : 'hide';

    this.setState({
      batchState: newState
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
      <Batch key={batch._id} batch={batch} origin='media' currentUser={this.props.currentUser} />
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
                { this.userCanEdit() &&
                  <Button bsStyle="danger" onClick={this.delete.bind(this)}>
                    <Glyphicon glyph="remove" />
                  </Button>
                }
                <Button onClick={this.showBatchs.bind(this)}>
                  <Glyphicon glyph="arrow-down" />
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
        <Row className={ this.state.batchState }>
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
