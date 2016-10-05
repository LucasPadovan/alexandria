import React from 'react';

import { MediaContainerForm } from '../components/media_containers/Form.jsx';
import MediaContainerList from '../components/media_containers/List.jsx';


export const MediaContainers = () => (
  <div>
    <h2 class="l-pad-top-1">Lista de carpetas</h2>

    <MediaContainerForm />

    <div class="l-pad-top-1"><MediaContainerList /></div>
  </div>
)
