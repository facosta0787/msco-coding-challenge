import moment from 'moment';

export const dateFormat = created => {
  const date = new moment(created);
  return `${date.format('MMMM DD [/] YYYY')}`;
};

export const dateRelativeFormat = created => {
  const date = new moment(created);
  return `${date.fromNow()}`;
};
