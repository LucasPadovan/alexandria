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

/**
 * Views section
 */
import Anime from './Anime.jsx';
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

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const animeNameInput = ReactDOM.findDOMNode(this.refs.animeName),
          text = animeNameInput.value.trim();

    Animes.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });

    // Clear form
    animeNameInput.value = '';
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

  render() {
    var newAnimeForm;

    if (this.props.currentUser) {
      newAnimeForm = <Well>
                       <form onSubmit={this.handleSubmit.bind(this)}>
                         <FormGroup controlId="newAnimeName">
                           <ControlLabel>Nombre del anime</ControlLabel>
                           <FormControl
                             type="text"
                             ref="animeName"
                             placeholder="Ingresa el nombre del anime"
                           />
                         </FormGroup>
                         <FormGroup controlId="newAnimeYear">
                           <ControlLabel>Año del anime</ControlLabel>
                           <DatePicker
                             className="form-control"
                             selected={this.state.startDate}
                             onChange={this.handleDateChange.bind(this)} />
                         </FormGroup>

                       </form>
                     </Well>;
    }


    return (
      <div className="container">
        <PageHeader>
          Lista de animes
        </PageHeader>

        <Grid>
          <Row>
            <Col xs={12} md={5}>
              <h4>Por ver: {this.props.incompleteCount}</h4>
            </Col>
            <Col xs={12} md={6}>
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
            <Col xs={12} md={1}>
              <AccountsUIWrapper />
            </Col>
          </Row>
        </Grid>

        {newAnimeForm}

        <ListGroup>
          {this.renderAnimes()}
        </ListGroup>
      </div>
    );
  }
}

App.propTypes = {
  animes: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    animes: Animes.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Animes.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);
