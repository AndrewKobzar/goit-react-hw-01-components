import PropTypes from 'prop-types';
import FriendListUitem from './FriendListItem';
import s from './friends.module.css';

const friendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, name, isOnline, avatar }) => {
        return (
          <FriendListUitem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        );
      })}
    </ul>
  );
};
friendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default friendList;
