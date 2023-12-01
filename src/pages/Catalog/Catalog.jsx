import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCarsDetailAsync } from 'api/apiService';

import { Container } from 'components/common/Container/Container.styled';
import CarsCardList from 'components/CarsCard/CarsCardList';
import { CarsCardListItem } from 'components/CarsCard/CarsCardItem';
import FilterBar from 'components/FilterBar/FilterBar';

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsDetailAsync());
  }, [dispatch]);



  return (
    <Container>
      <FilterBar />
      <CarsCardList>
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
        <CarsCardListItem />
      </CarsCardList>
    </Container>
  );
};
export default Catalog;
