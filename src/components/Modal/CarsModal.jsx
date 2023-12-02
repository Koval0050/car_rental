import './CarsModalStyle.css';
import { Button } from 'components/common/Button/Button.styled';
import { ReactComponent as CloseBtn } from 'icon/closeBtn.svg';
import { useCallback, useEffect } from 'react';
import { nanoid } from 'nanoid';

const CarsModal = ({ modalToggle, car }) => {
  const conditionsItem = car.rentalConditions.split('\n');
  const price = car.rentalPrice.split('$');
  const mileage = (car.mileage / 1000).toString().replace('.', ',');
  const handleModalClose = e => {
    if (
      e.target.classList.contains('back-drop') ||
      e.currentTarget.classList.contains('btn-close')
    ) {
      modalToggle();
    }
  };

const handleKeyDown = useCallback((e) => {
  if (e.key === 'Escape') {
    modalToggle();
  }
}, [modalToggle]);

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [handleKeyDown]);


  // Generate keys outside the render method
  const generateKeys = () => {
    return {
      conditionsItem: conditionsItem.map(() => nanoid()),
      mileage: nanoid(),
      price: nanoid(),
    };
  };

  const keys = generateKeys();

  return (
    <div
      className="back-drop"
      onClick={event => {
        handleModalClose(event);
      }}
    >
      <div className="modal">
        <button
          className="btn-close"
          onClick={event => {
            handleModalClose(event);
          }}
        >
          <CloseBtn />
        </button>
        <img className="modalImg" src={car.img} alt="" />
        <div className="generalInformation">
          <p className="modalCarName">
            {car.make},{car.year}
          </p>
          <p className="modalCarTags address">{car.address}</p>
          <p className="modalText">{car.description}</p>
        </div>
        <div className="generalInformation">
          <p className="modalText accessories">
            Accessories and functionalities:
          </p>
          <div className="tagsWraper">
            {car.accessories.map((e, index) => {
              return (
                <p key={keys.conditionsItem[index]} className="modalCarTags">
                  {e}
                </p>
              );
            })}
            {car.functionalities.map((e, index) => {
              return (
                <p key={keys.conditionsItem[index]} className="modalCarTags">
                  {e}
                </p>
              );
            })}
          </div>
        </div>
        <div className="generalInformation">
          <p className="modalText accessories">Rental Conditions: </p>
          <ul className="conditionsList">
            {conditionsItem.map((e, index) => {
              return (
                <li key={keys.conditionsItem[index]} className="conditionsItem">
                  <p className="conditions">{e}</p>
                </li>
              );
            })}
            <li key={keys.mileage} className="conditionsItem">
              <p className="conditions">
                Mileage: <span className="blueText">{mileage}</span>
              </p>
            </li>
            <li key={keys.price} className="conditionsItem">
              <p className="conditions">
                Price: <span className="blueText">{price}$</span>
              </p>
            </li>
          </ul>
        </div>
        <Button w={'168px'}>Rental car</Button>
      </div>
    </div>
  );
};

export default CarsModal;
