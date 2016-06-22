import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';


/**
 * React section
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
 * APIs section
 */
import { Animes } from '../api/animes.js';
import { MediaContainers } from '../api/media_containers.js';

/**
 * Views section
 */
import Anime from './Anime.jsx';
import MediaContainer from './MediaContainer.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
// try to use moment
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      startDate: moment()
    };
  }

  handleAnimeSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref. TODO: create a loop for this.
    const animeNameInput = ReactDOM.findDOMNode(this.refs.animeNameInput),
          // animeDateInput = ReactDOM.findDOMNode(this.refs.animeDateInput), // datepicker component is not making a good ref setting. Hablar con el agustin sobre esto.
          name = animeNameInput.value.trim(),
          date = this.state.startDate.format('DD/MM/YYYY'),
          newAnime = {
            name,
            date,
            createdAt: new Date(),              // current time
            owner: Meteor.userId(),             // _id of logged in user
            username: Meteor.user().username,   // username of logged in user
          },
          schema = Animes.schema,
          isAValidObject = schema  .namedContext("newAnime").validate(newAnime);

    if (isAValidObject) {
        Animes.insert(newAnime);

        // Clear form. TODO: create a loop for this or a function.
        animeNameInput.value = '';
        animeDateInput.value = moment();
    } else {
      //TODO: error handling
    }
  }

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

    debugger;
    if (isAValidObject) {
        MediaContainers.insert(newMediaContainer);

        // Clear form. TODO: create a loop for this or a function.
        containerCapacityInput.value = '';
        containerCodeInput.value     = '';
        containerTypeInput.value     = '';
    } else {
      //TODO: error handling
    }
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }

  renderAnimes() {
    let filteredAnimes = this.props.animes;
    if (this.state.hideCompleted) {
      filteredAnimes = filteredAnimes.filter(anime => !anime.checked);
    }
    return filteredAnimes.map((anime) => (
      <Anime key={anime._id} anime={anime} />
    ));
  }

  renderMediaContainers() {
    let filteredMediaContainers = this.props.mediaContainers;

    return filteredMediaContainers.map((mediaContainer) => (
      <MediaContainer key={mediaContainer._id} mediaContainer={mediaContainer} />
    ));
  }

  render() {
    var newAnimeForm,
        newMediaContainerForm;

    if (this.props.currentUser) {
      newAnimeForm = <Well>
                       <form onSubmit={this.handleAnimeSubmit.bind(this)}>
                         <FormGroup controlId="newAnimeName">
                           <ControlLabel>Nombre del anime</ControlLabel>
                           <FormControl
                             type="text"
                             ref="animeNameInput"
                             placeholder="Ingresa el nombre del anime"
                           />
                         </FormGroup>
                         <FormGroup controlId="newAnimeYear">
                           <ControlLabel>Año del anime</ControlLabel>
                           <DatePicker
                             className="form-control"
                             ref="animeDateInput"
                             selected={this.state.startDate}
                             onChange={this.handleDateChange.bind(this)} />
                         </FormGroup>
                         <Button type="submit">Crear anime</Button>
                       </form>
                     </Well>;

      newMediaContainerForm = <Well>
                                <form onSubmit={this.handleMediaContainerSubmit.bind(this)}>
                                  <FormGroup controlId="newContainerType">
                                    <ControlLabel>Tipo de contenedor</ControlLabel>
                                    <FormControl
                                      componentClass="select"
                                      placeholder="Tipo de contenedor"
                                      ref="containerTypeInput"
                                    >
                                      <option value="Folder">Carpeta</option>
                                      <option value="Disk">Disco</option>
                                    </FormControl>
                                  </FormGroup>
                                  <FormGroup controlId="newContainerCode">
                                    <ControlLabel>Codigo</ControlLabel>
                                    <FormControl
                                      type="text"
                                      ref="containerCodeInput"
                                      placeholder="Código del contenedor"
                                    />
                                  </FormGroup>
                                  <FormGroup controlId="newContainerCapacity">
                                    <ControlLabel>Capacidad</ControlLabel>
                                    <FormControl
                                      type="text"
                                      ref="containerCapacityInput"
                                      placeholder="Capacidad del contenedor"
                                    />
                                  </FormGroup>
                                  <Button type="submit">Crear contenedor</Button>
                                </form>
                              </Well>;
    }


    /**
    * Todo: sacar los l-mar-* de aca porque no sirven para pantallas chicas.
    */
    return (
      <div className="container">
        <PageHeader>
          Lista de animes
        </PageHeader>

        <Grid>
          <Row>
            <Col xs={12} md={5} className="l-mar-right-1">
              <Row>
                <Col xs={12} md={5}>
                  <h4>Por ver: {this.props.incompleteCount}</h4>
                </Col>
                <Col xs={12} md={5}>
                  <label className="hide-completed">
                    <input
                      type="checkbox"
                      readOnly
                      checked={this.state.hideCompleted}
                      onClick={this.toggleHideCompleted.bind(this)}
                      />
                    Ocultar animes vistos
                  </label>
                </Col>
                <Col xs={12} md={2}>
                  <AccountsUIWrapper />
                </Col>
              </Row>

              <Row>
                {newAnimeForm}
              </Row>

              <Row>
                <ListGroup>
                  {this.renderAnimes()}
                </ListGroup>
              </Row>
            </Col>

            <Col xs={12} md={5} className="l-mar-left-1">
              <Row>
                <h4>Carpetas</h4>
              </Row>

              <Row>
                {newMediaContainerForm}
              </Row>

              <Row>
                <ListGroup>
                  {this.renderMediaContainers()}
                </ListGroup>
              </Row>
            </Col>
          </Row>
        </Grid>


      </div>
    );
  }
}

App.propTypes = {
  animes: PropTypes.array.isRequired,
  mediaContainers: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    animes: Animes.find({}, { sort: { createdAt: -1 } }).fetch(),
    mediaContainers: MediaContainers.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Animes.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);
