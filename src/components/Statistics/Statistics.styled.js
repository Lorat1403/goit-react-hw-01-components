import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 15px;

  text-align: center;
  background-color: lightblue;
`;
export const Title = styled.h2`
  padding: 10px 0 10px 0;
  font-weight: 500;
  outline: 1px solid grey;
  border-radius: 5px;
  background-color: #fff;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
`;
export const List = styled.ul`
  width: 350px;
  display: flex;
  margin-top 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  gap: 10px;
  width: calc(700px / 4);
  height: 70px;
  outline: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #9dc1b2;
`;

export const ItemLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const ItemNum = styled.span`
  color: darkblue;
  font-weight: 500;
`;
