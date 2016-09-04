import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import { Medias } from '../api/medias.js';
import { Batchs } from '../api/batchs.js';
import { MediaContainers } from '../api/media_containers.js';

import {
  Button,
  Col,
  Glyphicon
} from 'react-bootstrap';

export default class Backup extends Component {

  getMedias() {
    return (
      [
        {
          "_id": "ygq7qxDTBDskk3N6v",
          "name": "007 Quantum Solace",
          "mediaType": "Pelicula",
          "date": "30/06/2016",
          "createdAt": "2016-07-01T02:55:10.142Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas",
          "checked": false
        },
        {
          "_id": "y8xSYnQbFirytGANS",
          "name": "Asu No Yoichi",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:41:07.825Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Mx62EMJtF7dNiBCP5",
          "name": "BT'X",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:34:54.175Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "qrcwSZNCzZvT9YQrt",
          "name": "Ben 10: El Secreto del Omnitrix",
          "mediaType": "Serie",
          "date": "30/06/2016",
          "createdAt": "2016-07-01T02:49:29.836Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "yp844ymZBWzfLEN9g",
          "name": "Bleach",
          "mediaType": "Anime",
          "date": "22/06/2000",
          "createdAt": "2016-06-23T02:36:38.349Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas",
          "batchState": "hide"
        },
        {
          "_id": "pEv9cBqfXFe8xbmvW",
          "name": "Code Geass R2",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:40:26.063Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "EPzZbzZbajWvPMJBY",
          "name": "Detective Conan",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:19:10.508Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "5vKhSbJfLsAxDdZRt",
          "name": "Detective Conan: Drama 1",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:28:13.595Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Pq5rdyaTfcMDKe5KM",
          "name": "Detective Conan: Drama 2",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:28:18.277Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "RoXcaiPiEFxyR8Pdw",
          "name": "Detective Conan: Movie 1",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:27:50.462Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "TkMxuvMHGLoXqXxdC",
          "name": "Detective Conan: Movie 2",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:28:03.216Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "E82edimjpTeEMbBpt",
          "name": "Detective Conan: Movie 3",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:28:05.975Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "SNoDWsFC8BCPC3oWx",
          "name": "Detective Conan: Movie 4",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:28:09.198Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "BzctvLe2LtxwYmLq4",
          "name": "Dragon Ball Z",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:08:10.760Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "riHisCNXZYh298pkW",
          "name": "Dragon Ball Z: Barduck, el padre de Goku",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:18:25.309Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Pa6QMbEhmQwKp9ftr",
          "name": "Evangelion",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:41:49.439Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "hfvieh2WxuhQEHsDz",
          "name": "Evangelion: 1rst movie",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:41:44.006Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "3e8n3EuziSDe6zpsw",
          "name": "Final Fantasy VII: Denzel Episode",
          "mediaType": "Pelicula",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:07:42.267Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Ck8ctBedF4qci2R4A",
          "name": "Final Fantasy VII: Last Order",
          "mediaType": "Pelicula",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:07:10.103Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "PMHXek7S6i5p8ZTpi",
          "name": "Los Simpsons",
          "mediaType": "Serie",
          "date": "04/06/2016",
          "createdAt": "2016-06-23T02:50:20.793Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas",
          "batchState": "",
          "checked": false
        },
        {
          "_id": "MCfWeEiXQtopkYdnQ",
          "name": "Max Paine",
          "mediaType": "Pelicula",
          "date": "30/06/2016",
          "createdAt": "2016-07-01T02:55:18.424Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "D7kJpfwNhriDNMmKs",
          "name": "One Piece",
          "mediaType": "Anime",
          "date": "22/06/1999",
          "createdAt": "2016-06-23T02:38:08.985Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "WjqJacWcsJadbgTyz",
          "name": "Samurai Warriors",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:34:19.630Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "D2KKpdr7FchkmbqCC",
          "name": "Slayers Evolution R",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:41:18.788Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "ofTfArfSdH2tLSdQb",
          "name": "Slayers Revolution",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:40:58.926Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "XorqZpAd7zJN4jaEm",
          "name": "Soul Eater",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:41:25.833Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "b8RPd4wXdBBvkSEtR",
          "name": "Yu-Gi-Oh!",
          "mediaType": "Anime",
          "date": "01/07/2016",
          "createdAt": "2016-07-01T03:40:38.476Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        }
      ]
    )
  }

  getBatchs() {
    return (
      [
        {
          "_id": "GgTSyeb3NYbYEv8Wm",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "136",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p8-3",
          "createdAt": "2016-07-01T03:51:32.608Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "oLXz5HQvNGYtaHzCT",
          "mediaId": "hfvieh2WxuhQEHsDz",
          "size": "VCD-2",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p20-4",
          "createdAt": "2016-07-01T03:47:28.649Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "s8eyGojSsEZr6SyLY",
          "mediaId": "hfvieh2WxuhQEHsDz",
          "size": "VCD-1",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p20-3",
          "createdAt": "2016-07-01T03:47:21.156Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Acm3BayHNi4rzR4Gy",
          "mediaId": "XorqZpAd7zJN4jaEm",
          "size": "DVD-2",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p20-2",
          "createdAt": "2016-07-01T03:46:59.242Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "q4gPYqKeBTSz4HTKR",
          "mediaId": "XorqZpAd7zJN4jaEm",
          "size": "DVD-1",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p20-1",
          "createdAt": "2016-07-01T03:46:54.030Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "2k2megsCtT4cCmiWX",
          "mediaId": "y8xSYnQbFirytGANS",
          "size": "DVD-1",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p19-4",
          "createdAt": "2016-07-01T03:46:22.262Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "zTheg8Zr7RYCtr3S7",
          "mediaId": "D2KKpdr7FchkmbqCC",
          "size": "DVD-1",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p19-4",
          "createdAt": "2016-07-01T03:46:15.726Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "LkgM6CwusyXqBeSCw",
          "mediaId": "ofTfArfSdH2tLSdQb",
          "size": "DVD-1",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p19-3",
          "createdAt": "2016-07-01T03:46:05.715Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "cM9x9McxBiYtkm9zf",
          "mediaId": "b8RPd4wXdBBvkSEtR",
          "size": "DVD-8",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p19-3",
          "createdAt": "2016-07-01T03:45:49.368Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "ZfX3nor4dFQ3JQcjQ",
          "mediaId": "b8RPd4wXdBBvkSEtR",
          "size": "DVD-7",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p19-2",
          "createdAt": "2016-07-01T03:45:29.695Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "DNLpv9W7a7exrXov8",
          "mediaId": "b8RPd4wXdBBvkSEtR",
          "size": "DVD-6",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p19-1",
          "createdAt": "2016-07-01T03:45:20.822Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "SeCpGS44PsdgGhj4T",
          "mediaId": "b8RPd4wXdBBvkSEtR",
          "size": "DVD-5",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p18-4",
          "createdAt": "2016-07-01T03:45:11.959Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "mZnyACTGjyYpYkmtJ",
          "mediaId": "b8RPd4wXdBBvkSEtR",
          "size": "DVD-4",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p18-3",
          "createdAt": "2016-07-01T03:44:59.242Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "YGRe3xuFaG6ugZuWK",
          "mediaId": "b8RPd4wXdBBvkSEtR",
          "size": "DVD-3",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p18-2",
          "createdAt": "2016-07-01T03:44:50.227Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "ZQwCpDo9hCuhe7Deh",
          "mediaId": "b8RPd4wXdBBvkSEtR",
          "size": "DVD-2",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p18-1",
          "createdAt": "2016-07-01T03:44:02.728Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "ktz7KzR6yAXN9WMqe",
          "mediaId": "pEv9cBqfXFe8xbmvW",
          "size": "DVD-1",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p17-3",
          "createdAt": "2016-07-01T03:43:49.209Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "JXcbSf82zWoCdyX5i",
          "mediaId": "b8RPd4wXdBBvkSEtR",
          "size": "DVD-1",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p17-4",
          "createdAt": "2016-07-01T03:42:43.118Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "pB6EDp9HT2GNMqNzW",
          "mediaId": "Mx62EMJtF7dNiBCP5",
          "size": "DVD-1",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p17-2",
          "createdAt": "2016-07-01T03:35:08.188Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "RfLmdTQ4y5PeMd8va",
          "mediaId": "WjqJacWcsJadbgTyz",
          "size": "DVD-2",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p17-2",
          "createdAt": "2016-07-01T03:34:44.501Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "iGf5tEaoy8drgR93Q",
          "mediaId": "WjqJacWcsJadbgTyz",
          "size": "DVD-1",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p17-1",
          "createdAt": "2016-07-01T03:34:35.768Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "ea7ji6Jq7LkfK3vcY",
          "mediaId": "Pq5rdyaTfcMDKe5KM",
          "size": "1",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-4",
          "createdAt": "2016-07-01T03:31:57.640Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "K2oSggjs5bztZLSkP",
          "mediaId": "5vKhSbJfLsAxDdZRt",
          "size": "1",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-4",
          "createdAt": "2016-07-01T03:31:53.853Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "SpYPYFd2GcsguQB2F",
          "mediaId": "SNoDWsFC8BCPC3oWx",
          "size": "1",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-4",
          "createdAt": "2016-07-01T03:31:50.093Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "BX3cRTtuAmy3L2rAz",
          "mediaId": "E82edimjpTeEMbBpt",
          "size": "1",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-4",
          "createdAt": "2016-07-01T03:31:43.303Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "uC6ez3amWjZf5SAMv",
          "mediaId": "TkMxuvMHGLoXqXxdC",
          "size": "1",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-4",
          "createdAt": "2016-07-01T03:31:38.618Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "9vkrFozzuScAgEkHr",
          "mediaId": "RoXcaiPiEFxyR8Pdw",
          "size": "1",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-4",
          "createdAt": "2016-07-01T03:28:30.018Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "z7DFjFtRu2nAqsZhN",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-23",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-3",
          "createdAt": "2016-07-01T03:27:36.902Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "wH3urbbjyhgGAghdC",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-22",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-2",
          "createdAt": "2016-07-01T03:27:10.558Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "M5wWLi7oHaP58ENPK",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-21",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p16-1",
          "createdAt": "2016-07-01T03:27:03.352Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "P8ESCSbn4EELtEcCz",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-20",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p15-4",
          "createdAt": "2016-07-01T03:26:57.501Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Qszox6EDcrENQnDyc",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-19",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p15-3",
          "createdAt": "2016-07-01T03:26:51.285Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "gD3xjqW45tt9TtWnc",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-18",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p15-2",
          "createdAt": "2016-07-01T03:26:42.091Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Z33NEaX33mcjf9hzT",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-17",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p15-1",
          "createdAt": "2016-07-01T03:26:35.346Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "R2wbymWsRy6suJSq6",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-16",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p14-4",
          "createdAt": "2016-07-01T03:26:03.217Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "n5dC3Q5NJDiwSAiGQ",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-15",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p14-3",
          "createdAt": "2016-07-01T03:25:51.948Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "NGFXEuJXpG7FyapSz",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-14",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p14-2",
          "createdAt": "2016-07-01T03:25:40.881Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "A2WPk9JhqhG5W9d78",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-13",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p14-1",
          "createdAt": "2016-07-01T03:25:35.551Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "yixLALqxu6id7XYWR",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-12",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p13-4",
          "createdAt": "2016-07-01T03:25:25.721Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "3hYkzzRhmjmc4gDbQ",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-11",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p13-3",
          "createdAt": "2016-07-01T03:25:15.045Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "QF7qnnLMFFEvq3M3G",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-10",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p13-2",
          "createdAt": "2016-07-01T03:24:47.406Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "TzJ5k3cLL5QiZF28c",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-9",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p13-1",
          "createdAt": "2016-07-01T03:24:41.647Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "w5ExhpWC5vYgxeK2L",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-8",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p12-4",
          "createdAt": "2016-07-01T03:24:25.080Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "tc93Qk5A2aapSqQMg",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-7",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p12-3",
          "createdAt": "2016-07-01T03:24:16.031Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "JoQJwQ2N8DGAudLSf",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-6",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p12-2",
          "createdAt": "2016-07-01T03:23:55.870Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "RvkdSXZjbzZJXvupo",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-5",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p12-1",
          "createdAt": "2016-07-01T03:23:48.113Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Ate34w3Cus4S9N2t6",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-4",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p11-4",
          "createdAt": "2016-07-01T03:23:41.041Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "JwT9LgfL4mDrgyg2Z",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-3",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p11-3",
          "createdAt": "2016-07-01T03:23:18.639Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "69iueGeuWC3ZL24vu",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "DVD-2",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p11-2",
          "createdAt": "2016-07-01T03:23:06.907Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "QbLuWKfkv6KsHWNho",
          "mediaId": "EPzZbzZbajWvPMJBY",
          "size": "1-24",
          "quality": "Baja",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p11-1",
          "createdAt": "2016-07-01T03:22:35.249Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "sN3Ad5ui4XAdxhhAn",
          "mediaId": "riHisCNXZYh298pkW",
          "size": "1",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p10-4",
          "createdAt": "2016-07-01T03:18:39.422Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "DsyDMDwNddm9vXo7P",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "283-291",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p10-4",
          "createdAt": "2016-07-01T03:18:03.564Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "Cahks2nwZRxPkCxgh",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "260-282",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p10-3",
          "createdAt": "2016-07-01T03:17:38.918Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "pvfoAYKy8apZi7DZX",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "243-259",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p10-2",
          "createdAt": "2016-07-01T03:17:27.160Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "mcuj2Q58WF9FpCjoH",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "227-242",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p10-1",
          "createdAt": "2016-07-01T03:17:17.286Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "2XPxvpeNTNijcashT",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "210-226",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p9-4",
          "createdAt": "2016-07-01T03:17:05.517Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "LfhSPusQpL7rSooSz",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "193-209",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p9-3",
          "createdAt": "2016-07-01T03:15:48.005Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "43LYgzR9anEijNMY7",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "176-192",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p9-2",
          "createdAt": "2016-07-01T03:15:31.560Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "qqThsBqSBk2xu9XQC",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "159-175",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p9-1",
          "createdAt": "2016-07-01T03:15:19.020Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "N2RatuioCTdngwNk7",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "141-158",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p8-4",
          "createdAt": "2016-07-01T03:15:02.358Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "8ziRMaoTM6WKNLSPN",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "122-140",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p8-2",
          "createdAt": "2016-07-01T03:09:09.712Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "LofBN84hDMYGfW7Br",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "106-121",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p8-1",
          "createdAt": "2016-07-01T03:08:51.270Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "x3JwEANxA5ByatjwC",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "88-105",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-4",
          "createdAt": "2016-07-01T03:08:41.983Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "xKBrSN5bisus6vaCA",
          "mediaId": "BzctvLe2LtxwYmLq4",
          "size": "70-87",
          "quality": "Media",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-3",
          "createdAt": "2016-07-01T03:08:27.815Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "ds9YvSZw7kwtq8FZ8",
          "mediaId": "3e8n3EuziSDe6zpsw",
          "size": "1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-2",
          "createdAt": "2016-07-01T03:07:54.673Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "3niDtnuPYJRZBZHvW",
          "mediaId": "Ck8ctBedF4qci2R4A",
          "size": "1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-2",
          "createdAt": "2016-07-01T03:07:20.048Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "eqsADjpQjcvLaqjkM",
          "mediaId": "MCfWeEiXQtopkYdnQ",
          "size": "1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-1",
          "createdAt": "2016-07-01T03:06:45.393Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "2D36KH7dKvDrE5BYr",
          "mediaId": "ygq7qxDTBDskk3N6v",
          "size": "1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-1",
          "createdAt": "2016-07-01T03:06:34.549Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "n7Wsk2ySn37XGkCNM",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 20",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-2",
          "createdAt": "2016-07-01T02:54:50.106Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "kNqT4nPY6EM7Xp4YE",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 20",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-2",
          "createdAt": "2016-07-01T02:51:00.900Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "mnEZHKnWYiN9692Nt",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 19",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p7-1",
          "createdAt": "2016-07-01T02:50:52.222Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "bsohG4x9fNXcYXxdR",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 18",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p6-4",
          "createdAt": "2016-07-01T02:50:11.254Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "feMAXvqJ3r987dgZB",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 17",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p6-3",
          "createdAt": "2016-07-01T02:50:06.100Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "5ZgtWLBGQaJwPgraL",
          "mediaId": "qrcwSZNCzZvT9YQrt",
          "size": "1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p6-1",
          "createdAt": "2016-07-01T02:49:54.414Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "ht5De35hgx6Ewfe4W",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 16",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p6-2",
          "createdAt": "2016-07-01T02:49:06.662Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "JiAT7QnvsmQqX8Zok",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 15",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p6-1",
          "createdAt": "2016-07-01T02:48:58.082Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "DoxHX8TvtDqX3gqjX",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 14",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p5-4",
          "createdAt": "2016-07-01T02:48:19.512Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "CnJXcsyBGCxZAzkJq",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 13",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p5-3",
          "createdAt": "2016-07-01T02:48:12.972Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "fu74cFe3L3XgGfy5a",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 12",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p5-2",
          "createdAt": "2016-07-01T02:48:01.184Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "FYrXGznrLNqzDSN8Y",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 11",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p5-1",
          "createdAt": "2016-07-01T02:47:51.001Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "wZiGJpMzXjPv3fGtm",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 10",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p4-4",
          "createdAt": "2016-07-01T02:47:24.504Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "GHES7mC4y7FjXm3hZ",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 9 - 1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p4-2",
          "createdAt": "2016-07-01T02:32:20.105Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "HLLdTjryn6QRymB9Q",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 8 - 2",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p4-1",
          "createdAt": "2016-06-27T23:56:08.222Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "BSXEam7x7Yd4vD53A",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 8 - 1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p3-4",
          "createdAt": "2016-06-23T03:17:34.754Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "rmDWEpvLhGzFnii9a",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 7",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p3-3",
          "createdAt": "2016-06-23T03:17:22.171Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "YpJyMi82jsdaiz3g3",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 6",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p3-2",
          "createdAt": "2016-06-23T03:17:13.611Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "T25bCznFcTqBmnhuT",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 5",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p3-1",
          "createdAt": "2016-06-23T03:16:49.822Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "zS4jgJbCLD6GcCnoY",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 4 - 2",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p2-4",
          "createdAt": "2016-06-23T03:15:05.725Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "JDm9oEDujFd8Kewjg",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 4 - 1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p2-3",
          "createdAt": "2016-06-23T03:14:58.916Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "nX9zEhj5B4zRHqCbT",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 3",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p2-2",
          "createdAt": "2016-06-23T03:13:56.520Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "5mMxbMovLDiKZ93w5",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 2 - 2",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p2-1",
          "createdAt": "2016-06-23T03:13:46.025Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "N2ao3DhfxYSMi7DDH",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 2 -1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p1-4",
          "createdAt": "2016-06-23T03:13:01.960Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "5acLn9ksNRq3pWBt6",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 1 - 3",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p1-3",
          "createdAt": "2016-06-23T03:11:50.611Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "GYs6C7LFQAGtNQy8G",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 1 - 2",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p1-2",
          "createdAt": "2016-06-23T03:11:41.986Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "SAAkrbo53pez8eZMM",
          "mediaId": "PMHXek7S6i5p8ZTpi",
          "size": "Temporada 1 - 1",
          "quality": "",
          "fansub": "",
          "mediaContainerId": "4P7e8x2YjmzMFQJjS",
          "route": "p1-1",
          "createdAt": "2016-06-23T03:11:28.899Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        }
      ]
    )
  }

  getMediaContainers() {
    return (
      [
        {
          "_id": "4P7e8x2YjmzMFQJjS",
          "container_type": "Carpeta",
          "code": "1",
          "capacity": "80 discos",
          "createdAt": "2016-06-23T02:44:25.622Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "7LZeo4JntrYLjuu7u",
          "container_type": "Carpeta",
          "code": "2",
          "capacity": "80 discos",
          "createdAt": "2016-06-23T02:54:09.998Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        },
        {
          "_id": "JucSr9kGN6S6rF9aw",
          "container_type": "Carpeta",
          "code": "3",
          "capacity": "80",
          "createdAt": "2016-06-26T18:40:21.139Z",
          "owner": "cFDfySDSjzhNR9z5Y",
          "username": "Lucas"
        }
      ]
    )
  }

  insertBatch(batchBackup) {
    const mediaId = batchBackup['mediaId'],
          size = batchBackup['size'],
          quality = batchBackup['quality'],
          fansub = batchBackup['fansub'],
          mediaContainerId = batchBackup['mediaContainerId'],
          route = batchBackup['route'],
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
    }
  }

  insertMedia(mediaBackup) {
    const _id = mediaBackup['_id'],
          name = mediaBackup['name'],
          mediaType = mediaBackup['mediaType'],
          date = mediaBackup['date'],
          newMedia = {
            _id,
            name,
            mediaType,
            date,
            createdAt: new Date(),              // current time
            owner: Meteor.userId(),             // _id of logged in user
            username: Meteor.user().username,   // username of logged in user
          },
          schema = Medias.schema,
          isAValidObject = schema.namedContext("newMedia").validate(newMedia);

    if (isAValidObject) {
      Medias.insert(newMedia);
    }
  }

  insertMediaContainer(mediaContainerBackup) {
    const _id = mediaContainerBackup['_id'],
          container_type = mediaContainerBackup['container_type'],
          code = mediaContainerBackup['code'],
          capacity = mediaContainerBackup['capacity'],
          newMediaContainer = {
            _id,
            container_type,
            code,
            capacity,
            createdAt: new Date(),              // current time
            owner: Meteor.userId(),             // _id of logged in user
            username: Meteor.user().username,   // username of logged in user
          },
          schema = MediaContainers.schema,
          isAValidObject = schema.namedContext("newMediaContainer").validate(newMediaContainer);

    if (isAValidObject) {
      MediaContainers.insert(newMediaContainer);
    }
  }

  loadBackup() {
    var batchs = this.getBatchs(),
        medias = this.getMedias(),
        mediaContainers = this.getMediaContainers();

    for(var i=0, mediaContainerBackup; mediaContainerBackup = mediaContainers[i]; i++) {
      this.insertMediaContainer(mediaContainerBackup);
    }

    for(var i=0, mediaBackup; mediaBackup = medias[i]; i++) {
      this.insertMedia(mediaBackup);
    }

    for(var i=0, batchBackup; batchBackup = batchs[i]; i++) {
      this.insertBatch(batchBackup);
    }
  }


  render() {
    return (
      <Button bsStyle="success" bsSize="small" className="move-right-1 z-index-1" onClick={this.loadBackup.bind(this)}>
        <Glyphicon glyph="upload" /> Cargar backup
      </Button>
    );
  }
}
