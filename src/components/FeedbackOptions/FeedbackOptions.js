import PropTypes from 'prop-types';
import 'components/FeedbackOptions/FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Button-container">
      {options.map(item => (
        <button
          key={item}
          type="button"
          value={item}
          className={`Btn Btn-${item}`}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
