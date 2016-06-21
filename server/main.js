import { Meteor } from 'meteor/meteor';

import injectTapEventPlugin from 'react-tap-event-plugin';

import '../imports/api/animes.js';
import '../imports/api/media_containers.js';

Meteor.startup(() => {
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();
});
