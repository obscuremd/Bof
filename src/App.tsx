// import { SignedIn, SignedOut } from '@clerk/clerk-react'
import './App.css'
import './fonts.css'
import Main from './Pages/MainPage/Main'

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
