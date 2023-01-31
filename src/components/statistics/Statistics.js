import './Statistics.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <div className="Stats__container">
      <h2 className="Stats__title">Statistics</h2>
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
    </div>
  );
};
