import React from 'react'
import info from '../../data/info'
import InfoCard from '../InfoCard/InfoCard'

const InfoComponent = () => {
  return (
    <div>
      {info.map((item, index) => (
        <InfoCard key={index} engagement={item.engagement} heading={item.heading} desc={item.desc} tag={item.tag} comments={item.comments} />
      ))}
    </div>
  )
}

export default InfoComponent
