import { Mongo } from 'meteor/mongo';

export const Animes = new Mongo.Collection('animes');

schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
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

Animes.schema = schema;
