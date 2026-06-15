// import { useState } from "react"

import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react"

export default function Navbar() {
    const [homeShowDropdown,setHomeShowDropdown]=useState(null);
    const [aboutShowDropdown,setAboutShowDropdown]=useState(false)


    return (
        <div className="bg-gray-700 text-white flex justify-between gap-40 px-30 py-5 items-center">
            <h1 className="text-5xl font-bold text-blue-400 ">logo</h1>
            <ul className="flex gap-14 text-3xl">
                <li className="flex gap-2 relative"
                 onMouseEnter={()=>setHomeShowDropdown(true)}
                 onMouseLeave={()=>setHomeShowDropdown(false)}
                 >home 
                    {homeShowDropdown&&(
            <div className="bg-gray-700 text-white w-110 rounded px-4 py-2 absolute top-15 right-0.5 ">
              <p>Home v1 - Modern Elegance</p>
              <p>Home v2 - Rustic Comfort</p>
              <p>Home v3 - Minimalist Chic</p>
              <p>Home v4 - Industrial Vibes</p>
              <p>Home v5 - Vintage Revival</p>
              <p>Home v6 - Kid's Playland</p>
            </div>
                    )}
                    {
                    homeShowDropdown?<RiArrowDropUpLine size={40} />:<RiArrowDropDownLine  size={40} />

                    }
                     </li>
                <li className="flex gap-3 text-3xl"
                 onMouseEnter={()=>setAboutShowDropdown(true)}
                 onMouseLeave={()=>{setAboutShowDropdown(false)}}
                    >about
                {aboutShowDropdown &&(
                    <div className="bg-gray-700 text-white  rounded px-4 py-5 absolute top-16">
                        <p>welcome</p>
                        <p>school</p>
                        <p>police</p>

                    </div>
                )

                }
                {
                    aboutShowDropdown?<RiArrowDropUpLine size={40} />:<RiArrowDropDownLine  size={40} />

                }
                 </li>

                <li>contact</li><span><RiArrowDropDownLine  size={40} /></span>
            </ul>
            <div className="flex gap-5 text-4xl">
                <a href="/about">
                <IoSearchOutline />

                </a>
                <IoPersonOutline />
                <LiaShoppingBagSolid />
            </div>
        </div>
    )
}