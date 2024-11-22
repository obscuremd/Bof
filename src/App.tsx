import { SignedIn, SignedOut } from '@clerk/clerk-react'
import './App.css'
import './fonts.css'
import Auth from './Pages/AuthPage/Auth'
import Main from './Pages/MainPage/Main'
import { useAuth } from './Providers/GeneralProvider'

function App() {


  return (
    <div className='font-connections'>
        {/* <SignedIn> */}
          <Main/>
        {/* </SignedIn>
        <SignedOut>
          <Auth/>
        </SignedOut> */}
        
    </div>
  )
}

export default App
