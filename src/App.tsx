import { Button } from '@material-tailwind/react'
import './App.css'
import './fonts.css'
import Navbar from './Components/AuthPage/Navbar'
import Logo from './Components/AuthPage/Logo'
import LogoNav from './Components/AuthPage/LogoNav'
import LoginSection from './Components/AuthPage/LoginSection'

function App() {

  return (
    <div className='px-14 font-connections'>
      <Navbar/>
      <div className='px-24 flex flex-col gap-6 py-9'>
        <Logo/>
        <LogoNav/>
        <LoginSection/>
      </div>
    </div>
  )
}

export default App
