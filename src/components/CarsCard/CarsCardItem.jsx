import { nanoid } from "nanoid";

import { ReactComponent as Heart } from "../../icon/heart.svg";
import carImg from "../img/car.png";
import { Button } from "../common/Button/Button.styled";

export const CarsCardListItem = () => {
  return (
    <li key={nanoid()} className="listItem">
      <button className="heart ">
        <Heart />
      </button>
      <img className="carImg" src={carImg} alt="" />
      <div className="carDiscribe">
        <div className="carName">
          <p>Car Name, Car Year</p>
          <p>40 $</p>
        </div>
        <div className="carTags">
          <p>Kiev</p>
          <p>Ukraine</p>
          <p>Luxury Car Rentals</p>
          <p>Premium</p>
          <p>Suv</p>
          <p>Enclave</p>
          <p>9582</p>
          <p>Power liftgate</p>
        </div>
      </div>
      <Button>Learn more</Button>
    </li>
  );
};
