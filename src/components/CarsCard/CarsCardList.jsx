import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/reducer';

import { CarsCardListStyle } from './CarsCardList.styled';

import { CarsCardListItem } from './CarsCardItem';
import { fetchCarsDetailAsync } from 'api/apiService';
import { useState } from 'react';

const CarsCardList = params => {
  const dispatch = useDispatch();

  const { items } = useSelector(selectCars);
  const [page, setPage] = useState(2);

  const handleButtonLoadMore = () => {
    dispatch(fetchCarsDetailAsync(page));
    setPage(page + 1);
  };

  return (
    <>
      <CarsCardListStyle>
        {items.map(e => {
          return <CarsCardListItem key={e.id} parametr={e} />;
        })}
      </CarsCardListStyle>
      <button
        onClick={handleButtonLoadMore}
        type="button"
        className="btnLoadMore"
      >
        Load More
      </button>
    </>
  );
};

export default CarsCardList;
