import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="icon-drop"
        />
      </button>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

export default Dropdown;
