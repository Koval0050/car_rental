import { FilterBarContainer } from "./FilterBar.styled";
import { ReactComponent as Dolar } from "../../icon/dolar.svg";
import DropListBrand from "./DropList/DropListBrand";
const FilterBar = (params) => {
  return (
    <FilterBarContainer>
      <DropListBrand w="224px" />
      <DropListBrand w="230px" />

      {/* <div className="selectorContainer">
        <p className="selectDiscribe">Car brand</p>
        <DropListBrand w="224px">
          <option className="option" value="0" selected disabled hidden>
            Enter the text
          </option>
          <option value="Buick">Buick</option>
          <option value="Volvo">Volvo</option>
          <option value="Subaru">Subaru</option>
        </DropListBrand>
      </div>

      <div className="selectorContainer">
        <p className="selectDiscribe">Price/ 1 hour</p>
        <DropListBrand w="125px">
          <option className="option" value="0" selected disabled hidden>
            To $
          </option>
          <option value="Buick">Buick</option>
          <option value="Volvo">Volvo</option>
          <option value="Subaru">Subaru</option>
        </DropListBrand>
      </div> */}
    </FilterBarContainer>
  );
};

export default FilterBar;
