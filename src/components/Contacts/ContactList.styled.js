import styled from '@emotion/styled';

export const List = styled.ul`
  width: 400px;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
  border: 1px solid rgba(161, 165, 161, 0.397);
  border-radius: 8px;
`;

export const ItemContact = styled.li`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const InfoContact = styled.p`
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const BtnDelContact = styled.button`
  display: block;
  margin-left: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  border-radius: 10px;
  border: 1px solid rgba(161, 165, 161, 0.397);
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus {
    color: aliceblue;
    background-color: #4468df;
  }
`;
