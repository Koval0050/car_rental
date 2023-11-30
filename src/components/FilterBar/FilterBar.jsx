import { FilterBarContainer } from './FilterBar.styled';
import DropListBrand from './DropListBrand/DropListBrand';
import DropListPrice from './DropListPrice/DropListPrice';
import CarMileage from './CarMileage/CarMileage';
import { Button } from 'components/common/Button/Button.styled';
const FilterBar = params => {
  return (
    <FilterBarContainer>
      <DropListBrand />
      <DropListPrice />
      <CarMileage />
      <Button w="136px">Search</Button>
    </FilterBarContainer>
  );
};

export default FilterBar;
