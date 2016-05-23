import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Animes } from '../api/animes.js';

import Anime from './Anime.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// React stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// /React stuff

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Animes.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
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
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Anime List"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <header>
            <h3>
              Vistos: {this.props.incompleteCount}
              <label className="hide-completed">
                <input
                  type="checkbox"
                  readOnly
                  checked={this.state.hideCompleted}
                  onClick={this.toggleHideCompleted.bind(this)}
                />
                Ocultar animes vistos
              </label>
            </h3>

            <AccountsUIWrapper />

            { this.props.currentUser ?
              <form className="new-anime" onSubmit={this.handleSubmit.bind(this)} >
                <input
                  type="text"
                  ref="textInput"
                  placeholder="Type to add new animes"
                />
              </form> : ''
            }
          </header>

          <ul>
            {this.renderAnimes()}
          </ul>
        </div>
      </MuiThemeProvider>
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
