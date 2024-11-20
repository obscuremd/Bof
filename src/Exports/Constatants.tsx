import { BitcoinCircle, Car, Cart, GraphUp, ReportsSolid } from "iconoir-react";

export const IsMobile = window.innerWidth < 768;

export const menuItems = [
    { icon: <GraphUp/>, name:'Account', link: '/' },
    { icon: <Car/>, name:'Transfers', link: '/transfer' },
    { icon: <ReportsSolid/>, name:'History', link: '/history' },
    { icon: <Cart/>, name:'Help & Support', link: '/help&support' },
]

export const transactions =[
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:true, date:'24-05-2023'},
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:true, date:'24-05-2023'},
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:false, date:'24-05-2023'},
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:true, date:'24-05-2023'},
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:false, date:'24-05-2023'},
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:true, date:'24-05-2023'},
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:false, date:'24-05-2023'},
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:true, date:'24-05-2023'},
    {icon:<BitcoinCircle/>, name:'Bitcoin', amount:'4000', type:false, date:'24-05-2023'},
]
