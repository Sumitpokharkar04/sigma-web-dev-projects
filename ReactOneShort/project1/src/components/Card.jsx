import React from 'react'
import { Camera } from 'lucide-react';
import { Link } from 'lucide-react';
import { Bird } from 'lucide-react';
const Card = (props) => {
  return (
      <div className="card">
        <div className="top">
            <span>Available for work</span>
            <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            <h1>{props.name}</h1>
            <h3>{props.role}</h3>
        </div>
        <div className="center">
            <button id='insta'><Camera/>Instagram</button>
            <button id='link'><Link size={16} strokeWidth={2.25} />LinkedIn</button>
            <button id='tweet'><Bird size={16} strokeWidth={1.5} />Twitter</button>
        </div>
        <div className="bottom">
            <button>View Profile</button>
        </div>
      </div>
  )
}

export default Card
