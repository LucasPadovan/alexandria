import { Mongo } from 'meteor/mongo';

export const MediaContainers = new Mongo.Collection('media_containers');

schema = new SimpleSchema({
  container_type: {
    type: String,
    label: 'Container Type',
    max: 200
  },
  external_id: {
    type: String,
    label: 'External Identificator',
    max: 200
  },
  capacity: {
    type: String,
    label: 'Capacity',
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

MediaContainers.schema = schema;
