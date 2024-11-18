import Logo from '../../../assets/map.svg'
import Cal from '../../../assets/Cal.svg'

const Input = () => {
  return (
    <div className='text-white w-[500px] flex flex-col gap-4'>

      <div className='bg-[#E31837] flex flex-col p-4 gap-2 '>
          <input type="text" className='h-11 w-full rounded-md text-black px-3 text-xl' placeholder='UserID' />
          <input type="text" className='h-11 w-full rounded-md text-black px-3 text-xl' placeholder='Password'  />
          <div className='flex items-center gap-3'>
              <input type="checkbox" className='w-8 h-8' name="" id="" />
              <p className='text-[16px] font-light'>Save user id</p>
          </div>
          <button className='w-full p-2 border-[1px] rounded-full text-xl'>Log In</button>
          <p className='text-[18px] font-extralight'>Forgot ID/Password?</p>
          <div className='w-full flex justify-between'>
              <p className='text-[18px] font-extralight'>Security and Help</p>
              <p className='text-[18px] font-extralight'>Enroll</p>
          </div>
          <p className='pt-3 self-center text-[16px] font-extralight'>Open an Account</p>
      </div>

      <div>
        <div className='bg-[#0073CF] flex px-5 py-2 gap-2'>
          <img className='w-7' src={Logo} alt="" />
          <p className="text-lg whitespace-pre-line leading-6">
            Find your closest financial Center or{"\n"}ATM
          </p>
        </div>
        <div className='bg-[#0053C2] flex px-5 py-2 gap-2'>
          <img className='w-7' src={Cal} alt="" />
          <p className="text-lg whitespace-pre-line leading-6">
            Schedule an Appointment
          </p>
        </div>
      </div>
    
    </div>
  )
}

export default Input