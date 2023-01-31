import PropTypes from 'prop-types';
import 'components/Notification/Notification.css';

export const Notification = ({ message }) => {
  return <p className="Feedback__text">{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.PropTypes.string.isRequired,
};
