import PropTypes from 'prop-types';
import './Section.css';

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="Stats__title">{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.PropTypes.string.isRequired,
};
