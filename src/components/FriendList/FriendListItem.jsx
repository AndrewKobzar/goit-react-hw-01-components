import PropTypes from 'prop-types';
import s from './friends.module.css';
import { clsx } from 'clsx';

const FriendListItem = ({ id, name, isOnline, avatar }) => {
  return (
    <li key={id} className={s.item}>
      <span className={clsx(s.status, isOnline && s.offline)}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default FriendListItem;
