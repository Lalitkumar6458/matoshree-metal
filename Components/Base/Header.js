import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import { Button, Drawer,AutoComplete,Input } from 'antd';
import logo from "../../public/Images/trlogo.png"
import Link from 'next/link'
import { FaSearch,FaBars,FaAngleDown } from 'react-icons/fa'
import Router,{ useRouter } from 'next/router';
var classNames = require('classnames');
const Header = () => {
const router=useRouter()
const [open, setOpen] = useState(false);


  Router.events.on('routeChangeStart',(url)=>{
  })
  Router.events.on('routeChangeComplete',(url)=>{
    setOpen(false)
  })

    const [visible, setVisible] = useState(false);
    function searchHeaderData(headerData, searchTerm) {
      const results = [];
    
      searchTerm = searchTerm.toLowerCase(); // Convert search term to lowercase
    
      headerData.forEach(item => {
        const { name, link, submenu } = item;
    
        if (name.toLowerCase().includes(searchTerm) || (link && link.toLowerCase().includes(searchTerm))) {
          results.push({
            type: 'Regular',
            name,
            link
          });
        }
    
        if (submenu) {
          submenu.forEach(subitem => {
            const { name, link } = subitem;
    
            if (name.toLowerCase().includes(searchTerm) || (link && link.toLowerCase().includes(searchTerm))) {
              results.push({
                type: 'Submenu',
                name,
                link
              });
            }
          });
        }
      });
    
      return results;
    }
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if(currentScrollPos === 0){
        setVisible(false)
      }else{
        setVisible(true)

      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const routerLink=[
        {
            id:1,
            name:"Home",
            link:"/"
        },
        {
            id:2,
            name:"About Us",
            link:"/about"
        },
        {
            id:3,
            name:"Product",
            link:"/product",
            submenu:[
      
                {
                  name:"Cobalt Alloy Scrap",
                  link:"/Products/CobaltAlloysScraps"
                },
                {
                  name:"Nickel alloys Scrap",
                  link:"/Products/NickelAlloysScraps"
                }
                ,
                {
                  name:"Tungsten Alloy Scrap",
                  link:"/Products/TungstenAlloysScraps"
                }
                ,
                {
                  name:"Titanium & Tantalum",
                  link:"/Products/TitaniumandTantalumScraps"
                }
                ,
                  {
                  name:"Stainless Steel Scrap",
                  link:"/Products/StainlessSteel"
                }
            ]
        },
        {
          name:"Metals",
          link:"#",
          label:"btn-3",
          submenu:[
            
            {
              name:"Cobalt",
              link:"/Metarials/Cobalt"
            },
            {
              name:"Nickel ",
              link:"/Metarials/Nickel"
            }
           ,
              
              {
              name:"Chromium",
              link:"/Metarials/Chromium"
            }
          //   ,
              
          //   {
          //   name:"Niobium",
          //   link:"/Metarials/Niobium"
          // }
        //   ,
              
        //   {
        //   name:"Molybdenum",
        //   link:"/Metarials/Molybdenum"
        // }, 
        ,
        {
          name:"Tungsten",
          link:"/Metarials/Tungsten"
        }
        ,
        {
          name:"Titanium",
          link:"/Metarials/Titanium"
        }
        
        // {
        //   name:"Tantalum",
        //   link:"/Metarials/Tuntalum"
        // }
        // ,
        
          ]
        
        }, 
        
        
        // {
        //     id:4,
        //     name:"Quality",
        //     link:"/quality"
        // },   
         {
            id:1,
            name:"Contact us",
            link:"/contact"
        },

    ]
   const [openSearch, setOpenSearh] = useState(false);

    const [products, setProducts] = useState(false);
    const [metals, setMetals] = useState(false);



    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const showDrawerSearch = () => {
        setOpenSearh(true);
      };
      const onSearchClose = () => {
        setOpenSearh(false);
      };
    
    const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  const productHandler=()=>{
    setProducts(!products)
  }
  const metalsHandler=()=>{
    setMetals(!metals)
  }

  const searchResult = (query) =>{
    const results = searchHeaderData(routerLink, query);
    console.log(results);
   return results.map((item, idx) => {
        return {
          value: item.name,
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>
  
                <Link
                  href={item.link}
                  onClick={()=>setOpenSearh(false)}
                >
                 {item.name}
                </Link>
              </span>
              <span>{results.length} results</span>
            </div>
          ),
        };
      });
  }
  return (
   
<div className={classNames(`w-full h-[70px] z-50 transition-all duration-300 opacity-100 translate-y-0 bg-white fixed  shadow-md px-[5%] flex items-center justify-between top-0`)}>
<div className='h-[60px] w-[250px]'> 
<Image className='w-full h-full' alt="Matoshree metal & alloys" src={logo} width={300} height={200}/>
</div>

<div className='flex items-center gap-4'>

<ul className='hidden items-center gap-4  font-poppins font-medium md:text-[1rem] xl:text-[1.2rem] md:flex'>
{
    routerLink.map((item,index)=>{
      console.log(router.asPath==item.link,"router.asPath==item.link",router.asPath,item.link)
        if(item.submenu){
return <li  key={index} className={`relative group leading-[40px] w-fit rounded  hover:bg-dark-cl hover:text-white xl:px-5 md:px-1 ${router.asPath==item.link?"bg-dark-cl text-mainRed":""} `}>
<Link href="#" className='flex items-center gap-1'>{item.name} <FaAngleDown/> </Link>

<ul className='absolute top-[70px] left-0 bg-white font-exo font-medium w-fit whitespace-nowrap hidden opacity-0 group-hover:block group-hover:opacity-100 group-hover:top-[38px] text-black shadow-lg border-t-2 border-solid border-mainRed transition-all duration-600 '>
{
    item.submenu.map((each,index)=>{
        return <li key={index} className={`leading-[55px] px-3 border-t-[1px] border-solid border-mainRed  hover:bg-dark-cl hover:text-white ${router.asPath==each.link?"bg-dark-cl text-mainRed":""} `}><Link href={each.link}>{each.name}</Link></li>
    })
}
</ul>
</li>
    }else{
        return <li key={index} className={`leading-[40px] rounded hover:bg-dark-cl hover:text-white w-fit xl:px-5 md:px-1 ${router.asPath==item.link?"bg-dark-cl text-mainRed":""}`}><Link href={item.link}>{item.name}</Link></li>
    }
    })
}

</ul>
<div className='flex items-center gap-4 text-[1.4rem] '>
<FaSearch className='cursor-pointer text-dark-cl hover:text-mainRed' onClick={showDrawerSearch} />
<FaBars  className='cursor-pointer block md:hidden text-dark-cl hover:text-mainRed'   onClick={showDrawer} />
</div>
</div>

<Drawer title={<div className='font-Oswald text-mainRed text-[20px]'>Matoshree metal & alloys</div>} width={300} placement="right" onClose={onClose} open={open}>
<div className=''>

<ul>
{
    routerLink.map((item ,index)=>{
        if(item.submenu){
return(
    <li key={index} className='text-[1.3rem] font-Oswald group mt-3' onClick={item.name === "Product"?productHandler:metalsHandler}><Link href="#" className=' flex items-center gap-1 hover:text-mainRed'>{item.name}  <FaAngleDown/></Link>

    {
        item.name==="Product"?<ul className={`pl-10 ${products?"block":"hidden"}`}>
        {item.submenu.map((each,index)=>{
            return(
                <li key={index} className={` text-[1.1rem] mb-2 hover:text-mainRed ${router.asPath==item.link?"text-mainRed":""}`} ><Link className='hover:text-mainRed' href={each.link}>{each.name}</Link>
                            </li>
            )
        })}
        </ul>:<ul className={`pl-10 ${metals?"block":"hidden"}`}>
        {item.submenu.map((each,index)=>{
            return(
                <li key={index} className={` text-[1.1rem] mb-2 hover:text-mainRed ${router.asPath==item.link?"text-mainRed":""}`} ><Link className='hover:text-mainRed' href={each.link}>{each.name}</Link>
                            </li>
            )
        })}
        </ul>

    }
    
    </li>
)
        }else{

            
                    return (
                        <li className={`text-[1.3rem] font-Oswald mt-3 hover:text-mainRed ${router.asPath==item.link?"bg-dark-cl text-mainRed":""}`} key={index}><Link href={item.link}>{item.name}</Link>
                        </li>
                    )
        }
    })
}
</ul>
</div>
</Drawer>
<Drawer title={<div className='font-Oswald text-mainRed text-[23px]'>Search Products And More</div>} className='searchBox' width={245} height={120} placement="top" onClose={onSearchClose} open={openSearch}>
<div className="Searchinput">
<AutoComplete
    dropdownMatchSelectWidth={252}
    style={{
      width: "70%",
    }}
    options={options}
    onSelect={onSelect}
    onSearch={handleSearch}
  >
    <Input.Search size="large" placeholder="Search here..." enterButton />
  </AutoComplete>
</div>
</Drawer>
</div>
   
  

  )
}

export default Header