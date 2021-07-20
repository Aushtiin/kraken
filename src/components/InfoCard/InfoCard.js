import React from 'react'
import Tag from '../Tag/Tag'
import './InfoCard.scss'

const InfoCard = (props) => {
  return (
    <div className="info-card">
      <div className="left-box">
        <b>^</b>
        <b>{props.engagement}</b>
      </div>
      <div className="info-box">
        <span id="heading">{props.heading}</span>
        <span id="desc">{props.desc}</span>
        <Tag name={props.tag.name} class={props.tag.class} active={false} />
      </div>
      <div className="comment">
        <i style={{ fontSize: "1.3em", marginRight: ".5em", color: "#d1d0ef" }} className="ri-chat-3-fill"></i>
        <span>{props.comments}</span>
      </div>
    </div>
  )
}

export default InfoCard
