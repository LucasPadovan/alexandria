import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


/**
 * React-bootstrap section
 */
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
import MediaContainer from './MediaContainer.jsx';

/**
 * APIs section
 */
import { MediaContainers } from '../../../api/media_containers.js';

/**
 * Security section
 */
import { Permissions } from '../../../startup/permissions.js';


class MediaContainerForm extends Component {
  handleMediaContainerSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref. TODO: create a loop for this.
    const containerTypeInput     = ReactDOM.findDOMNode(this.refs.containerTypeInput),
          containerCodeInput     = ReactDOM.findDOMNode(this.refs.containerCodeInput),
          containerCapacityInput = ReactDOM.findDOMNode(this.refs.containerCapacityInput),
          container_type         = containerTypeInput.value.trim(),
          code                   = containerCodeInput.value.trim(),
          capacity               = containerCapacityInput.value.trim(),
          newMediaContainer      = {
            container_type,
            code,
            capacity,
            createdAt: new Date(),              // current time
            owner: Meteor.userId(),             // _id of logged in user
            username: Meteor.user().username,   // username of logged in user
          },
          schema                 = MediaContainers.schema,
          isAValidObject         = schema.namedContext("newMediaContainer").validate(newMediaContainer);

    if (isAValidObject) {
        MediaContainers.insert(newMediaContainer);

        // Clear form. TODO: create a loop for this or a function.
        containerCapacityInput.value = '';
        containerCodeInput.value     = '';
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

  renderMediaContainerForm() {
    var newMediaContainerForm = '';

    if (this.userCanEdit()) {
      newMediaContainerForm = (
        <Well>
          <form onSubmit={this.handleMediaContainerSubmit.bind(this)}>
            <FormGroup controlId="newContainerType">
              <ControlLabel>Tipo de carpeta</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="Tipo de carpeta"
                ref="containerTypeInput"
              >
                <option value="Carpeta">Carpeta</option>
                <option value="Disco">Disco</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="newContainerCode">
              <ControlLabel>Codigo</ControlLabel>
              <FormControl
                placeholder="Código de carpeta"
                ref="containerCodeInput"
                type="text"
              />
            </FormGroup>
            <FormGroup controlId="newContainerCapacity">
              <ControlLabel>Capacidad</ControlLabel>
              <FormControl
                placeholder="Capacidad de carpeta"
                ref="containerCapacityInput"
                type="text"
              />
            </FormGroup>
            <Button type="submit">Crear carpeta</Button>
          </form>
        </Well>
      );
    }

    return newMediaContainerForm;
  }

  render() {
    return (
      <Row>
        { this.renderMediaContainerForm() }
      </Row>
    );
  }
}

export default createContainer(() => {
    return {
        currentUser: Meteor.user()
    }

}, MediaContainerForm);
