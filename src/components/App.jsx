import { Profile } from './profile/Profile';
import user from '../json-folders/user.json';

import Statistics from './statistics/Statistics';
import data from '../json-folders/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../json-folders/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transitions from '../json-folders/transaction.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transitions} />
    </div>
  );
};
