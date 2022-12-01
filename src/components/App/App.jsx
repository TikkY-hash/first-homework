import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';
import profileData from '../../mock/user.json';
import statisticsData from '../../mock/statistics.json';
import friendsData from '../../mock/friends.json';
import transactionsData from '../../mock/transactions.json';

import s from './app.module.css';

export const App = () => (
  <div className={s.wrapper}>
    <Profile {...profileData} />
    <Statistics title="Upload stats" stats={statisticsData} />
    <FriendList friend={friendsData} />
    <TransactionHistory items={transactionsData} />
  </div>
);
