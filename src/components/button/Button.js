import 'components/button/Button.css';

export const FeedbackOptions = ({ value, onLeaveFeedback }) => {
  return value.map(item => (
    <button
      key={item}
      type="button"
      value={item}
      className={`Btn Btn-${item}`}
      onClick={onLeaveFeedback}
    >
      {item}
    </button>
  ));
};
