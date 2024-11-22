import { DollarCircle, Internet, SendDollars } from "iconoir-react"
import Card from "../../../Component/Card"
import { transactions } from "../../../Exports/Constatants"
import List from "../Components/AccountComponents/Table"

const PayTransfer = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className='flex flex-col gap-2 w-full'>
                            <div className='flex gap-2 justify-center'>
                                <Card 
                                  prim_text="Zelle"
                                  image={"https://firstcu.net/wp-content/uploads/2022/11/zelle-logo.png"} 
                                  text={'Send and Request'}/>
                                <Card 
                                  prim_text="Transfers"
                                  image={<SendDollars className="text-[30px]"/>} 
                                  text={'between my accounts'}/>
                            </div>
                            <div className='flex gap-2 justify-center'>
                                <Card
                                  prim_text="Pay Bills" 
                                  image={<DollarCircle className="text-[30px]"/>} 
                                  text={'Pay now or schedule'}/>
                                <Card 
                                  prim_text="Wire"
                                  image={<Internet className="text-[30px]"/>} 
                                  text={'U.S. or international'}/>
                            </div>
      </div>
      <List data={transactions} date={true} title={"Activity"} />

      <div>

      </div>
    </div>
  )
}

export default PayTransfer