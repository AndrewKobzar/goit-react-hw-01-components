import PropTypes from "prop-types";
import StatisticsItem from "./statisticsItem";
import s from './stats.module.css'


const StatisticsList = props => {
  const { data, title } = props;

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem  key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};


export default StatisticsList;


