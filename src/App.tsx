import './App.css'
import './fonts.css'
import Auth from './Pages/AuthPage/Auth'
import Main from './Pages/MainPage/Main'
import { useAuth } from './Providers/AuthProvider'

function App() {

  const {authenticated} = useAuth()

  return (
    <div className='font-connections'>
      {
        authenticated
        ?<Main/>
        :<Auth/>
      }
        
    </div>
  )
}

export default App
