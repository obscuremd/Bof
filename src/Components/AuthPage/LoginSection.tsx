import React from 'react'
import Input from './Atoms/Input'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import Card from './Atoms/Card'

const LoginSection = () => {
  return (
    <div className='flex gap-8 w-full'>
        <Input/>

        <div className='w-full'>
          <p className='text-4xl'>Choose the card that works for you</p>

          <div className='flex justify-between w-full'>
            <Card img={img1} offer={'Online bonus offer'} reward={'Customized Cash Rewards'} price={'$200'} p1={'3% cash back in the'} p2={'category of your choice'}/>
            <Card img={img2} offer={'Online bonus offer'} reward={'Unlimited Cash Rewards'} price={'$200'} p1={'Unlimited 1.5% cash back'} p2={'on all purchases'}/>
            <Card img={img3} offer={'Online bonus points offer'} reward={'Travel Rewards'} price={'25,000'} p1={'Unlimited 1.5 points for every $1'} p2={'spent on all purchases'}/>
            <Card img={img4} offer={'intro APR offer'} reward={'BankAmericacard®'} price={'0%'} p1={'Intro to APR offer'} p2={'for 18 billing cycle'}/>
          </div>
        </div>
    </div>
  )
}

export default LoginSection