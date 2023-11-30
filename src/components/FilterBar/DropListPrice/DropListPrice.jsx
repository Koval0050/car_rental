import './DropListPriceStyle.css';
import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../../../icon/arrow.svg';

const DropListPrice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = value => {
    setSelectedItem(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="selectInput" onClick={handleDropdownClick}>
        <span className="hida">{`To ${selectedItem}$` || 'To  $'}</span>
      </div>
      <button onClick={handleDropdownClick} className="arrow">
        <Arrow />
      </button>

      {isOpen && (
        <div className="select">
          <ul className="selectList">
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect('30')}
              >
                30
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect('40')}
              >
                40
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect('50')}
              >
                50
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect('60')}
              >
                60
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect('70')}
              >
                70
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect('80')}
              >
                80
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropListPrice;
