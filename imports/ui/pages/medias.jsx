import React from 'react';

import { MediaForm } from '../components/medias/Form.jsx';
import MediaList from '../components/medias/List.jsx';


export const Medias = () => (
  <div>
    <h2 class="l-pad-top-1">Lista de series, animes, peliculas y juegos</h2>

    <MediaForm />

    <div class="l-pad-top-1"><MediaList /></div>
  </div>
)
