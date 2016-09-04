import { Mongo } from 'meteor/mongo';

export const Medias = new Mongo.Collection('medias');

schema = new SimpleSchema({
  _id: {
    type: String,
    max: 200
  },
  name: {
    type: String,
    label: 'Name',
    max: 200
  },
  mediaType: {
      type: String,
      label: 'Type',
      max: 200
  },
  date: {
    type: String,
    label: 'Date of release',
    max: 200
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    max: 200
  },
  owner: {
    type: String,
    label: 'owner_id',
    max: 200
  },
  username:  {
    type: String,
    label: 'Username',
    max: 200
  }
});

Medias.schema = schema;
