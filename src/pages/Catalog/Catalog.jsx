import CarsCardList from 'components/CarsCard/CarsCardList';
import { CarsCardListItem } from 'components/CarsCard/CarsCardItem';
import { Container } from 'components/common/Container/Container.styled';

import FilterBar from 'components/FilterBar/FilterBar';

const Catalog = () => {
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
