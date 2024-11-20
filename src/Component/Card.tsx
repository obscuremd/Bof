import React from 'react'

interface CardProps {
    image : string
    text : string
}

const Card:React.FC<CardProps> = ({image, text}) => {
  return (
    <div className="card bg-base-100 w-[45%] md:w-52 flex shadow-xl">
        <figure className="px-2 pt-2">
            <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-16" />
        </figure>
        <div className="card-body items-center text-center">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card