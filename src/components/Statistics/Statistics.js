import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className="title">{title}</h2>}

    <ul className={s.statList}>
      {stats.map(stat => {
        const randomColor =
          '#' +
          (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

        return (
          <li
            className={s.item}
            key={stat.id}
            style={{ background: randomColor }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
