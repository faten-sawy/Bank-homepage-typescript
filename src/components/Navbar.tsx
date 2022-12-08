import {useState} from 'react'
import { close, logo, menu } from "../assets";

interface NavItems {
    id:string,
    title:string
}

const Navbar = ()=>{
    const[toggle,setToggle] = useState<boolean>(false)
    const items:NavItems[] =[
        {
            id: "home",
            title: "Home",
          },
          {
            id: "features",
            title: "Features",
          },
          {
            id: "product",
            title: "Product",
          },
          {
            id: "clients",
            title: "Clients",
          },
    
    ]
    return(
        <nav className="w-full flex py-6 justify-between items-center navbar">
       <img src={logo} className="w-[124px] h-[32px]" alt='logo' /> 
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === items.length - 1 ? "mr-0" : "mr-10"
             }`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} 
                p-6 mr-0 w-full bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {items.map((item, index) => (
              <li
                key={item.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === items.length - 1 ? "mb-0" : "mb-10"
                }`}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar