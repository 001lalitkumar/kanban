import { useState } from 'react';
import DisplayImage from "../assets/Display.svg"
import DownIcon from "../assets/down.svg"
function DisplayMenu({ grouping, sorting, onGroupingChange, onSortingChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-menu">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={DisplayImage} alt="Display" width="16" height="16" />
        Display
        <img src={DownIcon} alt="Toggle" width="16" height="16" />
      </button>

      {isOpen && (
        <div className="display-options">
          <div className="option-group">
            <label>Grouping</label>
            <select
              value={grouping}
              onChange={(e) => onGroupingChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="option-group">
            <label>Ordering</label>
            <select
              value={sorting}
              onChange={(e) => onSortingChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayMenu;