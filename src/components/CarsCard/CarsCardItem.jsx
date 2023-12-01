import { ReactComponent as Heart } from '../../icon/heart.svg';
import { Button } from '../common/Button/Button.styled';

export const CarsCardListItem = ({ parametr }) => {


function favoriteToggle(event) {
  const currentElement = event.currentTarget;
  const hasActiveClass = currentElement.classList.contains('active');

  if (hasActiveClass) {
    currentElement.classList.remove('active');
  } else {
    currentElement.classList.add('active');
  }
}


  return (
    <li className="listItem">
      <button
        onClick={event => {
          favoriteToggle(event);
        }}
        className="heart "
      >
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
      <Button>Learn more</Button>
    </li>
  );
};
