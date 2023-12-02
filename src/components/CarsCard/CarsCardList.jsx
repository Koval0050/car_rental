import { useSelector } from 'react-redux';
import { selectCars } from 'redux/reducer';

import { CarsCardListStyle } from './CarsCardList.styled';

import { CarsCardListItem } from './CarsCardItem';
import CarsModal from 'components/Modal/CarsModal';
import { useState } from 'react';

const CarsCardList = params => {
  const { items } = useSelector(selectCars);

  const [isOpen, setIsOpen] = useState(false);
  const [carOpen, setCarOpen] = useState();

  const modalToggle = car => {
    setIsOpen(!isOpen);
    setCarOpen(car);
  };

  return (
    <>
      <CarsCardListStyle>
        {items.map(e => {
          return (
            <CarsCardListItem
              key={e.id}
              parametr={e}
              modalToggle={modalToggle}
            />
          );
        })}
      </CarsCardListStyle>
      {isOpen && <CarsModal modalToggle={modalToggle} car={carOpen} />}
    </>
  );
};

export default CarsCardList;
