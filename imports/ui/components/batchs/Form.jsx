import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {
  Button,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Glyphicon,
  Grid,
  InputGroup,
  ListGroup,
  PageHeader,
  Row,
  Well,
} from 'react-bootstrap';

/**
 * Components section
 */
import Batch from './Batch.jsx';

/**
 * APIs section
 */
import { Medias } from '/imports/api/medias.js';
import { MediaContainers } from '/imports/api/media_containers.js';

/**
 * Security section
 */
import { Permissions } from '/imports/startup/permissions.js';


class BatchForm extends Component {
  handleBatchSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref. TODO: create a loop for this.
    const mediaIdInput       = ReactDOM.findDOMNode(this.refs.batchMediaInput),
          sizeInput          = ReactDOM.findDOMNode(this.refs.batchSizeInput),
          qualityInput       = ReactDOM.findDOMNode(this.refs.batchQualityInput),
          fansubInput        = ReactDOM.findDOMNode(this.refs.batchFansubInput),
          mContainerIdInput  = ReactDOM.findDOMNode(this.refs.batchMediaContainerInput),
          routeInput         = ReactDOM.findDOMNode(this.refs.batchRouteInput),
          mediaId           = mediaIdInput.value.trim(),
          size               = sizeInput.value.trim(),
          quality            = qualityInput.value.trim(),
          fansub             = fansubInput.value.trim(),
          mediaContainerId = mContainerIdInput.value.trim(),
          route              = routeInput.value.trim(),
          newBatch           = {
            mediaId,
            size,
            quality,
            fansub,
            mediaContainerId,
            route,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
          },
          schema             = Batchs.schema,
          isAValidObject     = schema.namedContext("newBatch").validate(newBatch);

    if (isAValidObject) {
        Batchs.insert(newBatch);

        // Clear form. TODO: create a loop for this or a function.
        sizeInput.value = '';
        // qualityInput.value = '';
        fansubInput.value = '';
        // routeInput.value = '';
    } else {
      //TODO: error handling
    }
  }

  /**
   * Security methods
   */
  userCanEdit() {
    return this.props.currentUser && Permissions.manage.includes(this.props.currentUser.username);
  }

  renderMediasAsOptions() {
    let medias = this.props.medias;

    return medias.map((media) => (
      <option value={media._id}>{media.name}</option>
    ))
  }

  renderMediaContainersAsOptions() {
    let mediaContainers = this.props.mediaContainers;

    return mediaContainers.map((mediaContainer) => (
      <option value={mediaContainer._id}>
        {mediaContainer.container_type} - {mediaContainer.code}
      </option>
    ))
  }

  renderBatchForm() {
    var newBatchForm = '';

    if (this.userCanEdit()) {
      newBatchForm = (
        <Well>
          <form onSubmit={this.handleBatchSubmit.bind(this)}>
           <FormGroup controlId="newBatchMedia">
             <ControlLabel>Media</ControlLabel>
             <FormControl
               componentClass="select"
               placeholder="Media"
               ref="batchMediaInput"
             >
               {this.renderMediasAsOptions()}
             </FormControl>
           </FormGroup>
           <FormGroup controlId="newBatchSize">
             <ControlLabel>Rango de capitulos</ControlLabel>
             <FormControl
               placeholder="Rango de capitulos"
               ref="batchSizeInput"
               type="text"
               />
           </FormGroup>
           <FormGroup controlId="newBatchRoute">
             <ControlLabel>Ruta</ControlLabel>
             <FormControl
               placeholder="Ubicacion"
               ref="batchRouteInput"
               type="text"
               />
           </FormGroup>
           <FormGroup controlId="newBatchQuality">
             <ControlLabel>Calidad</ControlLabel>
             <FormControl
               placeholder="Calidad"
               ref="batchQualityInput"
               type="text"
               />
           </FormGroup>
           <FormGroup controlId="newBatchFansub">
             <ControlLabel>Fansub</ControlLabel>
             <FormControl
               placeholder="Fansub"
               ref="batchFansubInput"
               type="text"
               />
           </FormGroup>
           <FormGroup controlId="newBatchMediaContainer">
             <ControlLabel>Carpeta</ControlLabel>
             <FormControl
               componentClass="select"
               placeholder="Carpeta"
               ref="batchMediaContainerInput"
             >
               {this.renderMediaContainersAsOptions()}
             </FormControl>
           </FormGroup>
           <Button type="submit">Crear batch</Button>
          </form>
        </Well>
      );
    }

    return newBatchForm;
  }

  render() {
    return (
      <Row>
        { this.renderBatchForm() }
      </Row>
    );
  }
}

export default createContainer(() => {
    return {
      currentUser: Meteor.user(),
      medias: Medias.find({}, { sort: { name: 1 } }).fetch(),
      mediaContainers: MediaContainers.find({}, { sort: { code: 1 } }).fetch(),
    }

}, BatchForm);
