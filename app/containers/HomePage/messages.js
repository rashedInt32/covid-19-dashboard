/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  overall: {
    id: `${scope}.TabWrapper`,
    defaultMessage: 'Overall',
  },
  today: {
    id: `${scope}.TabWrapper`,
    defaultMessage: 'Today',
  },
  yesterday: {
    id: `${scope}.TabWrapper`,
    defaultMessage: 'Yesterday',
  },
  confirm: {
    id: `${scope}.CardWrapper`,
    defaultMessage: 'Aggregated Confirmed',
  },
  active: {
    id: `${scope}.CardWrapper`,
    defaultMessage: 'Active Confirmed',
  },
  recovered: {
    id: `${scope}.CardWrapper`,
    defaultMessage: 'Recovered',
  },
  deaths: {
    id: `${scope}.CardWrapper`,
    defaultMessage: 'Deaths',
  },
});
