import Profile from '../components/profile/Profile';
import Statistics from '../components/stasistics/statisticsList';
import users from '../data/user.json';
import dataValue from '../data/data.json';
import FriendList from './FriendList/FriendList';
import dataFriends from '../data/friends.json';
import Table from './TransactionHistory/TransactionHistory'
import trans from '../data/transactions.json'


export default function App() {
  return (
    <div>
      <Profile
        key={users.username}
        avatar={users.avatar}
        username={users.username}
        tag={users.tag}
        location={users.location}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
      <Statistics title={'Upload stats'} data={dataValue} />
      <FriendList friends={dataFriends} />
      <Table table={trans} />
    </div>
  );
}