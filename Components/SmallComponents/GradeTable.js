import React from 'react'

const GradeTable = ({data}) => {
    var tableheader1,tableData1
const tableheader=Object.keys(data[0])
const tableData=data.table_data
console.log(data.table_data1,"dateryu")
if(data[0] != undefined){
    tableheader1=Object.keys(data[0])
   tableData1=data[0]
}
  return (
    <div className='overflow-x-auto mt-5 mb-8'>
    <table className='table-auto w-full'>
    <thead>
        <tr>
            {Object.keys(data[3]).map((item,index)=>{
               if(index===0){
                return(
                    <th key={index} className='sticky left-0 z-10 px-4 py-2 border bg-dark-cl text-white'>
                    {item}
                                    
                                </th>
                    )
                     
               }else{
                return(
                    <th key={index} className='px-4 py-2 border bg-dark-cl text-white'>
                    {item}
                                    
                                </th>
                    )
               }


            })}
            
        </tr>
    </thead>
    <tbody>
        {data.map((item,i)=>{
            return(
                <tr key={i}>
                    {
                        Object.keys(data[3]).map((each,index)=>{
                        if(index===0){
                            return(
                                <td className='sticky left-0 z-10 bg-white border px-4 py-2' key={index}>{item[each]==""?"-":item[each]}</td>
                            )
                        }else{
                            return(
                                <td className='border px-4 py-2' key={index}>{item[each]==""?"-":item[each]}</td>
                            )
                        }
                       
                    })
                    }
                </tr>
            )
        })}
    </tbody>
</table>
    </div>
  )
}

export default GradeTable