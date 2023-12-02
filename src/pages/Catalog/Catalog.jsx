import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCarsDetailAsync } from 'api/apiService';

import { Container } from 'components/common/Container/Container.styled';
import CarsCardList from 'components/CarsCard/CarsCardList';
import FilterBar from 'components/FilterBar/FilterBar';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  const handleButtonLoadMore = () => {
    dispatch(fetchCarsDetailAsync({page}));
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchCarsDetailAsync({}));
  }, [dispatch]);

  return (
    <Container>
      <FilterBar />
      <CarsCardList />
      <button
        onClick={handleButtonLoadMore}
        type="button"
        className="btnLoadMore"
      >
        Load More
      </button>
    </Container>
  );
};
export default Catalog;
