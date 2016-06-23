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
import { Medias } from '../api/medias.js';
import { Batchs } from '../api/batchs.js';
import { MediaContainers } from '../api/media_containers.js';

/**
 * Views section
 */
import Media from './Media.jsx';
import Batch from './Batch.jsx';
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
          isAValidObject = schema  .namedContext("newMedia").validate(newMedia);

    if (isAValidObject) {
        Medias.insert(newMedia);

        // Clear form. TODO: create a loop for this or a function.
        mediaNameInput.value = '';
        // mediaDateInput.value = moment();
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

    if (isAValidObject) {
        MediaContainers.insert(newMediaContainer);

        // Clear form. TODO: create a loop for this or a function.
        containerCapacityInput.value = '';
        containerCodeInput.value     = '';
    } else {
      //TODO: error handling
    }
  }

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
        qualityInput.value = '';
        fansubInput.value = '';
        routeInput.value = '';
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

  renderMedias() {
    let filteredMedias = this.props.medias;

    if (this.state.hideCompleted) {
      filteredMedias = filteredMedias.filter(media => !media.checked);
    }
    return filteredMedias.map((media) => (
      <Media key={media._id} media={media} />
    ));
  }

  renderMediasAsOptions() {
    let medias = this.props.medias;

    return medias.map((media) => (
      <option value={media._id}>{media.name}</option>
    ))
  }

  renderMediaContainers() {
    let filteredMediaContainers = this.props.mediaContainers;

    return filteredMediaContainers.map((mediaContainer) => (
      <MediaContainer key={mediaContainer._id} mediaContainer={mediaContainer} />
    ));
  }

  renderMediaContainersAsOptions() {
    let mediaContainers = this.props.mediaContainers;

    return mediaContainers.map((mediaContainer) => (
      <option value={mediaContainer._id}>
        {mediaContainer.container_type} - {mediaContainer.code}
      </option>
    ))
  }

  renderBatchs() {
    let filteredBatchs = this.props.batchs;

    return filteredBatchs.map((batch) => (
      <Batch key={batch._id} batch={batch} />
    ));
  }

  render() {
    var newMediaForm,
        newMediaContainerForm,
        newBatchForm;

    if (this.props.currentUser) {
      newMediaForm = <Well>
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
                             selected={this.state.startDate}
                           />
                         </FormGroup>
                         <Button type="submit">Crear media</Button>
                       </form>
                     </Well>;

      newMediaContainerForm = <Well>
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
                              </Well>;

      newBatchForm = <Well>
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
                     </Well>;
    }

    /**
    * Todo: sacar los l-mar-* de aca porque no sirven para pantallas chicas.
    */
    return (
      <div className="container">
        <PageHeader>
          Colección personal
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
                    Ocultar medias vistos
                  </label>
                </Col>
                <Col xs={12} md={2}>
                  <AccountsUIWrapper />
                </Col>
              </Row>

              <Row>
                {newMediaForm}
              </Row>

              <Row>
                <ListGroup>
                  {this.renderMedias()}
                </ListGroup>
              </Row>
            </Col>

            <Col xs={12} md={3} className="l-mar-left-1">
              <Row>
                <h4>Batchs</h4>
              </Row>
              <Row>
                {newBatchForm}
              </Row>
              <Row>
                <ListGroup>
                  {this.renderBatchs()}
                </ListGroup>
              </Row>
            </Col>

            <Col xs={12} md={3} className="l-mar-left-1">
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
  medias: PropTypes.array.isRequired,
  batchs: PropTypes.array.isRequired,
  mediaContainers: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    medias: Medias.find({}, { sort: { createdAt: -1 } }).fetch(),
    batchs: Batchs.find({}, { sort: { createdAt: -1 } }).fetch(),
    mediaContainers: MediaContainers.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Medias.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);
