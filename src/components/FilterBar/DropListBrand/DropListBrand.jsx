import React, { useState } from 'react';
import { DropListBrandStyle } from './DropListBrand.styled';
import { ReactComponent as Arrow } from 'icon/arrow.svg';
import { brands } from 'api/brands';

const DropListBrand = () => {
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
    <DropListBrandStyle className="">
      <div className="selectInput" onClick={handleDropdownClick}>
        <span className="hida">{selectedItem || 'Enter the text'}</span>
      </div>
      <button onClick={handleDropdownClick} className="arrow">
        <Arrow />
      </button>

      {isOpen && (
        <div className="select">
          <ul className="selectList">
            {brands.map(e => {
              return (
                <li key={e}>
                  <button
                    className="selectItemButton"
                    type="button"
                    onClick={() => handleItemSelect(e)}
                  >
                    {e}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </DropListBrandStyle>
  );
};

export default DropListBrand;
