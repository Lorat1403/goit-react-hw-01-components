import {
  Container,
  ProfileCard,
  Image,
  Description,
  List,
  Item,
  ItemLabel,
  ItemNum,
} from 'components/Profile/Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Container>
      <ProfileCard>
        <Image src={avatar} />
        <Description>{username}</Description>
        <Description>@{tag}</Description>
        <Description>{location}</Description>
      </ProfileCard>

      <List>
        <Item>
          <ItemLabel>Followers</ItemLabel>
          <ItemNum>{stats.followers}</ItemNum>
        </Item>
        <Item>
          <ItemLabel>Views</ItemLabel>
          <ItemNum>{stats.views}</ItemNum>
        </Item>
        <Item>
          <ItemLabel>Likes</ItemLabel>
          <ItemNum>{stats.likes}</ItemNum>
        </Item>
      </List>
    </Container>
  );
};
