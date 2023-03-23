import PropTypes from 'prop-types';
import Items from './items';
import s from './table.module.css';

const table = ({ table }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {table.map(({ id, amount, type, currency }) => {
          return (
            <Items key={id} amount={amount} type={type} currency={currency} />
          );
        })}
      </tbody>
    </table>
  );
};
table.propTypes = {
  table: PropTypes.array.isRequired,
};

export default table;
