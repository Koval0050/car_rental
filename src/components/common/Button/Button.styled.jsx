import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 44px;
  align-items: start;
  font-weight: 600;
  font-size: 14px;
  border-radius: 12px;
  border: 1px solid transparent;
  background-color: #3470ff;
  color: #fff;
  width: ${props => (props.w ? props.w : '100%')};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(11, 68, 205, 1);
    cursor: pointer;
  }
`;
