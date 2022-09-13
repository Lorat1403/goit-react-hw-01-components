import PropTypes from 'prop-types';
import {
  List,
  Status,
  Section,
  Description,
  Item,
  Img,
} from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <Section>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Item key={id}>
            <Status isOnline={isOnline}></Status>
            <Img src={avatar} alt="User avatar" width="48" />
            <Description>{name}</Description>
          </Item>
        ))}
      </List>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
