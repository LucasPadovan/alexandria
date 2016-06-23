import { Mongo } from 'meteor/mongo';

export const Batchs = new Mongo.Collection('batchs');

schema = new SimpleSchema({
  mediaId: {
    type: String,
    label: 'Media id',
    max: 200
  },
  size: {
    type: String,
    label: 'Size',
    max: 200
  },
  quality: {
    type: String,
    label: 'quality',
    max: 200
  },
  fansub: {
    type: String,
    label: 'Fansub',
    max: 200
  },
  mediaContainerId: {
    type: String,
    label: 'Media container id',
    max: 200
  },
  route: {
    type: String,
    label: 'route',
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

Batchs.schema = schema;
