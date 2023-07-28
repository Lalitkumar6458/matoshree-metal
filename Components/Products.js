import React from 'react'
import styles from "../styles/Products.module.css"
import { FaArrowRight} from "react-icons/fa";
import PageHeading from './Base/PageHeading';
const Products = ({data}) => {
   console.log("data yt",data.table_data)

//    Object.keys
var tableheader1,tableData1
const tableheader=Object.keys(data.table_data[0])
const tableData=data.table_data
console.log(data.table_data1,"dateryu")
if(data.table_data1 != undefined){
    tableheader1=Object.keys(data.table_data1[0])
   tableData1=data.table_data1
}





console.log("tableData fillter",tableData)

    console.log(tableheader,"tableheader")
  return (
   <>

    <PageHeading heading={data.heading} img={data.img} bredcurm ={data.Bredcurm}/>
    <div className="px-[5%]">

    
    <div className="">

        <h3 className='text-[1.3rem]'>{data.content.text1}</h3>
        <ul>
            {data.content.list&&data.content.list.map((item,i)=>{
                return(
                    <li key={i} className='flex items-center'><FaArrowRight/>{item}</li>
                )
            })}
        </ul>

        <h4>We Trade This type of grades</h4>
        <div className='responsive'>
        <table className='table'>
            <thead>
                <tr>
                    {tableheader.map((item,index)=>{
return(
    <th key={index}>
        {item}
                        
                    </th>
)
                    })}
                    
                </tr>
            </thead>
            <tbody>
                {tableData.map((item,i)=>{
                    return(
                        <tr key={i}>
                            {
                            tableheader.map((each,i)=>{
                                
                                return(
                                    <td key={i}>{item[each]==""?"-":item[each]}</td>
                                )
                            })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
       
{
   data.table_data1 != undefined?


        <div className='responsive'>
        <table className='table'>
            <thead>
                <tr>
                    {tableheader1.map((item,i)=>{
return(
    <th key={i}>
        {item}
                        
                    </th>
)
                    })}
                    
                </tr>
            </thead>
            <tbody>
                {tableData1.map((item,i)=>{
                    return(
                        <tr key={i}>
                            {
                            tableheader1.map((each,i)=>{
                                
                                return(
                                    <td key={i}>{item[each]==""?"-":item[each]}</td>
                                )
                            })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>:null
        }
    </div>

    </div>

   </>
  )
}

export default Products