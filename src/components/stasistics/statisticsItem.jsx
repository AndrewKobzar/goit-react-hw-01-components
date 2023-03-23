import s from './stats.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ id, label, percentage }) => {
  return (
    <li
      style={{ backgroundColor: getRandomHexColor() }}
      key={id}
      className={s.item}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.number,
};


export default Statistics;
