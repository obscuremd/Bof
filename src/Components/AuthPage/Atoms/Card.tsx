import React from 'react'

const Card = ({img,price, offer, reward, p1, p2 }) => {
  return (
    <div className=' flex flex-col items-center'>
            <div className='flex flex-col items-center'>
              <p className='text-[#E31837] text-[70px]'>{price}</p>
              <p className='text-[#E31837] text-[15px]'>{offer}</p>
            </div>
              <p className='text-[15px]'>no annual fee</p>
              <img src={img} className='w-56' alt="" />
              <p className='text-[17px] p-6'>{reward}</p>
              <p className='text-[17px] text-[#0053c2] flex flex-col items-center'>{p1}<span>{p2}</span></p>
          </div>
  )
}

export default Card