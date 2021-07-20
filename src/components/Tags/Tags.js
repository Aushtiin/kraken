import React from 'react'
import Tag from '../Tag/Tag'
import { tags } from '../../data/tagsList'
import './Tags.scss'

const Tags = () => {
  return (
    <div className="tags-page">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag.name} class={tag.class} active={tag.active} />
      ))}
    </div>
  )
}

export default Tags
