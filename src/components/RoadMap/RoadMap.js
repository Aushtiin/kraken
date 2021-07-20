import React from 'react'
import { roadMap } from '../../data/roadMap'
import './RoadMap.scss'

const RoadMap = () => {
  return (
    <div className="roadmap-page">
      <div className="roadmap-content">
        <div className="content-header">
          <span id="head-text">Roadmap</span>
          <span id="view-toggle">View</span>
        </div>
        <div className="stats">
          <div className="stat">
            <ul>
              {roadMap.map((item, index) => (
                <li key={index} className={`${item.class}`} >
                  <span id="text">{item.heading}</span>
                  <span id="infor">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMap
