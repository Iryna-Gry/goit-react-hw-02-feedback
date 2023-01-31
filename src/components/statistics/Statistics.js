import PropTypes from 'prop-types';
import './Statistics.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <ul className="Stats__list">
      <li className="Stats__item">
        Good:<span>{good}</span>
      </li>
      <li className="Stats__item">
        Neutral:<span>{neutral}</span>
      </li>
      <li className="Stats__item">
        Bad:<span>{bad}</span>
      </li>
      <li className="Stats__item">
        Total:<span>{total}</span>
      </li>
      <li className="Stats__item">
        Positive Feedback:<span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
