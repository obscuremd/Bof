import { useState } from 'react'
import { NavArrowDown } from 'iconoir-react'
import { AnimatePresence, motion } from 'framer-motion';


interface Transaction {
  icon: JSX.Element;
  name: string;
  date?: string;
  amount: string;
  type?: boolean;
}

interface Props {
  title: string;
  data: Transaction[]; // Use the Transaction type for the data prop
  date: boolean;
}

const List: React.FC<Props> =({title, data, date}) => {

  const transactions = data
  const isMobile = window.innerWidth < 768
  const [active, setActive] = useState(false)

  return (
    <div className={` md:py-7 p-3 md:px-5 rounded-3xl flex flex-col gap-7 w-full`}>
      <div onClick={()=>setActive(!active)} className='flex items-center justify-between'>
        <p style={{fontSize:"1.2rem", fontWeight:'bold'}}>{title}</p>
      </div>
      {/* content */}

      <AnimatePresence>
        {
          transactions && transactions.map((item, index)=>(
          <motion.div initial={{y:-20}} animate={{y:0}} exit={{y:-20}} key={index} style={{fontSize:"0.8rem"}} className={` py-2 px-4 rounded-xl flex justify-between w-full items-center`}>
            <div className={` p-2 rounded-full inline-flex justify-center`}>{item.icon}</div>
            <p>{item.name}</p>
            {date && <p className='opacity-50'>{item.date}</p>}
            <p style={{color:item.type?'#C2E7B1':'#A13334'}}>{item.amount}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default List
