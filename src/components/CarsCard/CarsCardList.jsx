// Import the necessary selectors
import {
  selectCars,
  selectFilteredItems,
  selectSelectedItem,
} from 'redux/reducer';


import { CarsCardListStyle } from './CarsCardList.styled';
import { CarsCardListItem } from './CarsCardItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CarsModal from 'components/Modal/CarsModal';



const CarsCardList = params => {
  const { items } = useSelector(selectCars);
  const filteredItems = useSelector(selectFilteredItems); // Use the filtered items
  const selectedItem = useSelector(selectSelectedItem); // Get the selected item

  const [isOpen, setIsOpen] = useState(false);
  const [carOpen, setCarOpen] = useState();

  const modalToggle = car => {
    setIsOpen(!isOpen);
    setCarOpen(car);
  };

  // Use filteredItems instead of items
  const renderCars = selectedItem ? filteredItems : items;

  return (
    <>
      <CarsCardListStyle>
        {renderCars.map(e => {
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
