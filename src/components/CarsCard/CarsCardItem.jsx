
import { ReactComponent as Heart } from '../../icon/heart.svg';
import { Button } from '../common/Button/Button.styled';

export const CarsCardListItem = ({ parametr }) => {
  return (
    <li  className="listItem">
      <button className="heart ">
        <Heart />
      </button>
      <img className="carImg" src={parametr.img} alt="" />
      <div className="carDiscribe">
        <div className="carName">
          <p>
            {parametr.make}, {parametr.year}
          </p>
          <p>{parametr.rentalPrice}</p>
        </div>
        <div className="carTags">
          <p>{parametr.rentalConditions}</p>
          {/* {parametr.functionalities.map(e => {
            return <p>{e}</p>;
          })}
          */}
        </div>
      </div>
      <Button >Learn more</Button>
    </li>
  );
};
