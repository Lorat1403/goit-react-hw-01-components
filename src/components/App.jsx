import user from 'components/Profile/user.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile';
import { StatsBlock } from './Statistics/StatsBlock';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <StatsBlock />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
