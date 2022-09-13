import {
  Section,
  Title,
  List,
  Item,
  ItemLabel,
  ItemNum,
} from './Statistics.styled';

import PropTypes from 'prop-types';

export const Statistics = ({ title, stats = [] }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <ItemLabel> {label}</ItemLabel>
            <ItemNum> {percentage}</ItemNum>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
