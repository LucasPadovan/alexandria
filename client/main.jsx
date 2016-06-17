import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '/public/css/react-bootstrap.css';
import '/public/css/overrides.css';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
