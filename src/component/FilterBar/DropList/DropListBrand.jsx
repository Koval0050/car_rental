import React, { useState } from "react";
import { DropListBrandStyle } from "./DropListBrand.styled";
import { ReactComponent as Arrow } from "../../../icon/arrow.svg";

const DropListBrand = ({w}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = (value) => {
    setSelectedItem(value);
    setIsOpen(false);
  };

  return (
    <DropListBrandStyle className="dropdown" w={w} >
      <div className="selectInput" onClick={handleDropdownClick}>
        <span className="hida">{selectedItem || "Вибрати"}</span>
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
                onClick={() => handleItemSelect("Buick")}
              >
                Buick
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect("Volvo")}
              >
                Volvo
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect("Hummer")}
              >
                Hummer
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect("Subaru")}
              >
                Subaru
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect("Mitsubishi")}
              >
                Mitsubishi
              </button>
            </li>
            <li>
              <button
                className="selectItemButton"
                type="button"
                onClick={() => handleItemSelect("Nissan")}
              >
                Nissan
              </button>
            </li>
          </ul>
        </div>
      )}
    </DropListBrandStyle>
  );
};

export default DropListBrand;
