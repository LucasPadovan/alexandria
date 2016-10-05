import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Route layouts
import { App } from '../../ui/layouts/App.jsx';

// Route pages
import { Index } from '../../ui/pages/index.jsx';
import { Medias } from '../../ui/pages/medias.jsx';
import { MediaContainers } from '../../ui/pages/mediacontainers.jsx';
import { Batchs } from '../../ui/pages/batchs.jsx';

// Base pages
import { NotFound } from '../../ui/pages/not-found.jsx'

Meteor.startup( () => {
  render (
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/medias" component={ Medias } />
        <Route path="/batchs" component={ Batchs } />
        <Route path="/mediacontainers" component={ MediaContainers } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('render-target')
  );
});
