const Logo = 'https://companieslogo.com/img/orig/BAC-e7995069.png?t=1720244490'

const Navbar = () => {
  return (
    <div className='bg-[#F5F5F5] roboto p-1 px-20 flex justify-between'>
        <ul className='flex gap-6'>
            <li>Personal</li>
            <li>Small Business</li>
            <li>Wealth Management</li>
            <li>Business & institutions</li>
            <li>Security</li>
            <li className="flex items-center"><img className="w-6 h-4" src={Logo} alt="" /> About Us</li>
        </ul>
        
        <ul className='flex gap-6'>
            <li>En espanol</li>
            <li>Contact us</li>
            <li>Help</li>
        </ul>
    </div>
  )
}

export default Navbar