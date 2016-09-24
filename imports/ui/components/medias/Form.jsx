import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';


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
import Media from './Media.jsx';

/**
 * APIs section
 */
import { Medias } from '../../../api/medias.js';

/**
 * Security section
 */
import { Permissions } from '../../../startup/permissions.js';


export class MediaForm extends Component {
  constructor(props) {
    super(props);

    this.props.currentUser = Meteor.user();
    this.props.startDate = moment();
  }

  handleMediaSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref. TODO: create a loop for this.
    const mediaNameInput = ReactDOM.findDOMNode(this.refs.mediaNameInput),
          mediaTypeInput = ReactDOM.findDOMNode(this.refs.mediaTypeInput),
          name = mediaNameInput.value.trim(),
          mediaType = mediaTypeInput.value.trim(),
          date = this.state.startDate.format('DD/MM/YYYY'),
          newMedia = {
            name,
            mediaType,
            date,
            createdAt: new Date(),              // current time
            owner: Meteor.userId(),             // _id of logged in user
            username: Meteor.user().username,   // username of logged in user
          },
          schema = Medias.schema,
          isAValidObject = schema.namedContext("newMedia").validate(newMedia);

    if (isAValidObject) {
        Medias.insert(newMedia);

        // Clear form. TODO: create a loop for this or a function.
        mediaNameInput.value = '';
        // mediaDateInput.value = moment();
    } else {
      //TODO: error handling
    }
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  /**
   * Security methods
   */
  userCanEdit() {
    // return this.state.currentUser && Permissions.manage.includes(this.state.currentUser.username);
    return true;
  }

  renderMediaForm() {
    var newMediaForm = '';

    if (this.userCanEdit()) {
      newMediaForm = (
        <Well>
          <form onSubmit={this.handleMediaSubmit.bind(this)}>
           <FormGroup controlId="newMediaName">
             <ControlLabel>Nombre del item</ControlLabel>
             <FormControl
               placeholder="Ingresa el nombre del item"
               ref="mediaNameInput"
               type="text"
             />
           </FormGroup>
           <FormGroup controlId="newMediaType">
             <ControlLabel>Tipo de media</ControlLabel>
             <FormControl
               componentClass="select"
               placeholder="Tipo de media"
               ref="mediaTypeInput"
             >
               <option value="Anime">Anime</option>
               <option value="Comic">Comic</option>
               <option value="Juego">Juego</option>
               <option value="Manga">Manga</option>
               <option value="Musica">Música</option>
               <option value="Pelicula">Pelicula</option>
               <option value="Serie">Serie</option>
             </FormControl>
           </FormGroup>
           <FormGroup controlId="newMediaYear">
             <ControlLabel>Año del media</ControlLabel>
             <DatePicker
               className="form-control"
               onChange={this.handleDateChange.bind(this)}
               ref="mediaDateInput"
               selected={this.props.startDate}
             />
           </FormGroup>
           <Button type="submit">Crear media</Button>
          </form>
        </Well>
      );
    }

    return newMediaForm;
  }

  render() {
    return (
      <Row>
        { this.renderMediaForm() }
      </Row>
    );
  }
}
