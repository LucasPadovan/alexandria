import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import '../imports/api/medias.js';
import '../imports/api/batchs.js';
import '../imports/api/media_containers.js';

Meteor.startup(() => {
  injectTapEventPlugin();
});
