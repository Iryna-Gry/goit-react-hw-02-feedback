import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.Stats__title}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.PropTypes.string.isRequired,
};
