import React from 'react'
import { members } from '../../backend/sanity/schemaTypes/members'
import {Link} from "react-router-dom"
export default function UserCard() {
  return (
    <article>
            
            <img src={members.fields.img} className="articleImg" />
            <h3><Link to={members.name}></Link></h3>
            
            <p><Link to={members.title}>{members.name}</Link></p>
    </article>
  )
}
