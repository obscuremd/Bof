import { transactions } from "../../../Exports/Constatants"
import Accordion from "../Components/AccountComponents/Accordion"
import Hero from "../Components/AccountComponents/Hero"
import List from "../Components/AccountComponents/Table"

const Accounts = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero/>
      <Accordion/>
      <List data={transactions} date={true} title={"Transactions"} />
    </div>
  )
}

export default Accounts