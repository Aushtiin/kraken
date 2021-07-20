import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="icon">
        <i style={{ fontSize: "1.5em", color: "white", marginRight: ".5em" }} className="ri-lightbulb-line"></i>
        <span>6 Suggestions</span>
      </div>
      <div className="sort">
        <label htmlFor="group">Sort by :</label>
        <select name="group" id="group">
          <option value="mostUpvotes">Most Upvotes</option>
        </select>
      </div>
      <div className="add-btn">
        <button>+ Add Feedback</button>
      </div>
    </header>
  )
}

export default Header
