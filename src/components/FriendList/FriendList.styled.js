import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.section`
  padding: 15px;
  text-align: center;
  background-color: lightblue;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid grey;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Description = styled.p`
  font-weight: 700;
`;

export const Item = styled.li`
  gap: 20px;
  width: 100%;
  outline: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9dc1b2;
`;

export const Img = styled.img`
  margin-bottom: 5px;
  margin-top: 5px;
`;
