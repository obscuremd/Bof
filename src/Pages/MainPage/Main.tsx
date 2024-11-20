import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accounts from './Screens/Accounts'
import BottomNav from './Components/BottomNav'
import PayTransfer from './Screens/PayTransfer'
import DepositChecks from './Screens/DepositChecks'
import Trade from './Screens/Trade'
import Navbar from './Components/Navbar'

const Main = () => {
  return (
    <BrowserRouter>
        <div className='flex flex-col gap-10'>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Accounts/>}/>
              <Route path='/transfer' element={<PayTransfer/>}/>
              <Route path='/deposit-checks' element={<DepositChecks/>}/>
              <Route path='/trade' element={<Trade/>}/>
          </Routes>
          <BottomNav/>
        </div>
    </BrowserRouter>
  )
}

export default Main