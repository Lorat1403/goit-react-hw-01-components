import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  padding: 15px;
  text-align: center;
  background-color: lightblue;
`;

export const TableHead = styled.thead`
  background-color: violet;
  height: 50px;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: lightgray;
  }
`;

export const TableColumn = styled.td`
  height: 40px;
`;
