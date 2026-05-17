import React from 'react'
//Note: React components must start with capital letter
//React treats lowercase tags like normal HTML tags, like <div>, <p>, <card>.
const Card = (props) => {
  return (
    <div className="card">
      <img src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg" alt="astronaut" />
      <h1>{props.user},{props.age}</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <button>view profile</button>
    </div>
  )
}

export default Card
