import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 15px;

  text-align: center;
  background-color: lightblue;
`;
export const ProfileCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  outline: 1px solid grey;
  border-radius: 5px;
  background-color: #fff;
  width: 350px;
  padding-bottom: 10px;
`;
export const Image = styled.img`
  width: 250px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
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
