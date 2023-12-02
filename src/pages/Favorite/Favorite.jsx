import { useState } from 'react';

import { CarsCardListStyle } from 'components/CarsCard/CarsCardList.styled';
import { CarsCardListItem } from 'components/CarsCard/CarsCardItem';
import { Container } from 'components/common/Container/Container.styled';
import CarsModal from 'components/Modal/CarsModal';
const Favorite = () => {

   const [isOpen, setIsOpen] = useState(false);
   const [carOpen, setCarOpen] = useState();

   const modalToggle = car => {
     setIsOpen(!isOpen);
     setCarOpen(car);
   };

  const storedFavoriteCars =
    JSON.parse(localStorage.getItem('favoriteCars')) || [];
  return (
    <Container>
      <CarsCardListStyle>
        {storedFavoriteCars.map(e => (
          <CarsCardListItem key={e.id} parametr={e} modalToggle={modalToggle} />
        ))}
      </CarsCardListStyle>
      {isOpen && <CarsModal modalToggle={modalToggle} car={carOpen} />}
    </Container>
  );
};

export default Favorite;
