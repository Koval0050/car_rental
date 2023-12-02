import './HeaderLayoutStyle.css';

import { NavLink, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';


import { Container } from 'components/common/Container/Container.styled';

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    color: white;
    background-color: #3470ff;
  }

  &.active {
    color: white;
    background-color: #3470ff;
  }
`;

const HeaderLayout = () => {
  return (
    <Container>
      <div className='header'>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorite">Favorite</StyledLink>
      </div>
      <Outlet />
    </Container>
  );
};

export default HeaderLayout;
