import { useEffect, useState } from 'react';

import { ReactComponent as Heart } from '../../icon/heart.svg';
import { Button } from '../common/Button/Button.styled';

import Notiflix from 'notiflix';

export const CarsCardListItem = ({ parametr, modalToggle }) => {
  const [favorites, setFavorites] = useState([]);

  function favoriteToggle(event, parametr) {
    const currentElement = event.currentTarget;
    const hasActiveClass = currentElement.classList.contains('active');
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const storedFavoriteCars =
      JSON.parse(localStorage.getItem('favoriteCars')) || [];

    const updatedFavorites = hasActiveClass
      ? storedFavorites.filter(favoriteId => favoriteId !== parametr.id)
      : [...storedFavorites, parametr.id];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    const updatedFavoriteCars = hasActiveClass
      ? storedFavoriteCars.filter(car => car.id !== parametr.id)
      : [...storedFavoriteCars, parametr];

    localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));

    setFavorites(updatedFavorites);

    if (hasActiveClass) {
      currentElement.classList.remove('active');
      Notiflix.Notify.warning('The car has been delited from the wish list');
    } else {
      currentElement.classList.add('active');
      Notiflix.Notify.info('The car has been added to the wish list');
    }
  }

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    const heartButtons = document.querySelectorAll('.heart');
    heartButtons.forEach(button => {
      const buttonId = parseInt(button.getAttribute('data-id'), 10);
      if (storedFavorites.includes(buttonId)) {
        button.classList.add('active');
      }
    });
  }, []);

  return (
    <li className="listItem">
      <button
        onClick={event => favoriteToggle(event, parametr)}
        className={`heart ${favorites.includes(parametr.id) ? 'active' : ''}`}
        data-id={parametr.id}
      >
        <Heart />
      </button>
      <img className="carImg" src={parametr.img} alt={parametr.make} />
      <div className="carDiscribe">
        <div className="carName">
          <p>
            {parametr.make}
            <span className="modelBuleText">{parametr.model}</span>, {parametr.year}
          </p>
          <p>{parametr.rentalPrice}</p>
        </div>
        <div className="carTags">
          <p>{parametr.rentalConditions}</p>
      
        </div>
      </div>
      <Button
        onClick={() => {
          modalToggle(parametr);
        }}
      >
        Learn more
      </Button>
    </li>
  );
};
