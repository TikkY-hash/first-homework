import PropTypes from 'prop-types';

import FriendListItem from './components/FriendListItem';

import s from './FriendList.module.css';

export const FriendList = ({ friend }) => (
  <ul className={s.friendList}>
    {friend.map(friend => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
